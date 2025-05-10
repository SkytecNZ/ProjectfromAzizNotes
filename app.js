const express = require('express'); // Import the Express library

const app = express(); // Create an instance of an Express application

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views'); // Use a relative path for the views directory

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
res.render('home'); // Render the 'home.ejs' file
});

// Define a route for the login page
app.get('/login', (req, res) => {
  res.render('login'); // Render the 'login.ejs' file
  });
  
  // Define a route for the register page
  app.get('/register', (req, res) => {
  res.render('register'); // Render the 'register.ejs' file
  });
  
// Start the server and listen on port 3000
app.listen(3000, () => {
console.log('Server is running on http://localhost:3000'); // Log a message when the server starts
});