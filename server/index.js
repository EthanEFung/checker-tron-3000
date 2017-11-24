const express = require("express");
const path = require("path");
const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, "../", "client")));

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, err => {
  if (err) throw new Error("could not connect");
  console.log("connected to ", PORT);
});
