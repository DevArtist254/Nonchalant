const express = require("express")
const Mongoose = require("mongoose")
const route = express.Router()

const dataSchema = new Mongoose.Schema({})
const Data = new Mongoose.model("data", dataSchema)

route.get("/", async (req, res) => {
  //read data form our database
  const data = await Data.find({})
  res.send(data)
})

module.exports = route
