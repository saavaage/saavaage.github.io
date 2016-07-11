/**
 * Created by boss on 11 июля.
 */
/*
Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.
Параметры:
year – 4-значный год, например 2012.
month – месяц от 0 до 11.
Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/
// версия1
function getLastDayOfMonth(year, month){
    var myDate = new Date(year,month+1);
    return myDate.getDate(myDate.setDate(0));
}

console.log(getLastDayOfMonth(2016,6));
// версия2
function getLastDayOfMonth1(year, month){
    var myDate = new Date(year,month+1,0);
    return myDate.getDate();
}

console.log(getLastDayOfMonth1(2016,0));