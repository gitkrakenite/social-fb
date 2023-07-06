const express = require("express");
const {
  registerUser,
  loginUser,
  updateMyAccount,
  fetchAllUsers,
  getAUser,
  checkIfUserAlreadyExists,
  deleteMyAccount,
} = require("../controllers/userController");
const router = express.Router();

router.post("/create", registerUser); //create user
router.post("/login", loginUser); // login user
router.put("/:id", updateMyAccount); // update user
router.get("/", fetchAllUsers); //fetch all users
router.get("/:id", getAUser); // specific user
router.delete("/:id", deleteMyAccount); // delete user
router.post("/check", checkIfUserAlreadyExists); // check is user exists

module.exports = router;
