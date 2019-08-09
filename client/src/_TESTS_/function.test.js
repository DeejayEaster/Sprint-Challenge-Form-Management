const help = require("./helpers");

describe("sum function", () => {
  it("sums two integers", () => {
    const expected = 3;
    const actual = help.sum(1, 2);
    expect(actual).toBe(expected);
    expect(actual).toBeDefined();
    expect(actual).toBeTruthy();
    expect(actual).not.toBe(0);
    expect(actual).not.toBeNaN();
    expect(actual).toBeGreaterThan(2);
    expect(actual).toBeLessThan(4);
  });
});
