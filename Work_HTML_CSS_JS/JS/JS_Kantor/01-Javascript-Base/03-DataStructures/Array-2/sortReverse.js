/**
 * Created by boss on 16 сентября.
 */

'use strict';
// Как отсортировать массив чисел в обратном порядке?

var arr = [5, 2, 1, -10, 8];

arr.sort(function(a,b){
    return b - a;});


console.log( arr ); // 8, 5, 2, 1, -10