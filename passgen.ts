import {
  chars,
  numbers,
  symbols,
  words_EN,
  words_ES,
  pokemons_1st,
} from "./constants.ts"

export type PassType = "alpha" | "num" | "alphanum" | "alphanumExt" | "words-es" | "words-en" | "pokemon-1st"

export type PassStrength = "very weak" | "weak" | "reasonable" | "strong" | "very strong" | "overkill"

export interface PassOptions {
  type: PassType
  number: number
  caps: boolean
}

export interface PassData extends PassOptions {
  pass: string
  entropy: number
  strength: PassStrength
  relativeEntropy: number
  relativeStrength: PassStrength
}

export function generatePass({ type, number, caps }: PassOptions): PassData {
  let source: string[]
  switch (type) {
    case "alpha":
      source = caps ? [...chars, ...chars.map(i => i.toUpperCase())] : chars
      break
    case "num":
      source = numbers
      break
    case "alphanum":
      source = caps ? [...chars, ...chars.map(i => i.toUpperCase()), ...numbers] : [...chars, ...numbers]
      break
    case "alphanumExt":
      source = caps ? [...chars, ...chars.map(i => i.toUpperCase()), ...numbers, ...symbols] : [...chars, ...numbers, ...symbols]
      break
    case "words-en":
      source = caps ? [...words_EN, ...words_EN.map(i => i.toUpperCase())] : words_EN
      break
    case "words-es":
      source = caps ? [...words_ES, ...words_ES.map(i => i.toUpperCase())] : words_ES
      break
    case "pokemon-1st":
      source = caps ? [...pokemons_1st, ...pokemons_1st.map(i => i.toUpperCase())] : pokemons_1st
      break
  }

  const pass = [...Array(number)].map(() => {
    const randomIndex = Math.floor(Math.random() * source.length)
    return source[randomIndex]
  }).join("")

  const { entropy, relativeEntropy } = calculateEntropy(source, number, pass)
  const strength = calculateStrength(entropy)
  const relativeStrength = calculateStrength(relativeEntropy)

  return { type, number, caps, pass, entropy, strength, relativeEntropy, relativeStrength }
}

function calculateEntropy(pool: string[], number: number, password: string): { entropy: number, relativeEntropy: number } {
  // e = log2(r**l)
  // e: password entropy
  // r: pool of unique characters
  // l: number of characters in the password

  const r = [...new Set(pool.flatMap(i => i.split("")))].length
  const l = password.length
  const R = [...new Set(pool)].length
  const L = number
  return {
    entropy: Math.log2(r**l),
    relativeEntropy: Math.log2(R**L)
  }
}

function calculateStrength(entropy: number): PassStrength {
  if (entropy < 28) {
    return "very weak"
  }
  if (entropy < 36) {
    return "weak"
  }
  if (entropy < 60) {
    return "reasonable"
  }
  if (entropy < 128) {
    return "strong"
  }
  if (entropy < 200) {
    return "very strong"
  }
  return "overkill"
}
