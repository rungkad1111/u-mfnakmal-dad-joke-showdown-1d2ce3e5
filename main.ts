import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Dad Joke Showdown entry.
// One original dad joke, at most 200 characters, written for
// /output/entry.txt. The pun lands on the final word so the
// groan arrives exactly where a dad would pause at the table.

const OUTPUT_PATH = "/output/entry.txt";

function buildJoke(): string {
  const setup = "I told my family group chat a joke about the Wi-Fi router.";
  const beat = "Nobody replied.";
  const punchline = "I guess it just didn't connect with them.";
  return [setup, beat, punchline].join(" ");
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
