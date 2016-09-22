/**
 * Created by boss on 18 сентября.
 */

'use strict';

// Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:

function sum() {
    var suma = 0;
    for (var i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}

console.log(sum());// = 0
console.log(sum(1));// = 1
console.log(sum(1, 2));// = 3
console.log(sum(1, 2, 3));// = 6
console.log(sum(1, 2, 3, 4));// = 10