/**
 * Created by boss on 25 сентября.
 */

'use strict';

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

    var state = false;

    return function () {
        if (state) {
            return;
        } else {

            f.apply(this, arguments);
            state = true;
            setTimeout(function () {
                state = false;
            }, ms);
        }
    }
}
    var f = debounce(f, 1000);

    f(1); // выполнится сразу же
    f(2); // игнор
    setTimeout(function () {
        f(3)
    }, 100); // игнор (прошло только 100 мс)
    setTimeout(function () {
        f(4)
    }, 1100); // выполнится
    setTimeout(function () {
        f(5)
    }, 1200); // игнор
