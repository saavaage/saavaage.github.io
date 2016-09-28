/**
 * Created by boss on 17 сентября.
 */

'use strict';
/*
Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
*/
var strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];

function unique(arr) {
    var obj ={};
    for(var i = 0; i < arr.length; i++){
        obj[arr[i]] = null;
    }
    return Object.keys(obj);
}


console.log( unique(strings) ); // кришна, харе, 8-()