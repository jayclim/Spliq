import {
    lemonSqueezySetup,
    getCustomer,
    getSubscription,
} from '@lemonsqueezy/lemonsqueezy.js';

export function configureLemonSqueezy() {
    const apiKey = process.env.LEMONSQUEEZY_API_KEY;

    if (!apiKey) {
        throw new Error('LEMONSQUEEZY_API_KEY is not defined');
    }

    lemonSqueezySetup({
        apiKey,
        onError: (error) => console.error('Lemon Squeezy Error:', error),
    });
}

export async function getSubscriptionStatus(subscriptionId: string) {
    configureLemonSqueezy();
    try {
        const { data, error } = await getSubscription(subscriptionId);
        if (error) throw error;
        return data?.data.attributes.status;
    } catch (error) {
        console.error('Error fetching subscription:', error);
        return null;
    }
}
