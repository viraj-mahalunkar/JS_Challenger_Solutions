// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function myFunction (a) {

    if (a == Math.floor(a)) {
        return true;
    }

    else return false;

}


console.log(myFunction(2.2))

// AUTHORS ANSWER
// function myFunction(a) {
//     return a - Math.floor(a) === 0
//   }