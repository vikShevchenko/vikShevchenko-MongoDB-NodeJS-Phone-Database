require("dotenv").config();
const URL = process.env.MY_URL;
const PORT = process.env.MY_PORT || 3005;
const mongoose = require("mongoose");
const express = require("express");
const phoneRouts = require("./routes/phone-routs");
const app = express();
//----------------------------------------------------------------
app.use(express.json());
app.use(phoneRouts);
//----------------------------------------------------------------
mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connecter to DB"))
  .catch((err) => console.log(err));
//----------------------------------------------------------------
app.listen(PORT, () => console.log("Started on", PORT));
