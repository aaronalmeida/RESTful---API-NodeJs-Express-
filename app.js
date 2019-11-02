const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

//ROUTES

app.use(bodyParser.json());

const postsRoute = require("./Routes/posts");

app.use("/posts", postsRoute);

//gives us back a message
app.get("/", (req, res) => {
  res.send("We are on home");
});

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to DB")
);

//listen to server
app.listen(3000);
