const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("Rectangle", () => {
  it("method isSquare returns true when both arguments are equals", () => {
    const rectangle = new Rectangle(5, 5);
    assert.strictEqual(rectangle.isSquare(), true);
  });
  it("method isSquare returns false when both arguments are not equals", () => {
    const rectangle = new Rectangle(15, 5);
    assert.strictEqual(rectangle.isSquare(), false);
  });

  it("method getArea returns the surface", () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getArea(), 91);
  });

  it("method getPerimeter returns the perimeter", () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getPerimeter(), 40);
  });
});
