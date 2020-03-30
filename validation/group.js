const Validator = require("validator");
const validText = require("./valid-text");

// 1) validate groupname (length)
// 2) validate endTime () -> its valid data
// 3) users => input [] should be longer than 1
// 4) foodRestriction => form should be array
// 5) monetary => should be "$"  && length >= 1 + "empty" value;;;;
// 6) businesses => businesses should be more than 0;=> error msg - zoom in the correct spot that has more than 1biz
// 7) likedBusisses or dislides .........
// 8) double check line 62 is working when this.props.businesses

module.exports = function validateGroupInput(data) {
  let errors = {};

  data.groupName = validText(data.groupName) ? data.groupName : "";

  if (Validator.isEmpty(data.groupName)) {
    errors.groupName = "Group name field is required.";
  }

  // if (!Validator.islength(data.groupName, { min: 2, max: 30 })) {
  //   errors.groupName = "Group name must be between 2 and 30 characters."
  // }

  if (data.users.length < 2) {
    errors.users = "Invite users to your group!"
  }

  if (data.businesses.length <= 1) {
    errors.businesses = "Choose a location with more than 1 valid business."
  }

  //ask about start and end time validation
  if (!Validator.isLength(data.monetaryRestriction, { min: 1, max: 4 })) {
    errors.monetaryRestriction = "Input must be between $ and $$$$.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}

