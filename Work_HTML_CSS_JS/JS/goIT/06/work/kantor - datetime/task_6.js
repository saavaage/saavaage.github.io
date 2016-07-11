/**
 * Created by boss on 11 июля.
 */
/*
Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.
Например, если сейчас 23:00, то:
getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

// версия 1
function  getSecondsToTomorrow(){
    var now = new Date();
    return 24*3600 -( now.getHours()*60*60 + now.getMinutes() * 60 + now.getSeconds()) ;

}

console.log(getSecondsToTomorrow());

// версия 2
function getSecondsToTomorrow1() {
    var today = new Date();

    // создать объект из текущей даты, без часов-минут-секунд
    var tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);

    var diff = tomorrow - today; // разница в миллисекундах
    return Math.floor(diff / 1000); // перевести в секунды
}

console.log( getSecondsToTomorrow1() );