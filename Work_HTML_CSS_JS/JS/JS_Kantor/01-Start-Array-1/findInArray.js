/**
 * Created by boss on 16 сентября.
 */
'use strict';
// Создайте функцию find(arr, value), которая ищет в массиве arr значение value и
// возвращает его номер, если найдено, или -1, если не найдено.

var myArr = ["test", 2, 1.5, false];

function find(arr, value){
    for(var i = 0; i< arr.length; i++){
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}

console.log(find(myArr, "test")); // 0
console.log(find(myArr, 2)); // 1
console.log(find(myArr, 1.5)); // 2
console.log(find(myArr, 0)); // -1