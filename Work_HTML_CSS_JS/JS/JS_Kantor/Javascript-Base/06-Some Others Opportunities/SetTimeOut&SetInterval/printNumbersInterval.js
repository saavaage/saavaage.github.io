/**
 * Created by boss on 24 сентября.
 */

'use strict';

/*
 Напишите функцию printNumbersInterval(), которая последовательно выводит в консоль числа от 1 до 20,
 с интервалом между числами 100 мс. То есть, весь вывод должен занимать 2000 мс, в течение которых
 каждые 100 мс в консоли появляется очередное число.
 P.S. Функция должна использовать setInterval.
 */

function printNumbersInterval() {
    var i = 1;
    setInterval(function () {
        console.log(i++);
        if (i > 20) {
            clearInterval(timerId);
        }
    }, 1000);
}
printNumbersInterval();