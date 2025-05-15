export async function getRandomCatImage() {
    try {
        const response = await fetch('/api/cat');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching cat:', error);
        return null;
    }
}