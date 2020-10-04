const assert = require("assert");

// WRITE THE ACTUAL FUNCTION HERE

assert.strictEqual(typeof capitalizeFirstLetters, "function");
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(
  capitalizeFirstLetters("i am learning TDD"),
  "I Am Learning TDD"
);
assert.strictEqual(capitalizeFirstLetters("z"), "Z");
assert.strictEqual(capitalizeFirstLetters(""), "");
