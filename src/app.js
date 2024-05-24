//app.js

const express = require("express");
const User = require("./model/user.model");
const app = express();
const router = express.Router();
require("./index");

app.use(express.json());
router.get("/", (req, res) => {
  res.send("App is running..");
});
router.get("/hello", (req, res) => {
  res.send("Hello World");
});

router.post("/blogs", async (req, res) => {
  const { username, email, blog } = req.body;
  try {
    let user = await User.create({ username, email, blog });
    res.status(201).send(user);
  } catch (err) {
    res.status(422).send(err);
    console.log(err);
  }
});
router.get("/blogs", async (req, res) => {
  try {
    let user = await User.find({});
    res.status(201).json({
      message: "All blogs",
      results: user.length,
      data: user,
    });
  } catch (err) {
    res.status(422).send(err);
    ß;
    console.log(err);
  }
});

app.use("/api/v1", router);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
