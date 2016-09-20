/**
 * Created by boss on 20 сентября.
 */

'use strict';

/**
 * Created by boss on 19 сентября.
 */

'use strict';

/*
 1. Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый,
 в который входят только те элементы arr, для которых func возвращает true.
 2. Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b»,
 inArray([...]) – "в массиве [...]".
 Использование должно быть таким:
 filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
 filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.
 */

var arr = [1, 2, 3, 1, 4, 5, 6, 7];

function filter(arr, func) {
    return arr.filter(func);
}

function inBetween(num1, num2) {
    return function (a) {
        if (a >= num1 && a <= num2) {
            return a;
        }
    }
}
function inArray(myArr) {
    return function (a) {
        for (var i = 0; i < myArr.length; i++) {
           if(a == myArr[i]){
               return a;
           }
        }
    }
}
console.log(filter(arr, inBetween(3, 6))); // 3,4,5,6
console.log(filter(arr, inArray([1, 2, 10]))); // 1,2