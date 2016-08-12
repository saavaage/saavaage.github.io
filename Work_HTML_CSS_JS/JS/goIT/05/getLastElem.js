/**
 * Created by boss on 09 августа.
 */
//добавить в конец нового массива и вывести новый массив
// версия 1
function getLast(arr, el) {
    arr1 =[];
    for(var i=0; i<arr.length; i++){
        arr1[i] = arr[i];
    }
    arr1.push(el);
    return arr1;
}

var myArray = ['a', 'b', 'c', 'd'];
var elem = 'Fat';
console.log(getLast(myArray, elem));

// версия 2
function getLast1(arr, element) {
    arr1 = arr.slice();
    arr1.push(element);
    return arr1;
}

var myArr = ['a', 'b', 'c', 'd'];
var el = 'Fat';
console.log(getLast1(myArr, el));