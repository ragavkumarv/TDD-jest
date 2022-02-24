import { dugeon } from "../../index.js";

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

test("hero fail Trail 1 & pass Trail 2", () => {
  expect(
    dugeon({
      hero: "🧑",
      strength: 40,
      iq: 120,
    })
  ).toBe("🧑🐍💰💍👑");
});

test("hero fail Trail 1 & pass Trail 2", () => {
  expect(
    dugeon({
      hero: "👨",
      strength: 30,
      iq: 70,
    })
  ).toBe("💀");
});
