import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { productQuery } = await request.json();

        const response = await fetch('https://real-time-amazon-data.p.rapidapi.com', {
            method: "GET",
            headers: {
                'x-rapidapi-key': process.env.AMAZON_REALTIME_DATA!,
                'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
            }

        });
    } catch (e) {
        console.error("Amazon API Error: ", e);
        return NextResponse.json(
            { error: "Failed to fetch Amazon data" },
            { status: 500 }
        );
    }
}