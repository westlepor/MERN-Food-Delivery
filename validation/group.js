const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateGroupInput(data) {
  let errors = {};

  data.groupName = validText(data.groupName) ? data.groupName : "";

  if (!Validator.isEmpty(data.groupName)) {
    errors.groupName = "Group name field is required";
  }

  //ask about start and end time validation
  
  if (!Validator.isLength(data.monetaryRestriction, { min: 1, max: 4 })) {
    errors.monetaryRestriction = "Input must be between $ and $$$$";
  }
}

