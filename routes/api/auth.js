const express = require("express")
const route = express.Router()
const {check, validationResult} = require("express-validator")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("config")

const auth = require("../../auth/auth")
const User = require("../../models/User")

//here we auth user to use our app
route.get("/", auth, async (req, res) => {
  //retrive the user from the db and return the user to be used in the app with password
  try {
    //return the user without password
    const user = await User.findById(req.user.id).select("-password")

    res.json(user)
  } catch (error) {
    console.error(error.message)
  }
})

route.post(
  "/",
  [
    check("email", "please enter your email").isEmail(),
    check("password", "please enter your password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(404).json({errors: errors.array()})
    }

    //Receieve items from body
    let {email, password} = req.body

    try {
      //see if user exists
      //1. Check in the database of the email
      let user = await User.findOne({email})
      //2. Throw an error if a  user does not exist
      if (!user) {
        res.status(404).json({errors: [{msg: "Invalid credentials"}]})
      }

      //Compare passwords 1st one user has entered and second one is the one in the database
      const isMatch = await bcryptjs.compare(password, user.password)

      if (!isMatch) {
        res.status(404).json({errors: [{msg: "Invalid credentials"}]})
      }

      //send back json web token
      //create payload
      const payload = {
        user: {
          id: user.id,
        },
      }

      //creating the token with a time stamp
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {expiresIn: 360000},
        (err, token) => {
          if (err) {
            throw err
          } else {
            res.json({token})
          }
        }
      )
    } catch (error) {
      console.log(error.message)
      res.status(500).send("Server error")
    }
  }
)

module.exports = route
