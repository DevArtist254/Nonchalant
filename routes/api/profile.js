const express = require("express")
const axios = require("axios")
const config = require("config")
const router = express.Router()
const auth = require("../../auth/auth")
const {check, validationResult} = require("express-validator")

const Profile = require("../../models/Profile")
const User = require("../../models/User")

// @route    GET api/profile/me
// @desc     Get a users profile
// @access   Private
router.get("/me", [auth], async (req, res) => {
  try {
    let profile = await Profile.findOne({user: req.user.id}).populate("user", [
      "fullname",
      "avatar",
    ])

    if (!profile) {
      res.status(404).send("Profile not found")
    }

    res.json(profile)
  } catch (err) {
    console.error(err.message)
    return res.status(500).send("Server Error")
  }
})

// @route    GET api/profile/
// @desc     Get all profiles
// @access   Public
router.get("/", async (req, res) => {
  try {
    let profiles = await Profile.find().populate("user", ["fullname", "avatar"])

    res.json(profiles)
  } catch (err) {
    console.error(err.message)
    return res.status(500).send("Server Error")
  }
})

// @route    GET api/profile/user/:user_id
// @desc     Get all profiles
// @access   Public
router.get("/user/:user_id", async (req, res) => {
  try {
    let profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["fullname", "avatar"])

    if (!profile) {
      res.status(400).json({msg: "Profile not found"})
    }

    res.json(profile)
  } catch (err) {
    if (err.kind == "objectId") {
      res.status(400).json({msg: "Profile not Found"})
    }
    console.error(err.message)
    return res.status(500).send("Server Error")
  }
})

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private

router.post("/", auth, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }

  const {
    location,
    items,
    payment,
    paymentDate,
    // spread the rest of the fields we don't need to check
    ...rest
  } = req.body

  //Build a profileField
  let profileFields = {
    user: req.user.id,
    items,
    location,
    payment,
    paymentDate,
  }

  try {
    let profile = await Profile.findOne({user: req.user.id})

    if (profile) {
      // Using upsert option (creates new doc if no match is found):
      let profile = await Profile.findOneAndUpdate(
        {user: req.user.id},
        {$set: profileFields},
        {new: true, upsert: true, setDefaultsOnInsert: true}
      )

      return res.json(profile)
    } else {
      //create a new profile
      profile = new Profile(profileFields)

      profile.save()
    }
  } catch (err) {
    console.error(err.message)
    return res.status(500).send("Server Error")
  }
})

// @route    Delete api/profile
// @desc     Delete profile and user
// @access   Private

router.delete("/", auth, async (req, res) => {
  try {
    await Profile.findOneAndRemove({user: req.user.id}),
      await User.findOneAndRemove({_id: req.user.id})

    res.send("Success")
  } catch (err) {
    console.error(err.message)
    return res.status(500).send("Server Error")
  }
})

module.exports = router
