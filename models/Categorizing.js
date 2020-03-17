const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorizingSchema = new Schema({
  
  businessId: {
    type: Schema.Types.ObjectId,
    ref: "businesses",
    required: true
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "categories",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = Categorizing = mongoose.model("Categorizing", CategorizingSchema);
