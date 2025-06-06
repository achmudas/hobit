export const fetchHobits = async () => {
    try {
        const response = await fetch('http://localhost:8080/hobits', { mode: 'cors' });
        if (!response.ok) throw new Error('Something failed');
        return await response.json();
    } catch (error) {
        console.error('Fetch hobits failed:', error);
        throw error;
    }
}

export const createHobit = async (hobit) => {
    const response = await fetch('http://localhost:8080/hobits', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hobit)
    });
    if (!response.ok) {
        throw new Error('Failed to create new hobit');
    }
    return response.json();
}