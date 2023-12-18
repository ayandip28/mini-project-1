const quoteDisplay = document.getElementById('quote');
const authorDisplay = document.getElementById('author');

// Fetch a random quote
fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    quoteDisplay.textContent = `"${data.content}"`;
    authorDisplay.textContent = `- ${data.author}`;
  })
  .catch(error => {
    quoteDisplay.textContent = 'Failed to fetch a quote.';
    console.log(' Oops!!!!\nError fetching quote:', error);
  });
