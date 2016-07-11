/**
 * Created by boss on 11 июля.
 */
/*
Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.
Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:
getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/
// версия 1
function getSecondsToday(){
    var now = new Date();
    return now.getHours()*60*60 + now.getMinutes() * 60 + now.getSeconds() ;
    }
console.log(getSecondsToday());

// версия 2
function getSecondsToday1() {
    var now = new Date();

    // создать объект из текущей даты, без часов-минут-секунд
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    var diff = now - today; // разница в миллисекундах
    return Math.floor(diff / 1000); // перевести в секунды
}

console.log( getSecondsToday1() );
