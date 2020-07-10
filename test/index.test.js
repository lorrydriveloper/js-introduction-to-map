// test here
const baseArr = [1, 3, 5, 8, 9, -5];

describe("my map-like functions", () => {
  describe("mapToNegative return an array with the original values made negative", () => {
    it("should transform in negative the original values", () => {
      expect(mapToNegative(baseArr)).to.eql(baseArr.map((e) => e * -1));
    });
  });
  describe("mapNoChange return an array with the original values", () => {
    it("should no transform the original values", () => {
      expect(mapNoChange(baseArr)).to.eql(baseArr);
    });
  });
  describe("mapToDouble return and array with the original values doubled", () => {
    it("should double the original values", () => {
      expect(mapToDouble(baseArr)).to.eql(baseArr.map((e) => e * 2));
    });
  });

  describe("mapToSquare return and array with the original values squared", () => {
    it("should square the original values", () => {
      expect(mapToSquare(baseArr)).to.eql(baseArr.map((e) => e * e));
    });
  });
});

describe("My reduce-like methods", () => {
  const reduceArr = [1, -5, true, "CYF"];

  describe("reduceToTotal returns total from array when no stating point is given", () => {
    it("should return the total sum of given array", () => {
      expect(reduceToTotal(baseArr)).to.equal(
        baseArr.reduce((memo, e) => e + memo)
      );
    });
  });
  describe("reduceToTotal returns total from array when stating point is given", () => {
    it("should return the total sum of given array and starting point", () => {
      const startingPoint = 100;
      expect(reduceToTotal(baseArr, startingPoint)).to.equal(
        baseArr.reduce((memo, e) => e + memo, startingPoint)
      );
    });
  });
  describe("reduceToAllTrue returns true if all values on given array are truthy", () => {
    it("should return true if all values are truthy", () => {
      expect(reduceToAllTrue(reduceArr)).to.be.true;
    });
  });
  describe("reduceToAllTrue returns false if any value is falsy", () => {
    it("should return true if all values are truthy", () => {
      reduceArr.push(false);
      expect(reduceToAllTrue(reduceArr)).to.be.false;
    });
  });
  describe("reduceToAnyTrue returns true when a true value is present", function () {
    it("should return true if any value is truthy", function () {
      const sourceArray = [false, null, null, null, true];
      expect(reduceToAnyTrue(sourceArray)).to.equal(true);
    });
  });

  describe("reduceToAnyTrue returns false when no true value is present", function () {
    it("reduces correctly", function () {
      const sourceArray = [false, null, null, null];
      expect(reduceToAnyTrue(sourceArray)).to.equal(false);
    });
  });
});
