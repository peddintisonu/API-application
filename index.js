// function to fetch jokes 
async function getJoke() {
  try {
    // Select all elements with the class 'joke_card'
    const jokeCards = document.querySelectorAll('.joke_card');

    // Loop through each 'joke_card' element
    for (let i = 0; i < jokeCards.length; i++) {
      // Fetch a random joke from the API
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const jokeData = await response.json();

      // Select the 'jokeSetup' and 'jokePunch' elements within the current 'joke_card'
      const jokeSetupElement = jokeCards[i].querySelector('.jokeSetup');
      const jokePunchElement = jokeCards[i].querySelector('.jokePunch');

      // Change the text content of the 'jokeSetup' and 'jokePunch' elements with the fetched joke data
      jokeSetupElement.textContent = jokeData.setup; 
      jokePunchElement.textContent = jokeData.punchline;
    }
  } catch (error) {
    // Log an error message if there's an issue fetching jokes
    console.error('Error fetching jokes:', error);
  }
}

// Call the getJoke function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', getJoke);
