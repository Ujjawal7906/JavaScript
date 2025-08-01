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