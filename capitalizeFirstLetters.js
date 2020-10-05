const capitalizeFirstLetters = (string) => {
  return string.length > 0
    ? string
        .split(" ")
        .map((el) => el[0].toUpperCase() + el.slice(1))
        .join(" ")
    : "";
};

module.exports = capitalizeFirstLetters;
