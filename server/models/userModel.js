const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    admNo: { type: String, required: true, unique: true },
    caption: { type: String, required: true },
    profile: {
      type: String,
      default:
        "https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    password: { type: String, required: true },
    hobbies: { type: String },
    bio: { type: String },
    gender: { type: String, required: true },
    majorAndCareer: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
