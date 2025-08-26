import express from "express";
// import path from "path"
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8080;

// googleat kako poslat html clientu

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  // res.send("gawasa");
});

app.listen(port, () => {
  console.log("listening to port");
});
