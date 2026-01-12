
import { createGroup, removeMember, updateGroupRole } from '@/lib/actions/groups';
import { db, client } from '@/lib/db';
import { users, groups, usersToGroups } from '@/lib/db/schema';
import { eq, and } from 'drizzle-orm';

// Mock auth and syncUser
jest.mock('@clerk/nextjs/server', () => ({
    auth: jest.fn(),
}));

jest.mock('@/lib/auth/sync', () => ({
    syncUser: jest.fn(),
}));

jest.mock('next/navigation', () => ({
    redirect: jest.fn(),
}));

const mockAuth = require('@clerk/nextjs/server').auth;
const mockSyncUser = require('@/lib/auth/sync').syncUser;

describe('Group Permissions Hierarchy', () => {
    jest.setTimeout(30000);
    const ownerId = 'test_owner_p';
    const adminId = 'test_admin_p';
    const memberId = 'test_member_p';
    let groupId: number;

    beforeAll(async () => {
        // Create 3 users
        await db.insert(users).values([
            { id: ownerId, name: 'Owner P', email: 'owner_p@test.com', isGhost: false },
            { id: adminId, name: 'Admin P', email: 'admin_p@test.com', isGhost: false },
            { id: memberId, name: 'Member P', email: 'member_p@test.com', isGhost: false },
        ]).onConflictDoNothing();
    });

    afterAll(async () => {
        if (groupId) await db.delete(groups).where(eq(groups.id, groupId));
        await db.delete(users).where(eq(users.id, ownerId));
        await db.delete(users).where(eq(users.id, adminId));
        await db.delete(users).where(eq(users.id, memberId));
        await client.end();
    });

    it('createGroup should assign Owner role', async () => {
        mockAuth.mockResolvedValue({ userId: ownerId });
        mockSyncUser.mockResolvedValue({ id: ownerId, email: 'owner_p@test.com' });

        const group = await createGroup('Perms Test Group ' + Date.now(), 'Desc');
        groupId = group.id;

        const membership = await db.query.usersToGroups.findFirst({
            where: and(eq(usersToGroups.userId, ownerId), eq(usersToGroups.groupId, groupId))
        });

        expect(membership).toBeDefined();
        expect(membership?.role).toBe('owner');
    });

    it('Owner should be able to promote Member to Admin', async () => {
        // First add member and admin to group manually so we have targets
        await db.insert(usersToGroups).values([
            { userId: adminId, groupId: groupId, role: 'member' }, // Start as member
            { userId: memberId, groupId: groupId, role: 'member' },
        ]);

        mockAuth.mockResolvedValue({ userId: ownerId });
        mockSyncUser.mockResolvedValue({ id: ownerId });

        // Promote adminId to admin
        await updateGroupRole(groupId.toString(), adminId, 'admin');

        const membership = await db.query.usersToGroups.findFirst({
            where: and(eq(usersToGroups.userId, adminId), eq(usersToGroups.groupId, groupId))
        });
        expect(membership?.role).toBe('admin');
    });

    it('Admin should NOT be able to promote Member', async () => {
        mockAuth.mockResolvedValue({ userId: adminId });
        mockSyncUser.mockResolvedValue({ id: adminId });

        await expect(updateGroupRole(groupId.toString(), memberId, 'admin'))
            .rejects.toThrow('Access denied: Only the owner can manage roles');
    });

    it('Owner should be able to demote Admin', async () => {
        mockAuth.mockResolvedValue({ userId: ownerId });
        mockSyncUser.mockResolvedValue({ id: ownerId });

        // Demote adminId back to member
        await updateGroupRole(groupId.toString(), adminId, 'member');

        const membership = await db.query.usersToGroups.findFirst({
            where: and(eq(usersToGroups.userId, adminId), eq(usersToGroups.groupId, groupId))
        });
        expect(membership?.role).toBe('member');

        // Restore to admin for next tests
        await updateGroupRole(groupId.toString(), adminId, 'admin');
    });

    it('Owner should be able to remove Admin', async () => {
        mockAuth.mockResolvedValue({ userId: ownerId });
        mockSyncUser.mockResolvedValue({ id: ownerId });

        // Temporarily add another admin to remove
        const tempAdminId = 'temp_admin_p';
        await db.insert(users).values({ id: tempAdminId, name: 'Temp', email: 'temp@test.com', isGhost: false }).onConflictDoNothing();
        await db.insert(usersToGroups).values({ userId: tempAdminId, groupId: groupId, role: 'admin' });

        await removeMember(groupId.toString(), tempAdminId);

        const membership = await db.query.usersToGroups.findFirst({
            where: and(eq(usersToGroups.userId, tempAdminId), eq(usersToGroups.groupId, groupId))
        });
        expect(membership).toBeUndefined();

        await db.delete(users).where(eq(users.id, tempAdminId));
    });

    it('Admin should NOT be able to remove another Admin', async () => {
        // Create another admin
        const otherAdminId = 'other_admin_p';
        await db.insert(users).values({ id: otherAdminId, name: 'Other', email: 'other@test.com', isGhost: false }).onConflictDoNothing();
        await db.insert(usersToGroups).values({ userId: otherAdminId, groupId: groupId, role: 'admin' });

        mockAuth.mockResolvedValue({ userId: adminId });
        mockSyncUser.mockResolvedValue({ id: adminId });

        await expect(removeMember(groupId.toString(), otherAdminId))
            .rejects.toThrow('Access denied: Admins cannot remove other admins');

        await db.delete(usersToGroups).where(eq(usersToGroups.userId, otherAdminId)); // Cleanup
        await db.delete(users).where(eq(users.id, otherAdminId));
    });

    it('Admin should be able to remove Member', async () => {
        mockAuth.mockResolvedValue({ userId: adminId });
        mockSyncUser.mockResolvedValue({ id: adminId });

        // Ensure memberId is still in group (it should be)
        await removeMember(groupId.toString(), memberId);

        const membership = await db.query.usersToGroups.findFirst({
            where: and(eq(usersToGroups.userId, memberId), eq(usersToGroups.groupId, groupId))
        });
        expect(membership).toBeUndefined();
    });
});
