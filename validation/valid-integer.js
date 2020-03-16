const validInteger = number => {
  return typeof number === "number" && Number.isInteger(number);
};

module.exports = validInteger;
