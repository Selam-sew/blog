require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const blogRoute = require("./routes/blogRoutes");
app.use(express.json());
app.use("/api/blog", blogRoute);

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Connected to mongodb.Listening on port ${process.env.PORT}`)
  );
}).catch((error)=>{
    console.log(error)
})
