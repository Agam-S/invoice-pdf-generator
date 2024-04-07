const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

const server = app.listen(process.env.PORT || 8080, () => {
  const port = server.address().port;
  console.log(`Server is running on port ${port}`);
});

// DEFAULT ROUTE
app.get("/", (req, res) => {
  res.render("index");
});
