const express = require("express")
const app = express()
const port = 8080;

app.get("/", (req, res) => {
  res.send("gawasa")
})

app.listen(port, () => {
  console.log("listening to port")
})
