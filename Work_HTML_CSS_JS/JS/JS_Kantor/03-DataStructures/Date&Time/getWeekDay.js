/**
 * Created by boss on 18 сентября.
 */

'use strict';

// Создайте функцию getWeekDay(date),
// которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.

var date = new Date();  // 3 января 2012

// версия 1
function getWeekDay1(date){
    var week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    var todayDay = week[date.getDay()];
    return todayDay;
}
console.log( getWeekDay1(date) );      // Должно вывести 'вт'

// версия 2
function getWeekDay2(date){
    return date.toLocaleString('ru', {weekday: 'short'});
}
console.log( getWeekDay2(date) );      // Должно вывести 'вт'