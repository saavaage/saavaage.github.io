/**
 * Created by boss on 11 июля.
 /*
 Создайте функцию getWeekDay(date), которая выводит
 текущий день недели в коротком формате 'пн', 'вт', … 'вс'.
 var date = new Date(2012,0,3); // 3 января 2012
 console.log( getWeekDay(date) ); // Должно вывести 'вт'
 */
// версия1
function getWeekDay(date) {
    var weekArr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return weekArr[date.getDay()];
}

var date = new Date(2016, 6, 11); // 3 января 2012
console.log(getWeekDay(date)); // Должно вывести 'вт'

// версия2
function getWeekDay2(date) {
    return date.toLocaleString('ru', {weekday: 'short'});
}

var date2 = new Date(2016, 6, 11); // 3 января 2012
console.log(getWeekDay2(date2)); // Должно вывести 'вт'
