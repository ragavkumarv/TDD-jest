test("hero passesd Trail 1 & Trail 2", () => {
  expect(
    dugeon({
      hero: "π¦ΈββοΈ",
      strength: 90,
      iq: 100,
    })
  ).toBe("π¦ΈββοΈβοΈπ°ππ");
});

test("hero passesd Trail 1 & fails Trail 2", () => {
  expect(
    dugeon({
      hero: "π¨βπ¦±",
      strength: 90,
      iq: 70,
    })
  ).toBe("π¨βπ¦±βοΈπ₯");
});
