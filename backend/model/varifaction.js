const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    varifaction_code: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("varifaction", Schema);
