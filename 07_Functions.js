
// Write a function to add two numbers

function addTwoNumbers(x, y) {
    console.log("Done");
    return x + y;
}

let a = 43; //We also take input from user using "prompt"
let b = 33; //We also take input from user using "prompt"
let c = 54; //We also take input from user using "prompt"

console.log("The sum of a and b is", addTwoNumbers(a, b));
console.log("The sum of b and c is", addTwoNumbers(b, c));
console.log("The sum of a and c is", addTwoNumbers(a, c));

// Arrow Function

const sum = (p, q) => {
  return p + q;
}
console.log("The sum of 2 and 3 is ", sum(2, 3));