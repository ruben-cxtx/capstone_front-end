import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/header", (req, res) => {
  res.render("header");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.get("/create", (req, res) => {
  res.render("create");
});

app.get("/footer", (req, res) => {
  res.render("footer");
});
// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
