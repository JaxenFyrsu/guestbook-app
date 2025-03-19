import path from "path";
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
let signup = [];

// Display the signup form.  Notice it is a GET method
router.get("/signup", (req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "signup.html"));
 });
 

// Handle the signup form submission. Notice it is a POST method
router.post('/signup', (req, res) => {
    const { name, message } = req.body;
    if (!name || !message) {
        return res.status(400).send('Name and message are required.');
    }

    // Add the signup to the in-memory storage
    signup.push({ name, message });
    res.send(`${name}, ${message}`);
});

// Route: Display all signups (for testing purposes)
router.get('/signups', (req, res) => {
    res.json(signup);
});

// Make the file available to be imported into app.js
export default router;
