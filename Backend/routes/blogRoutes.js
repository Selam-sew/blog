const express = require("express")
const router = express.Router()
const {createBlog,getBlog,updateBlog,deleteBlog} = require("../controllers/blogController")

router.get("/", (req, res) => {
  res.send("homepage");
});

router.get("/:id", getBlog);

router.post("/", createBlog);

router.patch("/:id", updateBlog);

router.delete("/:id", deleteBlog);

module.exports = router