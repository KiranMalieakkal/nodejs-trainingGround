import assert  from "assert";
import { getAge,getAgeGroup,getAgeForPerson } from "./index.mjs";


describe("age calculator", () => {
  it("someone born in 1972 is 52 in 2024", () => {
    // act
    const result = getAge(1972, 2024);

    // assert
    assert.equal(result, 52);
  });
  it("someone born in 2024 is 0 in 2024", () => {
    // arrange
    // act
    const result = getAge(2024, 2024);
  
    // assert
    assert.equal(result, 0);
  });
});
describe("age classifier", () => {
    it("0-3 years old should be a toddler", () => {
      // arrange
      // act
      const result = getAgeGroup(0);
  
      // assert
      assert.equal(result, "Toddler");
    });
    it("4-12 years old should be a kid",()=> {
      // arrange
      // act
      const result = getAgeGroup(6);
  
      // assert
      assert.equal(result, "Kid");
        
    });
    it("13-19 years old should be a teenager");
    it("20-39 years old should be a adult");
    it("above 39 years old ... you are just old");
  });
  describe("check persons age",()=> {
    it("get age for person", () => {
    // arrange
    const currentYear = 2022;
    const person = {
      name: "Marcus",
      birthYear: 1972,
      isTeacher: true,
    };
  
    // act
    const age = getAgeForPerson(person, currentYear);
  
    // assert
    assert.equal(age, 50);
  });
});
describe("Error",()=> {
    it("throwing an error in a test will...", () => {
        throw new Error("Reports as failing test");
      });
});