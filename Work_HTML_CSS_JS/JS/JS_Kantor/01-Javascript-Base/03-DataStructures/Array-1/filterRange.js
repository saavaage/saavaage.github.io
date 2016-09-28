/**
 * Created by boss on 16 сентября.
 */

'use strict';

/*
Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и
возвращает новый массив, который содержит только числа из arr из диапазона от a до b.
То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.
*/
var arr = [5, 4, 3, 8, 0];

function filterRange(arr, a, b){
    var newArr = [];
    for(var i = 0; i< arr.length; i++){
        if(arr[i] >= a && arr[i] <= b){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filterRange(arr, 3, 5)); // теперь новый массив = [5, 4, 3] // arr не изменился