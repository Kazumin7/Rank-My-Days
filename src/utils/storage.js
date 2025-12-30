const API_URL = 'http://localhost:3001/api/ratings';

export const loadRatings = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('No saved ratings found');
    return null;
  }
};

export const saveRatings = async (ratings) => {
  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ratings),
    });
  } catch (error) {
    console.error('Failed to save ratings:', error);
  }
};