const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  businesses: [{
    type: Schema.Types.ObjectId,
    ref: "Business"
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = Category = mongoose.model("Category", CategorySchema);
