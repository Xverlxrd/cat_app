export const fetchRandomCat = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_CAT_URL}/v1/images/search?limit=1`, {
        headers: {
            'x-api-key': process.env.NEXT_PUBLIC_CAT_API_KEY || ''
        }
    });
    const data = await response.json();
    return data[0];
};