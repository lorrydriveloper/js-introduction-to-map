// test here
const baseArr = [1, 3, 5, 8, 9, -5];

describe("my map-like functions", () => {
  describe("mapToNegative", () => {
    it("should transform in negative the original values", () => {
      expect(mapToNegative(baseArr)).to.eql(baseArr.map((e) => e * -1));
    });
  });
});
