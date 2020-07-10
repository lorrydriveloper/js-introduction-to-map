// test here

describe("my map-like functions", () => {
  const baseArr = [1, 3, 5, 8, 9, -5];
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
  const baseArr = [1, -5, true, 'CYF']

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

});
