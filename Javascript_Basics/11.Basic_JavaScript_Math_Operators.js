// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
function myFunction(a, b, c, d, e, f) {
let sum = a + b;
let subtract = sum - c;
let multiply = subtract * d;
let divide = multiply / e;
let powerN = divide ** f;
return powerN;
};

console.log(myFunction(6,5,4,3,2,1));