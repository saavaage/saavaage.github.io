/**
 * Created by boss on 22 сентября.
 */

'use strict';

/*
 Создайте декоратор makeCaching(f), который берет функцию f и возвращает обертку,
 которая кеширует её результаты.
 В этой задаче функция f имеет только один аргумент, и он является числом.
 При первом вызове обертки с определенным аргументом – она вызывает f и запоминает значение.
 При втором и последующих вызовах с тем же аргументом возвращается запомненное значение.
 */

function f(x) {
    return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
    var cash = {};
    return function (x) {
        if (x in cash) {
            return cash[x];
        } else {
            return cash[x] = f.call(this, x);
        }
    }
}
    f = makeCaching(f);

    var a, b;

    a = f(1);
    b = f(2);
    console.log(a == b); // true (значение закешировано)

    b = f(1);
    console.log(a == b); // false, другой аргумент => другое значение