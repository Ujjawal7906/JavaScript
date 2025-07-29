// Primitive Datatypes in JS

let a = "Ujjawal Thakur"; // String
let b = 20; // Number
let c = true; // Boolean
let d = Symbol("Symbol in JS"); // Symbol
let e = null; // Null
let f = undefined; // Undefined
let g = BigInt("356"); // BigInt

// console.log(a,b, c, d, e, f, g);
// console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g);

// Non-Primitive Datatypes (Objects)

const studentDetails = {
    stuName : "Ujjawal Thakur",
    age : 20,
    Class : 12
}

console.log(studentDetails);
console.log(studentDetails["age"]);
