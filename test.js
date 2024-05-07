const assert = require("assert");
const app = require("./index.js");

describe("age calculator", () => {
  it("someone born in 1972 is 52 in 2024", () => {
    // act
    const result = app.getAge(1972, 2024);

    // assert
    assert.equal(result, 52);
  });
  it("someone born in 2024 is 0 in 2024", () => {
    // arrange
    // act
    const result = app.getAge(2024, 2024);
  
    // assert
    assert.equal(result, 0);
  });
});