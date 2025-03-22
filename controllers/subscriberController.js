// an array to temporarily store our form data. Later we will switch this out for a DBMS
let signups = [];

export const getHome = (req, res) => {
  res.send("Home page\n");
};

export const getSignup = (req, res) => {
  res.render("signup", {
    title: "Sign Up",
    message: "Drop your contact below",
    confirm: "Let´s Go",
  });
};

export const postSignup = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send("Name and email are required.");
  }

  // Add the signup to the in-memory storage
  signups.push({ name, email });
  res.render("thankyou", { title: "Thank You", name, email });
};

export const getSignups = (req, res) => {
  res.json(signups);
};
