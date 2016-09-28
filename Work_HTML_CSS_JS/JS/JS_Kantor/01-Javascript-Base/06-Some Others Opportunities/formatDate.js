/**
 * Created by boss on 23 сентября.
 */

'use strict';

/*
 Напишите функцию formatDate(date), которая возвращает дату в формате dd.mm.yy.
 Ее первый аргумент должен содержать дату в одном из видов:
 1. Как объект Date.
 2. Как строку, например yyyy-mm-dd или другую в стандартном формате даты.
 3. Как число секунд с 01.01.1970.
 4. Как массив [гггг, мм, дд], месяц начинается с нуля
 Для этого вам понадобится определить тип данных аргумента и, при необходимости,
 преобразовать входные данные в нужный формат.
 */

function formatDate(date) {
    if (date instanceof Date) {
        var d = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
        var m = (date.getMonth() < 9) ? '0' + (date.getMonth() + 1) : date.getDate() + 1;
        var y = (date.getFullYear() % 100 < 10) ? '0' + date.getFullYear() % 100 : date.getFullYear() % 100;
        return d + '.' + m + '.' + y;
    }
    if (typeof date == 'string') {

        var d = date.slice(-2);
        var m = date.slice(5, 7);
        var y = date.slice(2,4);
        return d + '.' + m + '.' + y;
    }
    if ({}.toString.call(date).slice(8, -1) == 'Number') {
        date = new Date(date*1000);
        var d = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
        var m = (date.getMonth() < 9) ? '0' + (date.getMonth() + 1) : date.getDate() + 1;
        var y = (date.getFullYear() % 100 < 10) ? '0' + date.getFullYear() % 100 : date.getFullYear() % 100;
        return d + '.' + m + '.' + y;

    }
    if ( Array.isArray(date)) {
        var d = (date[2] < 10) ? '0' + date[2] : date[2];
        var m = (date[1] < 9) ? '0' + (date[1] + 1) : date[1] + 1;
        var y = (date[0] % 100 < 10) ? '0' + date[0] % 100 : date[0] % 100;
        return d + '.' + m + '.' + y;
    }
}

console.log(formatDate('2011-10-02')); // 02.10.11
console.log( formatDate(1234567890) ); // 14.02.09
console.log( formatDate([2014, 0, 1]) ); // 01.01.14
console.log(formatDate(new Date(2004, 0, 1))); // 01.01.04