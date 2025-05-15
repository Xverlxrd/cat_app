import {NextResponse} from "next/server";

export async function GET() {
    const API_URL = new URL(`${process.env.BASE_CAT_URL}/v1/images/search`);

    API_URL.searchParams.set('size', 'med');
    API_URL.searchParams.set('limit', '1');
    API_URL.searchParams.set('has_breeds', 'true');

    try {
        const res = await fetch(API_URL, {
            headers: {
                'x-api-key': process.env.CAT_API_KEY || ''
            }
        });

        if (!res.ok) throw new Error(`Error API: ${res.status}`);

        const data = await res.json();
        return NextResponse.json(data[0]);

    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to load cat' },
            { status: 500 }
        );
    }
}