/**
 * Created by boss on 16 сентября.
 */

'use strict';

// Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.

var arr = [1, 2, 3, 4, 5];

arr.sort(function(){return Math.random() -.5});

console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]