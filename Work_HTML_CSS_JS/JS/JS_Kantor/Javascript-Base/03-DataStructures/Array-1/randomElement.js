/**
 * Created by boss on 16 сентября.
 */

'use strict';

/*
Напишите код для вывода alert случайного значения из массива:
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
P.S. Код для генерации случайного целого от min to max включительно:
var rand = min + Math.floor(Math.random() * (max + 1 - min));
    */

var myArr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

function getRandomElement(arr){

    var rand =  Math.floor(Math.random() * arr.length); // var rand = 0 + Math.floor(Math.random() * (arr.length - 1  + 1 - 0));
    return arr[rand];

}

console.log(getRandomElement(myArr));