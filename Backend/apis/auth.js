const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Secret key for JWT (Note: Keep it secret in a real application)
const secretKey = "your_secret_key";

// Sample user data (In production, use a database)
const users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) return res.sendStatus(401);

  const token = jwt.sign({ username: user.username, id: user.id }, secretKey);
  res.json({ token });
});

// Protected endpoint
app.get("/profile", authenticateToken, (req, res) => {
  res.json(req.user);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
