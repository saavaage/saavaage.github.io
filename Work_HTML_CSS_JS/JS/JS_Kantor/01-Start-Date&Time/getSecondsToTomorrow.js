/**
 * Created by boss on 18 сентября.
 */

'use strict';

/*
Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.
Например, если сейчас 23:00, то:
getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения
сегодняшней даты.
*/

function getSecondsToTomorrow(){
    var today = new Date();
    var tommorow = new Date(today.getFullYear(), today.getMonth(), (today.getDate()+ 1));

    return Math.round((tommorow - today)/1000);
}

console.log(getSecondsToTomorrow());