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
      type: String, 
      required: true
  },
  birthday: {
      type: Date
  },
  foodRestriction: [{
      type: Schema.Types.ObjectId,
      ref: "FoodRestriction"
  }],
  groups: [{
      type: Schema.Types.ObjectId,
      ref: "Group"
  }],
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
