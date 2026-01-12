'use server';

import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { auth } from '@clerk/nextjs/server';

export async function checkSubscription(userId?: string): Promise<boolean> {
    const { userId: currentUserId } = await auth();
    const idToCheck = userId || currentUserId;

    if (!idToCheck) {
        return false;
    }

    const user = await db.query.users.findFirst({
        where: eq(users.id, idToCheck),
        columns: {
            subscriptionTier: true,
            currentPeriodEnd: true,
        },
    });

    if (!user) return false;

    const isPro = user.subscriptionTier === 'pro';

    // Optionally check if period has expired if you want strictly enforcing dates
    // But usually the webhook handles downgrading status.
    // const isActive = user.currentPeriodEnd ? new Date(user.currentPeriodEnd) > new Date() : false;

    return isPro;
}
