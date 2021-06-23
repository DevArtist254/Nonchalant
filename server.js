const express = require("express")
const connectDB = require("./config/db")
const path = require("path")
const cors = require("cors")

if (process.env.NODE_ENV !== "production") require("dotenv").config()

//1.0
const app = express()
const PORT = process.env.PORT || 5000

//3.30
app.use(express.json({extended: false}))

app.use(cors())

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")))

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
  })
}

//Routes
app.use("/api/user", require("./routes/api/user"))
app.use("/api/auth", require("./routes/api/auth"))
app.use("/api/profile", require("./routes/api/profile"))
app.use("/api/data", require("./routes/api/data"))
app.use("/api/homeData", require("./routes/api/homeData"))
//Connect Database
connectDB()

app.listen(PORT, () => {
  console.log(`DevArtist Server is runing on port ${PORT}`)
})
