// Test 4: Any language (1/20)
// Write a recursive version of the previous function (or an iterative version if you have already done a recursive version).

let liststring = ["67", "tank", "43", "thirty", "odoo", "12"];
let sum = 0;

function sumList(array) {
  array.forEach(function (x) {
    if (isFinite(x)) {
      sum += parseInt(x, 10);
    }
  });
  console.log(sum);
}

sumList(liststring);
