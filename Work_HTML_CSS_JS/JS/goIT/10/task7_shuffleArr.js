/**
 * Created by boss on 01 сентября.
 */
// Write a function shuffle(arr) to shuffle an array.

var myArr = [1, 3, 5, 'fuck', 10, 20, 'str'];

function shuffle(arr){

 return arr.sort(function(){
     return Math.random() -.5;

 })
}

console.log(shuffle(myArr));