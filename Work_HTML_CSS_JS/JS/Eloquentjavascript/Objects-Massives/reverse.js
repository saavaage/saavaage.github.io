/**
 * Created by boss on 16 августа.
 */

// c использованием reverse
function reverseArray(arr){
  return arr.reverse();
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

function reverseArrayInPlace(arr){
    return arr.reverse();
}

var arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayValue));
// → [5, 4, 3, 2, 1]

// без использования reverse

function reverseArray1(arr){
var myArr = [];
    for(var i = arr.length -1; i>=0; i--){
    myArr.push(arr[i]);
}
    return myArr;
}

console.log(reverseArray1(["A", "B", "C"]));
// → ["C", "B", "A"];

function reverseArrayInPlace1(arr){
    var myArr = [];
    for(var i = arr.length -1; i>=0; i--){
        myArr.push(arr[i]);
    }
    return myArr;
}

var arrayValue1 = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace1(arrayValue1));
// → [5, 4, 3, 2, 1]