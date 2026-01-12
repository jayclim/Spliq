'use server';

import { auth } from '@clerk/nextjs/server';
import { scanReceipt } from '@/lib/ai/gemini';
import { checkSubscription } from '@/lib/auth/subscription';

export async function processReceiptAction(formData: FormData) {
    const { userId } = await auth();
    if (!userId) {
        throw new Error('Unauthorized');
    }

    // Feature Gate: Check if user is Pro
    const isPro = await checkSubscription(userId);
    if (!isPro) {
        // In a real app, maybe allow 1 free scan, but for now strict gating
        throw new Error('Upgrade to Pro to use AI Receipt Scanning');
    }

    const file = formData.get('receipt') as File;
    if (!file) {
        throw new Error('No receipt image provided');
    }

    // Convert File to Base64
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = buffer.toString('base64');

    try {
        const data = await scanReceipt(base64Image);
        return { success: true, data };
    } catch (error) {
        console.error('Process Receipt Error:', error);
        return { success: false, error: 'Failed to scan receipt' };
    }
}
