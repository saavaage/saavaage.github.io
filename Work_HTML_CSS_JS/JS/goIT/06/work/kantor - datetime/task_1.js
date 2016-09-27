/**
 * Created by boss on 11 июля.
 */
var now =  new Date();
console.log(now);

// 24 часа после 01 - Start.01 - Start.1970 GMT+0
var Jan02_1970 = new Date(3600 * 24 * 1000);
console.log( Jan02_1970 );

var myDate = new Date(2016, 11, 31);
console.log( myDate );

var myDate1 = new Date(2016, 0, 1, 2, 3, 4, 567);
console.log( myDate1 );

// текущая дата
var date = new Date();

// час в текущей временной зоне
console.log( date.getHours() );

// сколько сейчас времени в Лондоне?
// час в зоне GMT+0
console.log( date.getUTCHours() );


var today = new Date;

today.setHours(0);
console.log( today ); // сегодня, но час изменён на 0

today.setHours(0, 0, 0, 0);
console.log( today ); // сегодня, ровно 00:00:00.

// автоисправление даты
var d = new Date(2013, 0, 32); // 32 января 2013 ?!?
console.log(d); // ... это 1 февраля 2013!

var d1 = new Date(2016, 1, 28);
d1.setDate(d1.getDate() + 2);
console.log(d1);


var d3 = new Date;
d3.setDate(1); // поставить первое число месяца
console.log( d3 );
d3.setDate(0); // нулевого числа нет, будет последнее число предыдущего месяца
console.log( d3 );

// Преобразование к числу, разность дат

var start = new Date; // засекли время
// что-то сделать
for (var i = 0; i < 1000000; i++) {
    var doSomething = i * i * i;
}
var end = new Date; // конец измерения
console.log( "Цикл занял " + (end - start) + " ms" );


// Форматирование и вывод дат

var date100 = new Date(2014, 11, 31, 12, 30, 0);

var options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

console.log( date100.toLocaleString("ru", options) ); // среда, 31 декабря 2014 г. н.э. 12:30:00
console.log( date100.toLocaleString("en-US", options) ); // Wednesday, December 31, 2014 Anno Domini 12:30:00 PM

/*
Методы вывода без локализации:
toString(), toDateString(), toTimeString()
*/
var d101 = new Date();

console.log( d101.toString() ); // вывод, похожий на 'Wed Jan 26 2011 16:40:50 GMT+0300'
console.log( d101.toDateString() );
console.log( d101.toTimeString() );

// Разбор строки, Date.parse

var msUTC = Date.parse('2012-01 - Start-26T13:51:50.417Z'); // зона UTC

console.log( msUTC ); // 1327571510417 (число миллисекунд)

// Метод Date.now()
// Метод Date.now() возвращает дату сразу в виде миллисекунд.
// Технически, он аналогичен вызову +new Date(), но в отличие от него не создаёт промежуточный объект даты,
// а поэтому – во много раз быстрее.
