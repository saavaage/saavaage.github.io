/**
 * Created by boss on 11 июля.
 */

/*
 День указанное количество дней назад
 Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.
 Например, для 2 января 2015:
 */
// P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект date.


function getDateAgo(date, days) {
    var dateCopy = new Date(date);
    dateCopy.setDate(dateCopy.getDate() - days);
    return dateCopy;
}


var date = new Date(2016, 6, 11);

console.log(getDateAgo(date, 1)); // 1, (1 января 2015)
console.log(getDateAgo(date, 2)); // 31, (31 декабря 2014)
console.log(getDateAgo(date, 365)); // 2, (2 января 2014)