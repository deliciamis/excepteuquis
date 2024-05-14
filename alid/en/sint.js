async function topGames(network) {
  try {
    // Make a request to the network to get the top games
    const response = await fetch(`https://www.example.com    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the response as JSON
    const data = await response.json();

    // Return the top games
    return data.games;
  } catch (error) {
    console.error('Failed to fetch top games:', error);
  }
}
