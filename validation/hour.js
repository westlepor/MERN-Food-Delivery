const Validator = require("validator");
const validText = require("./valid-text");
const validInteger = require("./valid-integer");

module.exports = function validateHourInput(data) {
    let errors = {};

    if (!Validator.isBoolean(data.isOvernight)) {
        errors.isOvernight = "isOvernight field is required";
    }

    data.start = validText(data.start) ? data.start : "";
    if (Validator.isEmpty(data.start)) {
        errors.start = "Start field is required";
    }

    data.end = validText(data.end) ? data.end : "";
    if (Validator.isEmpty(data.end)) {
        errors.end = "End field is required";
    }

    if (Validator.isEmpty(data.day)) {
        errors.day = "Day field is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
