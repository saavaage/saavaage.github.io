/**
 * Created by boss on 24 сентября.
 */

'use strict';

/*
 Напишите функцию printNumbersTimeOut(), которая последовательно выводит в консоль числа от 1 до 20,
 с интервалом между числами 500 мс. То есть, весь вывод должен занимать 2000 мс, в течение которых
 каждые 100 мс в консоли появляется очередное число.
 P.S. Функция должна использовать рекурсивный setTimeOut.
 */

function printNumbersTimeOut() {
    var i = 2;
    console.log(1);
    var timerId = setTimeout(function f() {
        console.log(i++);
        if (i < 21) {
            setTimeout(f, 500);
        }
    }, 500);
}
printNumbersTimeOut();