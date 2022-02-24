import { sum } from "../../dugeon.js";

test("adds 1 + 3 to equal 4", () => {
  expect(sum(1, 3)).toBe(4);
});

test("adds -1 + -5 to equal -6", () => {
  expect(sum(-1, -5)).toBe(-6);
});
