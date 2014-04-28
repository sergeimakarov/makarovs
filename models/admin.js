var mongoose = require("../lib/mongoose");
var Schema = mongoose.Schema;
var AdminSchema = new Schema({

    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    moniker: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      lowercase: true,
      required: true
    },
    pass: {
      required: true,
      type: String
    }
  });

  exports.Admin = mongoose.model("Admin", AdminSchema, "admin")
  console.log("DONE");

