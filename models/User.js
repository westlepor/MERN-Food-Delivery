const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  zipcode: { 
      type: Number, 
      min: 10000, 
      max: 99999 
  },
  birthday: {
      type: Date
  },
  foodRestriction: {
      type: Schema.Types.ObjectId,
      ref: "foodRestrictions"
  },
  groups: {
      type: Schema.Types.ObjectId,
      ref: "groups"
  },
  monetaryRestriction: {
      type: String, 
      required: true
  },
  createdAt: {
      type: Date,
      default: Date.now
  }
});

module.exports = User = mongoose.model("User", UserSchema);
