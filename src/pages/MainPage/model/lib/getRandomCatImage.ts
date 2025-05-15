export async function getRandomCatImage() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_CAT_URL}/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error('Error fetching cat:', error);
        return null;
    }
}