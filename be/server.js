require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const axios = require("axios");

app.get("/", (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    res.send(response.data);
    console.log(response.data);
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

