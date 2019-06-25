// push / pop 
// shift / unshift
// indexOf
// slice

var colors = ["red", "orange", "yellow"];
console.log(colors.push("green"));
// push returns the length of the array
console.log(colors.pop());
// returns the last item of the array that it removed

// shift and unshift

// returns the size of the array
console.log(colors.unshift("infrared"));

// returns the first item of the array that it removed
console.log(colors.shift());

// indexOf

console.log(colors.indexOf("red"));
console.log(colors.indexOf("green"));

// slice
// Use slice() to copy parts of an array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

var citrus = fruits.slice(1, 3); // does not alter the original array


// use slice to copy and entire array
var nums = [1, 2, 3];
var otherNums = nums.slice();
