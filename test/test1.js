// Test 1: Any language (3/20)
// Write a program that outputs sequentially the integers from 1 to 99, but on some conditions prints a string instead:
// - when the integer is a multiple of 3 print “Open” instead of the number,
// - when it is a multiple of 7 print “Source” instead of the number,
// - when it is a multiple of both 3 and 7 print “OpenSource” instead of the number.

for (i = 1; i < 100; i++) {
  if (i % 21 === 0) console.log("OpenSource");
  else if (i % 3 === 0) console.log("Open");
  else if (i % 7 === 0) console.log("Source");
  else console.log(i);
}
