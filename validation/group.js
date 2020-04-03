const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateGroupInput(data) {
  let errors = {};

  data.groupName = validText(data.groupName) ? data.groupName : "";

  if (Validator.isEmpty(data.groupName)) {
    errors.groupName = "Group name field is required.";
  }

  if (!Validator.isLength(data.groupName, { min: 2, max: 30 })) {
    errors.groupName = "Group name must be between 2 and 30 characters."
  }

  if (data.users.length < 2) {
    errors.users = "You must invite at least one user to your group."
  }

  if (data.endTime < new Date()) {
    errors.endTime = "Choose a valid end time."
  }

  if (data.endTime === null) {
    errors.endTime = "Year must be 4 digits."
  }

  if (data.businesses.length <= 1) {
    errors.businesses = "Choose a location with more than 1 valid business."
  }

  if (!Validator.isLength(data.monetaryRestriction, { min: 1, max: 4 })) {
    errors.monetaryRestriction = "Input must be between $ and $$$$.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}

