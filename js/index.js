import express from "express";
import bodyParser from "body-parser";

app.use(express.static("public"));

const port = 3000;
const app = express();

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
