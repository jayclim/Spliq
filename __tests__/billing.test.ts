
// Mock dependencies
jest.mock('@clerk/nextjs/server', () => ({
    auth: jest.fn(() => Promise.resolve({ userId: 'user_123' })),
}));

// Mock DB
const mockUser = {
    id: 'user_123',
    subscriptionTier: 'free',
    currentPeriodEnd: null,
};

jest.mock('@/lib/db', () => ({
    db: {
        query: {
            users: {
                findFirst: jest.fn(() => Promise.resolve(mockUser)),
            },
        },
        update: jest.fn(() => ({
            set: jest.fn(() => ({
                where: jest.fn(() => Promise.resolve([{ id: 'user_123' }])),
            })),
        })),
    },
}));

import { checkSubscription } from '@/lib/auth/subscription';
import { generateSettlementLink } from '@/lib/utils';

describe('Subscription Logic', () => {
    test('checkSubscription returns false for free user', async () => {
        mockUser.subscriptionTier = 'free';
        const isPro = await checkSubscription();
        expect(isPro).toBe(false);
    });

    test('checkSubscription returns true for pro user', async () => {
        mockUser.subscriptionTier = 'pro';
        const isPro = await checkSubscription();
        expect(isPro).toBe(true);
    });
});

describe('Smart Settlement Links', () => {
    test('generates valid Venmo deep link', () => {
        const link = generateSettlementLink('venmo', 'user123', 25.50, 'Dinner');
        expect(link).toBe('venmo://paycharge?txn=pay&recipients=user123&amount=25.5&note=Dinner');
    });

    test('generates valid Cash App link', () => {
        const link = generateSettlementLink('cashapp', 'user123', 10, 'Lunch');
        expect(link).toBe('https://cash.app/$user123/10');
    });

    test('generates valid PayPal link', () => {
        const link = generateSettlementLink('paypal', 'user123', 50.00, 'Rent');
        expect(link).toBe('https://paypal.me/user123/50');
    });

    test('returns null for unsupported platform', () => {
        // @ts-ignore
        const link = generateSettlementLink('unsupported', 'user123', 10);
        expect(link).toBeNull();
    });

    test('handles missing note gracefuly for Venmo', () => {
        const link = generateSettlementLink('venmo', 'user123', 25.50);
        expect(link).toBe('venmo://paycharge?txn=pay&recipients=user123&amount=25.5&note=Expense%20Settlement');
    });
});
