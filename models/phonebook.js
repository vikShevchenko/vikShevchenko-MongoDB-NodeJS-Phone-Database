const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const phonebookSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    number: {
      type: String,
      require: true,
    },
  },
  { versionKey: false }
);
//{ versionKey: false } щоб не було "__v"
const Phone = mongoose.model("Phone", phonebookSchema);
module.exports = Phone;
