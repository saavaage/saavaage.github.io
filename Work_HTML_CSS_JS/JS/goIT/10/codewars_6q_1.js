/**
 * Created by boss on 03 сентября.
 */
/*
 The function 'fibonacci' should return an array of fibonacci numbers.
 The function takes a number as an argument to decide how many no. of elements to produce.
 If the argument is less than or equal to 0 then return empty array

 Example:
 fibonacci(4); // should return [0,1,1,2]
 fibonacci(-1); // should return []
 */

function fibonacci(n) {
    var arr = [];
    if (n > 1) {
        var a = 0,
            b = 1;
        arr.push(a);
        for (var i = 2; i <= n; i++) {
            var c = a + b;
            a = b;
            b = c;
            arr.push(a);
        }
        return arr;
    } else if (n == 1) {
        return [0];
    } else {
        return arr;
    }
}

console.log(fibonacci());