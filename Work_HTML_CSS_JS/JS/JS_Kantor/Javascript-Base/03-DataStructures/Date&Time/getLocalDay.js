/**
 * Created by boss on 18 сентября.
 */

'use strict';

/*
Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
День нужно возвратить в европейской нумерации, т.е.
понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.
*/

var date = new Date();  // 3 янв 2012
function getLocalDay(date){
    return (date.getDay() ==0)? 7: date.getDay();
}

console.log( getLocalDay(date) );       // вторник, выведет 2