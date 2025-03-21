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
let signups = [];

// Display the signup form.  Notice it is a GET method
router.get("/signup", (req, res) => {
    res.render("signup", {
        title: "Sign Up",
        message: "Drop your contact below",
        confirm: "Let´s Go",
    }
    );
 });
 

// Handle the signup form submission. Notice it is a POST method
router.post('/signup', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).send('Name and email are required.');
    }

    // Add the signup to the in-memory storage
    signups.push({ name, email });
    res.render("thankyou", {title: "Thank You", name, email});
});

// Route: Display all signups (for testing purposes)
router.get('/signups', (req, res) => {
    res.json(signups);
});

// Make the file available to be imported into app.js
export default router;
