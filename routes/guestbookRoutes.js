import express from 'express';
const router = express.Router();

// we will hook into the express frameowrk using the name 'app'
// just like when we create an instance of a class in C++

// Route for home page
// Headers automatically set and written
router.get('/', (req, res) => {
    res.send('Welcome.');
});

// an array to temporarily store our form data. Later we will switch this out for a DBMS
let guests = [];

// Display the guestbook form.  Notice it is a GET method
router.get('/guestbook', (req, res) => {
    res.send(`
    <h1>Guestbook</h1>
    <form method="POST" action="/guestbook">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required><br><br>
      <label for="message">Message:</label>
      <input type="message" id="message" name="message" required><br><br>
      <button type="submit">Send</button>
    </form>
  `);
});

// Handle the guestbook form submission. Notice it is a POST method
router.post('/guestbook', (req, res) => {
    const { name, message } = req.body;
    if (!name || !message) {
        return res.status(400).send('Name and message are required.');
    }

    // Add the guests to the in-memory storage
    guests.push({ name, message });
    res.send(`Hello, ${name}. Your message was received: ${message}`);
});

// Route: Display all signups (for testing purposes)
router.get('/guests', (req, res) => {
    res.json(guests);
});

// Make the file available to be imported into app.js
export default router;
