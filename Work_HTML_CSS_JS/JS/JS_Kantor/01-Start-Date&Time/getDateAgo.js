/**
 * Created by boss on 18 сентября.
 */

'use strict';
/*
Создайте функцию getDateAgo(date, days), которая возвращает дату,
которая была days дней назад от даты date.
P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект date.
*/


var date = new Date(2015, 0, 2);

// версия 1
function getDateAgo1(date, days){
  return new Date(date - days*24*60*60*1000).getDate();
}

console.log(getDateAgo1(date, 2) ); // 31, (31 декабря 2014)
console.log(getDateAgo1(date, 365) ); // 2, (2 января 2014)
console.log(getDateAgo1(date, 1) ); // 1, (1 января 2015)

// версия 2
function getDateAgo2(date, days){
    var dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

console.log(getDateAgo2(date, 2) ); // 31, (31 декабря 2014)
console.log(getDateAgo2(date, 365) ); // 2, (2 января 2014)
console.log(getDateAgo2(date, 1) ); // 1, (1 января 2015)
