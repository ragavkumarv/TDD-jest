test("hero passesd Trail 1 & Trail 2", () => {
  expect(
    dugeon({
      hero: "🦸‍♂️",
      strength: 90,
      iq: 100,
    })
  ).toBe("🦸‍♂️⚔️💰💍👑");
});

test("hero passesd Trail 1 & fails Trail 2", () => {
  expect(
    dugeon({
      hero: "👨‍🦱",
      strength: 90,
      iq: 70,
    })
  ).toBe("👨‍🦱⚔️🏥");
});
