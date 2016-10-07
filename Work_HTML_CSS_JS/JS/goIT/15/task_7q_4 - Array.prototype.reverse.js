/**
 * Created by boss on 02 октября.
 */

'use strict';
/*
 The Array's reverse() method has gone missing! Re-write it, quick-sharp!
 When this method is called, it reverses the order of the items in the original array.
 Then then it returns that same,
 original array. No new arrays should need to be created to pass this kata.
 Here's an example:

 var input = [1, 2, 3, 4];
 input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
 input;           // == [4, 3, 2, 1]  // items reordered in the original array
 */

var input = [1, 2, 3, 4];

// версия 1 - мое решение

Array.prototype.reverse = function () {
var count = this.length - 1;
   for(var i = count; i>=0; i--){
       this.push(this[i]);
       this.splice(i, 1);
   }
    return this;
};




console.log(input.reverse()); // == [4, 3, 2, 1]  // returned by .reverse()
console.log(input);           // == [4, 3, 2, 1]  // items reordered in the original array