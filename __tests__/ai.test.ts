
// Mock the Google Generative AI SDK
const mockGenerateContent = jest.fn();
const mockGetGenerativeModel = jest.fn(() => ({
    generateContent: mockGenerateContent,
}));

jest.mock('@google/generative-ai', () => ({
    GoogleGenerativeAI: jest.fn(() => ({
        getGenerativeModel: mockGetGenerativeModel,
    })),
}));

import { scanReceipt } from '@/lib/ai/gemini';

describe('Gemini Receipt Scanning', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        process.env.GOOGLE_AI_API_KEY = 'mock-key';
    });

    test('parses valid JSON response from Gemini', async () => {
        // Mock the AI response
        const mockExpense = {
            items: [
                { name: 'Burger', price: 15.50 },
                { name: 'Fries', price: 5.00 }
            ],
            total: 20.50,
            date: '2025-10-24'
        };

        mockGenerateContent.mockResolvedValue({
            response: {
                text: () => JSON.stringify(mockExpense),
            },
        });

        const result = await scanReceipt('mock-image-data-base64');

        expect(result).toEqual(mockExpense);
        expect(mockGetGenerativeModel).toHaveBeenCalledWith({ model: 'gemini-2.5-flash' });
    });

    test('handles invalid JSON gracefully', async () => {
        mockGenerateContent.mockResolvedValue({
            response: {
                text: () => 'Invalid JSON',
            },
        });

        await expect(scanReceipt('mock-data')).rejects.toThrow();
    });
});
