// Double Quote string
let name = "Ujjawal Thakur";
console.log(name);
console.log(name.length);

// Single Quote string
let myName = 'Ujjawal Thakur';
console.log(myName);
console.log(myName.length);
console.log(myName[4]);


// let myName = "Ujjawal Thakur';  // This is not acceptable
// console.log(myName);

// Template Literals

let boy1 = "Rohan";
let boy2 = "Mohan";
// we have to print Mohan is a friend of Rohan
let sentence  = `${boy2} is a friend of ${boy1}`;
console.log(sentence);


// // Escape Sequence characters
// let mySelf = 'I\'m a good boy'; // if i want to print ' between ' ' then we use \'
// console.log(mySelf);

// let mySelf = "I\"m a good boy"; // if i want to print " between " " then we use \"
// console.log(mySelf);

let mySelf = "I'm a good boy"; // its print as usual
console.log(mySelf);
