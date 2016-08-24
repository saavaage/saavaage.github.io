/**
 * Created by boss on 19 августа.
 */
/*
1. Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый,
в который входят только те элементы arr, для которых func возвращает true.
2. Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]".
Использование должно быть таким:
    filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
    filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.

*/

var arr = [1, 2, 3, 4, 5, 6, 7];

function filter(arr, func) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        var val = arr[i];
        if (func(val)) {
            result.push(val);
        }
    }
    return result;
}

function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}

function inArray(arr) {
    return function(x) {
        return arr.indexOf(x) != -1;
    };
}

console.log(filter(arr, function(a) {
    return a % 2 == 0
})); // 2,4,6

console.log( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
// //
console.log( filter(arr, inArray([1, 2, 10])) ); // 1,2