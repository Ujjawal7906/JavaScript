/*Write s Javascipt program to store name, phone number and marks of a student
using objets*/

const studentDetails = {
    name : "Ujjawal Thakur",
    phoneNumber : 7645896456,
    marks : 78
}

console.log(studentDetails);


// Use logical operator to find whether the age of a perion lies between 10 and 20 

let age = prompt("Enter your age");

if(age > 10 && age < 20){
    console.log("Age lies between 10 and 20");
}
else{
    console.log("Age doesnot lies between 10 and 20");
}

// Write a JavaScript program to find whether a numtber is Divisible by 2 and 3

let num1 = prompt("Enter your number");

if(num1 % 2 === 0 && num1 % 3 === 0){
    console.log("The number is divisible by 2 and 3");
}
else{
    console.log("The number is not divisible by 2 and 3");
}

// Write a JavaScript program to find whether a number is divislble by either 2 or 3

let num = prompt("Enter your number");

if(num%2===0 && num%3===0){
    console.log("Your number is divisible by both 2 and 3");
}
else if(num%2===0){
    console.log("Your number is divisible by 2"); 
}
    else if(num%3===0){
    console.log("Your number is divisible by 3")
    }
else{
    console.log("Your number is not divisible by 2 and 3");
}

// Write a program to print the sum of first n natural number

let sum = 0;
let n = prompt("Enter the value of n");
for(let i=0; i < n; i++){
    sum += i + 1;
}
console.log("The sum of first " + n + " numbers is", sum );

// Wite a progran to print the marks of a student in an object using for loop

let studentMarks = {
    naman: 55,
    rohan: 65,
    sohan: 87,
}
for (let i = 0; i < Object.keys(studentMarks).length; i++) {
  console.log("The marks of " + Object.keys(studentMarks)[i] + " are " + studentMarks[Object.keys(studentMarks)[i]])
}

// Wite a progran to print the marks of a student in an object using for in loop

let Marks = {
    naman: 55,
    rohan: 65,
    sohan: 87,
}
for (let i in Marks ) {
  console.log("The marks of " + i + " are " + Marks[i]);
}

//Create a game of choose correct number

let correctNumber = 5;
let userNumber = prompt("Enter your number");

while(correctNumber != userNumber){
    userNumber = prompt("Try again");
}
console.log("You enter correct number");


// Write a function to find mean of 5 numbers

let mean = (a, b, c, d) => {
    return (a + b + c + d)/4;
}
console.log("The mean of 1, 2, 3, 4 is ", mean(1, 2, 3, 4));


// Strings
let str = "Ujjawal\"";
console.log(str.length);

//Include function of a string
let sentence = "The quick brown fox jumps over the lazy dog.";
let word = "Fox";

console.log(`The word "${word}" "${sentence.includes(word)} ? "is" : "is not" in the sentence,`);

// Exteact the amount out of this string "Please give Rs 1000"
let str2 = "Please give Rs 1000"
let amount = str2.slice("Please give Rs ".length);
console.log(amount);

/* Wite a program using prompt function to take input of age as a value from the user and use alert 
 to tell him if he can drive*/
let age1 = prompt("You can drive")
if(age1 >= 18){
    alert("You can drive");
}
else{
    alert("You cannot drive");
}