/**
 * Created by boss on 11 июля.
 */
/*
Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.
*/



function getLocalDay(date){
var myDate = date.getDay();
if(myDate === 0){
    return 7;
}else {
    return myDate;
}
}
var date = new Date(2016, 6, 11);  // 3 янв 2012
console.log( getLocalDay(date) );       // вторник, выведет 2