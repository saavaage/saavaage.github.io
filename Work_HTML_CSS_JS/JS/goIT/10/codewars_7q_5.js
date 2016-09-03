/**
 * Created by boss on 02 сентября.
 */
/*
 Given an array, find the duplicates in that array, and return a new array of those duplicates.
 Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., '1' !== 1).
 */

var myArr = [1, 2, 4, 4, 3, 3, 'zut', 1, 5, 3, '5', 'zut'];

function duplicates(arr) {
    var obj = {};
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i], i + 1) != -1) {
            obj[arr[i]] = true;
            continue;
        }
    }
    for(item in obj){
        if(isNaN(+item)) {
            newArr.push(item);
        }else{
            newArr.push(+item);
        }
    }
    return newArr;
}

console.log(duplicates(myArr));

// версия 2
var myArr1 = [1, 2, 4, 4, 3, 3, 'zut', 1, 5, 3, '5', 'zut'];
function duplicates1(arr) {
    return arr.filter(function(a, b) {
        return arr.indexOf(a) != b && arr.lastIndexOf(a) == b;
    });
}
console.log(duplicates1(myArr1));
