/**
 * Created by boss on 18 сентября.
 */

'use strict';

/*
Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.
Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:
getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

function getSecondsToday(){
    var data = new Date();
    return data.getHours()*60*60 + data.getMinutes()*60 + data.getSeconds();

}

console.log(getSecondsToday());