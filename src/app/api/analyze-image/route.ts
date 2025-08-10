import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const genAI = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request: NextRequest) {
    try {
        const { image, mimeType }: { image: string, mimeType: string } = await request.json();

        const contents = [
            {
                inlineData: {
                    mimeType: mimeType,
                    data: image,
                },
            },
            {
                text: 'Identify the product in the image and return the product name, brand, and price. Return the response in JSON format with the following keys: product_name, brand, price. If the product is not identified, return an empty string for all keys.',
            },

        ];

        const response = await genAI.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: contents,
        });

        return NextResponse.json({ result: response });
    } catch (error) {
        console.error('Error analyzing image:', error);
        return NextResponse.json(
            { error: 'Failed to analyze image' },
            { status: 500 }
        );
    }
}
