'use server';

import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

export async function updateProfile(data: {
    paymentMethods: {
        venmo?: string;
        cashapp?: string;
        paypal?: string;
    };
}) {
    const { userId } = await auth();

    if (!userId) {
        throw new Error('Unauthorized');
    }

    // Find Internal User ID
    // Note: Assuming Clerk ID matches or we mock sync. 
    // In real app we usually query verify user exists first.

    await db.update(users)
        .set({
            paymentMethods: data.paymentMethods,
        })
        .where(eq(users.id, userId));

    revalidatePath('/settings');
    return { success: true };
}

export async function getProfile() {
    const { userId } = await auth();
    if (!userId) return null;

    const user = await db.query.users.findFirst({
        where: eq(users.id, userId),
    });

    return user;
}
