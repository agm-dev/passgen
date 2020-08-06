import { generatePass, PassOptions, PassData } from "../mod.ts"

const passwords = [
  generatePass({
    type: "alpha",
    number: 30,
    caps: true,
  }),
  generatePass({
    type: "num",
    number: 20,
    caps: true,
  }),
  generatePass({
    type: "alphanum",
    number: 32,
    caps: true,
  }),
  generatePass({
    type: "alphanumExt",
    number: 25,
    caps: true,
  }),
  generatePass({
    type: "words-en",
    number: 10,
    caps: true,
  }),
  generatePass({
    type: "words-es",
    number: 10,
    caps: true,
  }),
  generatePass({
    type: "pokemon-1st",
    number: 6,
    caps: true,
  }),
]

console.log(passwords)
