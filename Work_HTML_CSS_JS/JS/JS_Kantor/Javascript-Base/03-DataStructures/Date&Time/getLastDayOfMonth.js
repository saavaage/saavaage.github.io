/**
 * Created by boss on 18 сентября.
 */

'use strict';

// Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.

//
// year – 4-значный год, например 2012.
// month – месяц от 0 до 11.

// версия 1
    function getLastDayOfMonth1(year, month) {
        var m = new Date(year, month+1);
        return new Date(m.setDate(0)).getDate();
    }


console.log( getLastDayOfMonth1(2012, 1));// = 29 (високосный год, февраль).

// версия 2
function getLastDayOfMonth2(year, month) {
    var m = new Date(year, month+1, 0);
    return m.getDate();
}


console.log( getLastDayOfMonth2(2012, 1));// = 29 (високосный год, февраль).