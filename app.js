import express from 'express';
import guestbookRoutes from './routes/guestbookRoutes.js';
import path from "path";


const app = express();

// Middleware to parse form data and make it available to us in req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), "public")));
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

const loggingMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

app.use(loggingMiddleware);

// Use the signup routes
app.use('/', guestbookRoutes);

app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
