import {
  areWeCovered,
  createMatrix,
  getComplementaryDNA,
  isItPrime,
  isValidDNA,
  sumMultiples,
} from "../challenges/exercise5";

describe("sumMultiples", () => {
  test("returns the sum of all numbers which are multiples of 3 and 5", () => {
    expect(sumMultiples([1, 2])).toBe(0);
    expect(sumMultiples([1, 2, 3])).toBe(3);
    expect(sumMultiples([3, 5])).toBe(8);
    expect(sumMultiples([3, 5, 13, 14, 15, 6])).toBe(29);
    expect(sumMultiples([2.5, -4, -9, 12, 15])).toBe(18);
  });
});

describe("isValidDNA", () => {
  test("returns true is the given string only contains the CGTA characters", () => {
    expect(isValidDNA("")).toBe(false);
    expect(isValidDNA("C, G, T or A")).toBe(false);
    expect(isValidDNA("CGTA")).toBe(true);
    expect(isValidDNA("cgggggtccaaCGTA")).toBe(true);
    expect(isValidDNA("cgvggggtccaaCGTA")).toBe(false);
    expect(isValidDNA("v")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("throws an error if the input isn't valid DNA", () => {
    expect(() => getComplementaryDNA("PP")).toThrow("str isn't valid DNA");
  });
  test("returns a valid DNA string opposite to the valid DNA input, T<=>A and C<=>G, coming uppercase", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("AAAAAAA")).toBe("TTTTTTT");
    expect(getComplementaryDNA("GCggCCTaaa")).toBe("CGCCGGATTT");
  });
});

describe("isItPrime", () => {
  test("returns true if the given number is a prime", () => {
    expect(isItPrime(-3)).toBe(false);
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(17)).toBe(true);
    expect(isItPrime(33)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("returns a matrix of arrays filled with the fill", () => {
    expect(createMatrix(2, "a")).toEqual([
      ["a", "a"],
      ["a", "a"],
    ]);
    expect(createMatrix(1, 8)).toEqual([[8]]);
    expect(createMatrix(4, "bar")).toEqual([
      ["bar", "bar", "bar", "bar"],
      ["bar", "bar", "bar", "bar"],
      ["bar", "bar", "bar", "bar"],
      ["bar", "bar", "bar", "bar"],
    ]);
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
  });
});

describe("areWeCovered", () => {
  test("returns false if there's less than 3 staff", () => {
    const data = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Priyanka", rota: ["Tuesday", "Wednesday"] },
    ];
    expect(areWeCovered(data, "Tuesday")).toBe(false); // 1
  });
  test("checks whether the day is covered by at least 3 staff", () => {
    const data = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "George", rota: ["Thursday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Priyanka", rota: ["Tuesday", "Wednesday"] },
    ];
    expect(areWeCovered(data, "Monday")).toBe(false); // 1
    expect(areWeCovered(data, "Tuesday")).toBe(true); // 4
    expect(areWeCovered(data, "Wednesday")).toBe(true); // 3
    expect(areWeCovered(data, "Stusday")).toBe(false); // 0
  });
});
