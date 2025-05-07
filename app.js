const express = require('express'); // Import the Express library

const app = express(); // Create an instance of an Express application

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
res.send('This is the app root'); // Send a response to the client
});

// Start the server and listen on port 3000
app.listen(3000, () => {
console.log('Server is running on http://localhost:3000'); // Log a message when the server starts
});
