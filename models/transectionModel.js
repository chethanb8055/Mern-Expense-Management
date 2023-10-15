const mongoose = require("mongoose");

const transectionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      require: [true, "userid is required"],
    },
    amount: {
      type: Number,
      require: [true, "amount is required"],
    },
    category: {
      type: String,
      require: [true, "cat is required"],
    },
    refrence: { 
      type: String,
    },
    description: {
      type: String,
      require: [true, "desc is required"],
    },
    date: {
      type: Date,
      require: [true, "date is required"],
    },
    type: {
      type: String,
      require: [true, "type is required"],
    },
  },
  { timestamps: true }
);

const transectionModel = mongoose.model("transections", transectionSchema);


module.exports =transectionModel