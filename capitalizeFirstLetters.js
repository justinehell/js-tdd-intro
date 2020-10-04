const assert = require("assert");

// WRITE THE ACTUAL FUNCTION HERE
const capitalizeFirstLetters = (string) => {
  return string.length > 0
    ? string
        .split(" ")
        .map((el) => el[0].toUpperCase() + el.slice(1))
        .join(" ")
    : "";
};

assert.strictEqual(typeof capitalizeFirstLetters, "function");
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(
  capitalizeFirstLetters("i am learning TDD"),
  "I Am Learning TDD"
);
assert.strictEqual(capitalizeFirstLetters("z"), "Z");
assert.strictEqual(capitalizeFirstLetters(""), "");
