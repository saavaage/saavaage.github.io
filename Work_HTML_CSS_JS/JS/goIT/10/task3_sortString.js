/**
 * Created by boss on 01 сентября.
 */
/*
Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
Example string: webmaster
Expected Output: abeemrstw
Assume punctuation and numbers symbols are not included in the passed string.
*/
var myString = 'webmaster';

function getSortString(str){
    var arr = str.split('');
    return arr.sort().join('');
}

console.log(getSortString(myString));