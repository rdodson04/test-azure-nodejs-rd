const express = require('express');
const app = express();
const port = 3001;

// Serve static files (index.html)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Endpoint to simulate rolling a dice
app.get('/roll-dice', (req, res) => {
  const result = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
  res.json({ result });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});