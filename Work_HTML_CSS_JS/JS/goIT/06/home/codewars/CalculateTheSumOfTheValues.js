/**
 * Created by boss on 12 июля.
 */
/*
Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce()
 function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help.

function sum(array) {
    // Use array.reduce() to find and return the
    // sum of the values in array.
}
For example:

    var someNumbers = [1,2,3,4,5,6,7,8,9,10];

sum(someNumbers); // should return 55
*/

// версия 1
var someNumbers = [1,2,3,4,5,6,7,8,9,10];

function sum(array) {
   var result = array.reduce(function (sum, current) {
        return sum + current;
    }, 0);
return result;
}


console.log(sum(someNumbers)); // should return 55

// версия 2
var someNumbers1 = [1,2,3,4,5,6,7,8,9,10];
function sum1(array) {
    return array.reduce(function(a,b){
        return a+b;
    });
}
console.log(sum1(someNumbers1)); // should return 55