/**
 * Created by boss on 11 июля.
 */
/*Написать функцию обратной сортировки reverseSort(arr).
    Которая сортирует численный массив от большего к
меньшему.
    var arr = [5, 2, 1, -10, 8];
console.log( reverseSort(arr) ); // 8, 5, 2, 1, -10*/

var myArr = [5, 2, 1, -10, 8];

function reverseSort(arr){
    arr.sort(function(a, b) { return b-a });
    return arr;
}

console.log( reverseSort(myArr) );