/**
 * Created by boss on 01 сентября.
 */
/*
 Write a JavaScript function that accepts a string as a parameter and find the longest
 word within the string. Go to the editor:
 Example string: Web Development Tutorial
 Expected Output: Development*/

// версия 1 через сортировку
var myString = 'Web Development Tutorial';

function getLongestWord(str) {
    var arr = str.split(' ');
    arr.sort(function (a, b) {
        return b.length - a.length;
    })
    return arr[0];
}

console.log(getLongestWord(myString));


// версия 2 через строку
var myStr = 'Web Dev Tutorial Ultimately';

function getLongestW(str) {
    var arr = str.split(' ');
    var newStr = '';
    for (var i = 0; i < arr.length; i++) {
        if (newStr.length < arr[i].length) {
            newStr = arr[i];
        }
    }
    return newStr;

}

console.log(getLongestW(myStr));

// версия 3 если несколько одинаковых максимальных слов

var mySt = 'Web Dev Tutorial Ultimate';

function getLongest(str) {
    var arr = str.split(' ');

    arr.sort(function (a, b) {
        return b.length - a.length;
    });

    var arrNew = arr.filter(function (a) {
        return a.length >= arr[0].length;
    });

    return arrNew.join(' ');
}

    console.log(getLongest(mySt));