const express = require("express");
const colors = require("colors");
const cors = require("cors");
const dotenv = require("dotenv").config();

const connectDB = require("./config/db");
const userRouter = require("./routes/userRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => res.send("API Working Correctly"));

app.use("/api/v1/users", userRouter);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
