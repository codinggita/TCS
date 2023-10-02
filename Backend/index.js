const ex = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = ex();
app.use(ex.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/TCS");

app.post("/register", (req, res) => {
  UserModel.create(req.body).then((users) =>
    res.json(users).catch((err) => res.json(err))
  );
});

app.listen(3001, () => {
  console.log("server is running");
});
