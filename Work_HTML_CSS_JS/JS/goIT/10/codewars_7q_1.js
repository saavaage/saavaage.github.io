/**
 * Created by boss on 01 сентября.
 */
// Write a single function that can be invoked by either
// Both of these examples should return the sum of the 2 numbers.

 function sum(a, b) {
    if (arguments.length == 2) {
        return console.log(a + b);
    } else {
        return function (b) {
            return console.log(a + b);
        }

    }
}

    sum(2, 3); //5

    sum(2)(3); //5