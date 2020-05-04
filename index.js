const express = require("express")
const app = express()

const port = process.env.PORT || 4000

app.get("/", (request, response) => {
  response.json({
    message: "Gluten tag"
  })
})

app.listen(port)
