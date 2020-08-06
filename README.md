# passgen

> Util function to generate random passwords

## Quick Links

- [Examples](./examples)

## Usage

```ts
import { generatePass } from "https://deno.land/x/passgen/mod.ts";
```

## Output example

```js
[
  {
    type: "alpha",
    number: 30,
    caps: true,
    pass: "jCtgeOdCaSZWcnxVTnqOlQfslJQSRN",
    entropy: 171.01319154423277,
    strength: "very strong"
  },
  {
    type: "num",
    number: 20,
    caps: true,
    pass: "10975353274004413615",
    entropy: 66.43856189774725,
    strength: "strong"
  },
  {
    type: "alphanum",
    number: 32,
    caps: true,
    pass: "c4JbOOxvPdUpSQ9PGzsS9jMgiyfevxUk",
    entropy: 190.53428193238,
    strength: "very strong"
  },
  {
    type: "alphanumExt",
    number: 25,
    caps: true,
    pass: "zthHEzGu7rI6xqha49UZoCLKv",
    entropy: 154.24812503605781,
    strength: "very strong"
  },
  {
    type: "words-en",
    number: 10, // the number of items from the source to be used in the password
    caps: true,
    pass: "FINDloadwithsoulLAIDturnPORTPALMSOILMARK", // 10 four letter english words
    entropy: 225.754247590989,
    strength: "overkill"
  },
  {
    type: "words-es",
    number: 10,
    caps: true,
    pass: "grisDUALJETAIRISBOLOLAXOoncevaholagoMULA", // 10 four letter spanish words
    entropy: 223.39850002884626,
    strength: "overkill"
  },
  {
    type: "pokemon-1st",
    number: 6,
    caps: true,
    pass: "CloysterRaichuScytherPsyduckGeodudeDoduo", // 6 pokemon names from first generation
    entropy: 232.29419688230416,
    strength: "overkill"
  }
]
```