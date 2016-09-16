/**
 * Created by boss on 16 сентября.
 */

'use strict';
/*
 На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
 Задача – найти непрерывный подмассив arr, сумма элементов которого максимальна.
 Ваша функция должна возвращать только эту сумму.
 Если все элементы отрицательные, то не берём ни одного элемента и считаем сумму равной нулю:
 getMaxSubSum([-1, -2, -3]) = 0
 */

// версия 1
function getMaxSubSum(arr) {
    var mySumTot = 0;

    for (var i = 0; i < arr.length; i++) {
        var mySum = 0;

        for (var j = i; j < arr.length; j++) {
            mySum += arr[j];

            if (mySum > mySumTot) {
                mySumTot = mySum;
            }
        }
    }
    return mySumTot;
}


console.log(getMaxSubSum([-1, 2, 3, -9]));// = 5(сумма выделенных)
console.log(getMaxSubSum([2, -1, 2, 3, -9]));// = 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));// = 11
console.log(getMaxSubSum([-2, -1, 1, 2]));// = 3
console.log(getMaxSubSum([100, -9, 2, -3, 5]));// = 100
console.log(getMaxSubSum([1, 2, 3]));// = 6(неотрицательные - берем всех)


// версия2
function getMaxSubSum1(arr) {
    var maxSum = 0,
        partialSum = 0;
    for (var i = 0; i < arr.length; i++) {
        partialSum += arr[i];
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }
    return maxSum;
}

console.log(getMaxSubSum1([-1, 2, 3, -9]));// = 5(сумма выделенных)
console.log(getMaxSubSum1([2, -1, 2, 3, -9]));// = 6
console.log(getMaxSubSum1([-1, 2, 3, -9, 11]));// = 11
console.log(getMaxSubSum1([-2, -1, 1, 2]));// = 3
console.log(getMaxSubSum1([100, -9, 2, -3, 5]));// = 100
console.log(getMaxSubSum1([1, 2, 3]));// = 6(неотрицательные - берем всех)