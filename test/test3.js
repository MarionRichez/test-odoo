// Test 3: Any language (3/20)
// Write a function that takes a list of strings and returns the sum of the list items that represent an integer (skipping the other items)

let liststring = ["67", "tank", "43", "thirty", "odoo", "12"];
let sum = 0;

function sumList(array) {
  array.map(function (x) {
    if (isFinite(x)) {
      sum += parseInt(x, 10);
    }
  });
  console.log(sum);
}

sumList(liststring);
