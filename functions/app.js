//app.js

const express = require("express");
const serverless = require("serverless-http");
const Blog = require("./model/user.model");
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
  const { username, blog } = req.body;
  try {
    let blogs = await Blog.create({ username, blog });
    res.status(201).send(blogs);
  } catch (err) {
    res.status(422).send(err);
    console.log(err);
  }
});
router.get("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let blogs = await Blog.findById(id);
    res.status(201).json({
      message: "Blog by id",
      data: blogs,
    });
  } catch (err) {
    res.status(422).send(err);
    console.log(err);
  }
});
router.get("/blogs", async (req, res) => {
  try {
    let user = await Blog.find({});
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

app.use("/.netlify/functions/app", router);
// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
module.exports.handler = serverless(app);
