const Moongose = require("mongoose")

const homeSchema = new Moongose.Schema({
  id: Number,
  title: String,
  imageUrl: String,
  size: String,
})

module.exports = Home = new Moongose.model("home", homeSchema)
