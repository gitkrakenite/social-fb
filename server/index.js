const express = require("express");
const colors = require("colors");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("API Working Correctly"));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
