const express = require("express")
const app = express()

const port = process.env.PORT || 4000

const Owner = require("./models/Owner")
const Dog = require("./models/Dog")

app.get("/dogs", (request, response) => {
  Dog.query().withGraphFetched("owners").then(dogs => {
    response.json({ dogs })
  })
})
app.get("/owners", (request, response) => {
  Owner.query().withGraphFetched("dogs").then(owners => {
    response.json({ owners })
  })
})

app.listen(port)
