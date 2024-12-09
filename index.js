const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
// const connection = require("./dbConnection");
const cors = require("cors");

// connection();
//
app.use(express.json());
// to get data to te frontend
app.use(cors());
// used for form data
// app.use(express.urlencoded({ extended: false }));

app.use("/api/news", require("./routes/data"));

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
