/**
 * Created by boss on 24 сентября.
 */

'use strict';
/*
 Напишите функцию debounce(f, ms), которая возвращает обёртку, которая передаёт вызов f не чаще,
 чем раз в ms миллисекунд.
 «Лишние» вызовы игнорируются. Все аргументы и контекст – передаются.
 Упрощённо можно сказать, что debounce возвращает вариант f,
 срабатывающий не чаще чем раз в ms миллисекунд.
 */
function f(x) {
    console.log(x);
}
function debounce(f, ms) {
    var timerBase = 0;
    return function () {
        if (Date.now() - timerBase > ms) {
            f.apply(this, arguments);
            timerBase = Date.now();
        }
    }
}
var f = debounce(f, 1000);

f(1); // выполнится сразу же
f(2); // игнор
setTimeout(function () { f (3)}, 100); // игнор (прошло только 100 мс)
setTimeout(function () { f(4)} , 1900); // выполнится
setTimeout(function () { f(5)}, 2910); // выполнится
