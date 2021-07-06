const express = require("express")
const route = express.Router()
const Home = require("../../models/Home")

route.get("/", async (req, res) => {
  //Read data from database send it back
  const data = await Home.find({})

  res.send(data)
})

// route.post("/", async (req, res) => {
//   //send items to the database
//   let data

//   data = new Home({
//     id: 10,
//     title: "Socks",
//     imageUrl: "www.facebook.com",
//     size: "large",
//   })

//   await data.save()

//   res.send("Data is sent")
// })

module.exports = route
