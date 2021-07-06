const Mongoose = require("mongoose")

const profileSchema = new Mongoose.Schema({
  user: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  location: {
    type: String,
  },
  items: [
    {
      Product: {
        type: String,
        required: true,
      },
      Description: {
        type: String,
        required: true,
      },
      Quantity: {
        type: Number,
        required: true,
      },
      Price: {
        type: Number,
        required: true,
      },
    },
  ],
  payment: {
    type: Boolean,
    default: false,
  },
  paymentDate: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Profile = new Mongoose.model("profile", profileSchema)
