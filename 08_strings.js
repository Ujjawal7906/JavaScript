// Double Quote string
let Name = "Ujjawal Thakur";
console.log(Name);
console.log(Name.length);

// Single Quote string
// let myName = 'Ujjawal Thakur';
// console.log(myName);
// console.log(myName.length);
// console.log(myName[4]);


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

let myName = "Ujjawal Thakur";
 console.log(myName); // Ujjawal Thakur
 console.log(myName.length); // 14
 console.log(myName.toUpperCase()); // UJJAWAL THAKUR
 console.log(myName.toLowerCase()); //ujjawal thakur
 console.log(myName.slice(0,7)); // Ujjawal
 console.log(myName.slice(8)); // Thakur
 console.log(myName.replace("Thakur", "Kumar"));  // Ujjawal Kumar
 
 let friend = "Rohan";
 console.log(myName.concat(" is a friend of ", friend));

 let friend1 = "    Ujjawal Thakur       ";
 console.log(friend1);
 console.log(friend1.trim()); // for remove unwanted spaces
 
 