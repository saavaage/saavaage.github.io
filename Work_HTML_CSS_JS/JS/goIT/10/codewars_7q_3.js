/**
 * Created by boss on 01 сентября.
 */
/*
Your task is to make a function that can take any non-negative integer as a argument and return it
with it's digits in descending order. Descending order means that you take the highest digit and place ' +
'the next highest digit immediately after it.

Examples:
Input: 145263 Output: 654321

Input: 1254859723 Output: 9875543221
*/

// версия 1
var myNumber = 1254859723;

function descendNumber(numb){
    return   +(''+ numb).split('').sort(function(a,b){return b-a;}).join('');
}

console.log(descendNumber(myNumber));

// версия 2
function descendingOrder(n){
    return +(n+'').split('').sort().reverse().join('');
}

console.log(descendingOrder(myNumber));