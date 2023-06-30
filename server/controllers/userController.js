const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  // check we have details from frontend
  const { displayName, email, password } = req.body;

  if (!displayName || !email || !password) {
    res.status(400).json({ message: "Some details are missing" });
    console.log(req.body);
    return;
  }
  // check if user exists in db
  const userExists = await User.findOne({ displayName });
  if (userExists) {
    return res.status(400).send("exists");
  }

  // register user
  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create user
  const user = await User.create({
    displayName,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      displayName: user.displayName,
      email: user.email,

      createdAt: user.createdAt,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

const loginUser = async (req, res) => {
  // check if details were sent
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Details missing" });
    return;
  }
  // check if user exists
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      displayName: user.displayName,
      email: user.email,
      // isAdmin: user.isAdmin,

      createdAt: user.createdAt,
    });
  } else {
    res.status(400).send("Invalid credentials");
  }
};

const getAUser = async (req, res) => {
  //  receive the user id
  const { id } = req.params;
  if (!id) {
    res.status(404).json({ message: "Id not sent" });
    return;
  }
  // check user
  const user = await User.findOne({ _id: id });

  // serve data
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(500).json({ message: "User not found" });
  }
};

const fetchAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ $natural: -1 });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// API that checks if sent user exists
const checkIfUserAlreadyExists = async (req, res) => {
  const { displayName } = req.body;

  try {
    const userExists = await User.findOne({ displayName });
    if (userExists) {
      let exists = "exists";
      return res.status(200).send(exists);
    } else {
      let exists = "not exist";
      return res.status(200).send(exists);
    }
  } catch (error) {
    return res.status(400).send("Error Checking");
  }
};

const updateMyAccount = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  getAUser,
  fetchAllUsers,
  updateMyAccount,
  checkIfUserAlreadyExists,
};
