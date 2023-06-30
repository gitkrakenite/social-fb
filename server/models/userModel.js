const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profile: {
      type: String,
      default:
        "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
    },
    password: { type: String, required: true },
    hobbies: { type: String },
    bio: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
