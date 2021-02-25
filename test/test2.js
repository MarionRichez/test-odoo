// Test 2: Any language (3/20)
// Solve the game "Guess a number", find a secret integer between 1 and 1000000 in less than 50 guesses. Write a function that solves the game without user input and returns the solution by using the function verify() which is defined with the following specification:
// function verify(guess: integer) -> integer
// Argument:
//      guess (integer) the number to verify
// Returns:
//      0 if the guess is the solution, your program won
//      -1 if the solution is smaller than the guess parameter
//      1  if the solution is bigger than the guess parameter

// Warning: You are not allowed to call verify() more that 50 times or you lose.

let highest = 1000000;
let lowest = 0;
let random = randomInt(1, 1000000);

console.log(`The number to have : ${random}`);
findNumber(random);

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function verify(guess) {
  if (guess === random) {
    return 0;
  } else if (guess > random) {
    return 1;
  } else {
    return -1;
  }
}

function findNumber(random) {
  for (i = 0; i <= 51; i++) {
    if (i >= 51) {
      console.log(`Game Over, the number to guess is ${random} `);
    } else {
      console.log(`Number of try : ${i}`);
      // Here I made some choices for this test, you didn't precise if the guess number is a random number or not so I decide to make 2 guess.
      // The first is a guess who start to 500000
      // The second is a random number
      // Make your choice
      let guess = parseInt((lowest + highest) / 2);
      //   let guess = randomInt(1, 1000000);
      console.log(`My guess is : ${guess}`);
      let state = verify(guess);
      if (state == 1) {
        highest = guess;
      } else if (state == -1) {
        lowest = guess;
      } else {
        console.log(`I've won, it was : ${guess}`);
        break;
      }
    }
  }
}
