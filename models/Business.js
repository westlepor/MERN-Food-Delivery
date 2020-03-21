const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
  businessName: {
    type: String,
    required: true
  },
  yelpUrl: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: "categories"
  }],
  hours: [{
    type: Schema.Types.ObjectId,
    ref: "hours"
  }],
  phone: {
    type: String,
    required: true
  },
  reviewCount: {
    type: Number,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address1: {
    type: String,
    required: true
  },
  address2: {
    type: String
  },
  address3: {
    type: String
  },
  isClosed: {
    type: Boolean
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = Business = mongoose.model("Business", BusinessSchema);
