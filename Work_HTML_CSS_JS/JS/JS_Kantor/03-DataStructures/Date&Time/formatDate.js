/**
 * Created by boss on 18 сентября.
 */

'use strict';
/*
 Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:
 Например:
 var d = new Date(2014, 0, 30); // 30 января 2014
 alert( formatDate(d) ); // '30.01 - BASE.14'
 P.S. Обратите внимание, ведущие нули должны присутствовать,
 то есть 1 января 2001 должно быть 01 - BASE.01 - BASE.01 - BASE, а не 1.1.1.
 */
var d = new Date(2014, 0, 30);

function formatDate(date) {
    var y = (date.getFullYear() % 100 <10)? ('0' + date.getFullYear() % 100) : date.getFullYear() % 100;
    var m = ((date.getMonth() + 1) < 10) ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1);
    var d = (date.getDate() < 10) ? ('0' + date.getDate()) : date.getDate();
    return d +'.'+ m +'.'+ y;
}

console.log(formatDate(d)); // 30.01.14
