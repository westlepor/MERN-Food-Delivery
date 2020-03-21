const Validator = require("validator");
const validText = require("./valid-text");
const validInteger = require("./valid-integer");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.username = validText(data.username) ? data.username : "";
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.password2 = validText(data.password2) ? data.password2 : "";
  data.monetaryRestriction = validText(data.monetaryRestriction) ? data.monetaryRestriction : "";
  data.zipcode = validText(data.zipcode) ? data.zipcode : "";

//   data.zipcode = validInteger(data.zipcode) ? data.zipcode : "";

  if (!Validator.isLength(data.username, { min: 2, max: 15 })) {
    errors.username = "Username must be between 2 and 15 chars";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 chars";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  if (!Validator.isLength(data.monetaryRestriction, { min: 1, max: 4 })) {
      errors.monetaryRestriction = "Monetary restriction value must be between $ and $$$$";
  }

  if (!Validator.isLength(data.zipcode, { min: 5, max: 5 })){
      errors.zipcode = "Zipcode must be valid";
  }

    //   if (!(data.zipcode >= 10000 && data.zipcode <= 99999)) {
    //       errors.zipcode = "Must be a valid zipcode";
    //   }

  return {
      errors,
      isValid: Object.keys(errors).length === 0
  };
};
