import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function POST(req: NextRequest) {
    try {
        const text = await req.text();
        const hmac = crypto.createHmac('sha256', process.env.LEMONSQUEEZY_WEBHOOK_SECRET || '');
        const digest = Buffer.from(hmac.update(text).digest('hex'), 'utf8');
        const signature = Buffer.from(req.headers.get('x-signature') || '', 'utf8');

        if (!crypto.timingSafeEqual(digest, signature)) {
            return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
        }

        const payload = JSON.parse(text);
        const eventName = payload.meta.event_name;
        const body = payload.data;
        const { customer_id, id: subscription_id } = body.attributes;
        const userId = payload.meta.custom_data?.user_id;

        if (!userId) {
            // If userId is missing from custom_data, we might need to look it up by customer_id if we stored it previously
            // For now, let's assume we pass user_id in custom_data during checkout
            console.log('No user_id in custom_data');
            return NextResponse.json({ message: 'No user_id provided' }, { status: 200 });
        }

        switch (eventName) {
            case 'subscription_created':
            case 'subscription_updated':
                const status = body.attributes.status;
                const isPro = status === 'active' || status === 'on_trial';

                await db.update(users)
                    .set({
                        subscriptionTier: isPro ? 'pro' : 'free',
                        lemonSqueezyCustomerId: customer_id?.toString(),
                        lemonSqueezySubscriptionId: subscription_id?.toString(),
                        currentPeriodEnd: new Date(body.attributes.renews_at),
                    })
                    .where(eq(users.id, userId));
                break;

            case 'subscription_cancelled':
            case 'subscription_expired':
                await db.update(users)
                    .set({ subscriptionTier: 'free' })
                    .where(eq(users.id, userId));
                break;
        }

        return NextResponse.json({ message: 'Webhook received' }, { status: 200 });

    } catch (error) {
        console.error('Webhook error:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
