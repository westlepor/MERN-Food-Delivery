const Validator = require("validator");
const validText = require("./valid-text");
const validInteger = require("./valid-integer");

module.exports = function validateBusinessInput(data) {
  let errors = {};

  data.businessName = validText(data.businessName) ? data.businessName : "";

  if (!Validator.isLength(data.businessName, { min: 1, max: 30 })) {
    errors.businessName = "Business name must be between 1 and 30 chars";
  }
  if (Validator.isEmpty(data.businessName)) {
    errors.businessName = "Business name field is required";
  }
  
  data.yelpUrl = validText(data.yelpUrl) ? data.yelpUrl : "";
  if (!Validator.isDataURI(data.yelpUrl) || data.yelpUrl.length === 0) {
    errors.yelpUrl = "Valid Yelp URL is required";
  }

  if (Validator.isEmpty(data.latitude)) {
    errors.latitude = "Latitude field is required";
  }

  if (Validator.isEmpty(data.longitude)) {
    errors.longitude = "Longitude field is required";
  }

  data.phone = validText(data.phone) ? data.phone : "";
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Phone field is required";
  }

  if (Validator.isEmpty(data.reviewCount)) {
    errors.reviewCount = "Review count field is required";
  }
  
  if (validInteger(data.reviewCount)){
    errors.reviewCount = "Review count should be integer";
  }

  data.price = validText(data.price) ? data.price : "";
  if (Validator.isEmpty(data.price)) {
    errors.price = "Price field is required";
  }

  data.rating = validText(data.rating) ? data.rating : "";
  if (Validator.isEmpty(data.rating)) {
    errors.rating = "Rating field is required";
  }

  data.zipcode = validText(data.zipcode) ? data.zipcode : "";
  if (!Validator.isLength(data.zipcode, { min: 5, max: 5 })) {
    errors.zipcode = "Zipcode must be valid";
  }

  data.country = validText(data.country) ? data.country : "";
  if (Validator.isEmpty(data.country)) {
    errors.country = "Country field is required";
  }

  data.state = validText(data.state) ? data.state : "";
  if (Validator.isEmpty(data.state)) {
    errors.state = "State field is required";
  }

  data.city = validText(data.city) ? data.city : "";
  if (Validator.isEmpty(data.city)) {
    errors.city = "City field is required";
  }

  data.address1 = validText(data.address1) ? data.address1 : "";
  if (Validator.isEmpty(data.address1)) {
    errors.address1 = "Address field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
