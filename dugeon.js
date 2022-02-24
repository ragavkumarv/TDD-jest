export function sum(a, b) {
  return a + b;
}

function Trail1({ hero, strength }) {
  if (strength > 50) {
    return { result: hero + "⚔️", status: "pass" };
  } else {
    return { result: hero + "🐍", status: "fail" };
  }
}

function Trail2({ iq, result, status }) {
  if (iq > 90) {
    return { result: result + "💰💍👑", status: "pass" };
  } else if (status === "pass") {
    return { result: result + "🏥", status: "fail" };
  } else {
    return { result: "💀", status: "fail" };
  }
}

export function dugeon({ hero, strength, iq }) {
  const { result, status } = Trail1({ hero, strength });

  return Trail2({ iq, result, status }).result;
}
