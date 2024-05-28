const express = require("express")
const router = express.Router()
const {createBlog} = require("../controllers/blogController")

router.get("/", (req, res) => {
  res.send("homepage");
});

router.get("/:id", (req, res) => {
  res.send("specific id");
});

router.post("/", createBlog);

router.patch("/:id", (req, res) => {
  res.send("patch request");
});

router.delete("/:id", (req, res) => {
  res.send("delete request");
});

module.exports = router