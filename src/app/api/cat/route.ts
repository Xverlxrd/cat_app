
export const dynamic = 'force-dynamic';

export async function GET() {
    const apiUrl = new URL(`${process.env.BASE_CAT_URL}/v1/images/search`);
    apiUrl.searchParams.set('limit', '1');
    apiUrl.searchParams.set('size', 'med');

    try {
        const res = await fetch(apiUrl, {
            headers: {
                'x-api-key': process.env.CAT_API_KEY || ''
            },
            next: { revalidate: 60 }
        });

        const data = await res.json();
        return Response.json(data[0]);
    } catch (error) {
        return Response.json(
            { error: 'Failed to fetch cat' },
            { status: 500 }
        );
    }
}