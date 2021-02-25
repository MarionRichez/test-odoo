// Test 9: Javascript (1/20)
// Write a function that, when called, returns an array for which each element is a letter of the alphabet, from "A" to "Z" (exactly once, in order and upper case). Your code cannot contain the character ' (quote), " (double quote) or ` (back quote)

let a = 65; // ASCII code for the letter A
let b = 90; // ASCII code for the letter B

function getAlphabetArray() {
  const result = [];
  for (i = a; i <= b; i++) {
    result.push(String.fromCharCode(i));
  }
  return result;
}

getAlphabetArray();
