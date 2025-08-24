const express = require("express")
const path = require("path")
const app = express()
const port = 8080;

app.use(express.static(path.join(__dirname, "public")))


app.get("/", (req, res) => {
  res.send("gawasa")
})

app.listen(port, () => {
  console.log("listening to port")
})
