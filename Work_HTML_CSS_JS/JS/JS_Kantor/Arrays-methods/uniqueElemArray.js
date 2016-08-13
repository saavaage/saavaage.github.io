/**
 * Created by boss on 13 августа.
 */
/*
Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
*/

function unique(arr) {
   var myObj = {};
    for(var i=0; i<arr.length; i++){
        myObj[arr[i]] = 'true';
    }
    return Object.keys(myObj);
}

var strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];

console.log( unique(strings) ); // кришна, харе, 8-()