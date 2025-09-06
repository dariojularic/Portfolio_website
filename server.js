import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// pojasnit ovaj process.env.PORT
const port = process.env.PORT || 8080;

// googleat kako poslat html clientu

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log("listening to port");
});

// sta jos treba napravit na serveru?
// css responsivness
// ocu radit light/dark mode?
// css animacija on scroll
// scrolanje projekata
