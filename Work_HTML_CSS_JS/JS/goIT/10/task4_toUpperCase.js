/**
 * Created by boss on 01 сентября.
 */
/*
 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the
 string in upper case. Go to the editor
 Example
 string: the quick brown fox
 Expected Output:
 The Quick Brown Fox
 */
// версия 1 через 2 массива
var myString = 'the quick brown fox';
function convertToUpper(str) {
    var newArr = [];
    var startArr = str.split(' ');

    startArr.forEach(function (item) {
        newArr.push(item.charAt(0).toUpperCase() + item.slice(1));
    });

    return newArr.join(' ');
}

console.log(convertToUpper(myString));

// версия 2 через 1 массив и новую строку
var myStr = 'the quick brown fox';
function convertToUpp(str) {
    var arr = str.split(' ');
    var newString = '';
    arr.forEach(function (item) {
        newString += item.charAt(0).toUpperCase() + item.slice(1) + ' ';
    });

    return newString;
}

console.log(convertToUpp(myStr));

