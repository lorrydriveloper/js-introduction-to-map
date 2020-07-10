// test here
const baseArr = [1, 3, 5, 8, 9, -5];

describe("my map-like functions", () => {
  describe("mapToNegative", () => {
    it("should transform in negative the original values", () => {
      expect(mapToNegative(baseArr)).to.eql(baseArr.map((e) => e * -1));
    });
  });
  describe("mapNoChange return an array with the original values", () => {
    it("should no transform the original values", () => {
      expect(mapNoChange(baseArr)).to.eql(baseArr);
    });
  });
});
