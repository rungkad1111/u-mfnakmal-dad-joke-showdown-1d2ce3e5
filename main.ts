import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Dad Joke Showdown entry.
// One original dad joke, at most 200 characters, written for
// /output/entry.txt. The pun lands on the final word so the
// groan arrives exactly where a dad would pause at the table.

const OUTPUT_PATH = "/output/entry.txt";

function buildJoke(): string {
  // Tightened delivery: "our" makes it a dad at his own table,
  // and the two-word beat gives the punchline room to land.
  const lines = [
    "I told our family group chat a joke about the Wi-Fi router.",
    "Total silence.",
    "I guess it just didn't connect with them.",
  ];
  return lines.join(" ");
}

function main(): void {
  const joke = buildJoke();
  if (joke.length === 0 || joke.length > 200) {
    throw new Error(`joke must be 1-200 characters, got ${joke.length}`);
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, joke, "utf8");
  console.log(joke);
}

main();
