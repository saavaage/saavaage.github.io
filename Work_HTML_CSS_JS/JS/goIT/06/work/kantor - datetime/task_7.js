/**
 * Created by boss on 11 июля.
 */
/*
Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:
P.S. Обратите внимание, ведущие нули должны присутствовать, то есть 1 января 2001 должно быть 01 - BASE.01 - BASE.01 - BASE, а не 1.1.1.
   */



function formatDate(date){
    var myYear = date.getFullYear() +'';

    var myMonth = date.getMonth()+1;
    myMonth = (myMonth<10)? '0'+myMonth : myMonth;

    var myDay = date.getDate();
    myday = (myDay<10)? '0'+myDay : myDay;

    return myDay +'.' + myMonth +'.' + myYear.substring(2);
}

var d = new Date(2016, 6, 11); // 30 января 2014
console.log ( formatDate(d) ); // '30.01.14'