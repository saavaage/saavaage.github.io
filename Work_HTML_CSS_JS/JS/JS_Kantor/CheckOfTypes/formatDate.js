/**
 * Created by boss on 07 сентября.
 */
/*
 Напишите функцию formatDate(date), которая возвращает дату в формате dd.mm.yy.
 Ее первый аргумент должен содержать дату в одном из видов:
 1. Как объект Date.
 2. Как строку, например yyyy-mm-dd или другую в стандартном формате даты.
 3. Как число секунд с 01.01.1970.
 4. Как массив [гггг, мм, дд], месяц начинается с нуля
 Для этого вам понадобится определить тип данных аргумента и, при необходимости, преобразовать входные данные в нужный формат.
 */

function formatDate(date) {
    if (typeof date == 'string') {
        return date.slice(-2) + '.' + date.slice(5, 7) + '.' + date.slice(2, 4);
    }
    if (typeof date == 'number') {

        var newdate = new Date;
        newdate.setTime(date * 1000);

        var dd = newdate.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = newdate.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yy = newdate.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    }
    if (Array.isArray(date)) {
        var dd = date[2];
        if (dd < 10) dd = '0' + dd;

        var mm = date[1] + 1;
        if (mm < 10) mm = '0' + mm;

        var yy = date[0].toString().slice(-2);
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    }

    if (date.getTime()) {

        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    }


}

console.log(formatDate('2012-11-02')); // 02.10.11
console.log(formatDate(1234567890)); // 14.02.09
console.log(formatDate([2014, 0, 1])); // 01.01.14
console.log(formatDate(new Date(2014, 0, 1))); // 01.01.14
