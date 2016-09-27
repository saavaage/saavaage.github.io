/**
 * Created by boss on 19 сентября.
 */

'use strict';
/*
Напишите функцию sum, которая работает так: sum(a)(b) = a+b.
Да, именно так, через двойные скобки (это не опечатка).
*/

function sum(a){
    return function(b){
        return a+b;
    }
}
console.log(sum(1)(2)); //= 3
console.log(sum(5)(-1)); // = 4