/**
 * Created by boss on 16 сентября.
 */

'use strict';

/*
 Целое число, большее 1, называется простым, если оно не делится нацело
 ни на какое другое, кроме себя и 1.
 Древний алгоритм «Решето Эратосфена» для поиска всех простых чисел до n выглядит так:
 1. Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n.
 Пусть p=2, это первое простое число.
 2. Зачеркнуть все последующие числа в списке с разницей в p, т.е. 2*p, 3*p, 4*p и т.д.
 В случае p=2 это будут 4,6,8....
 3. Поменять значение p на первое не зачеркнутое число после p.
 4. Повторить шаги 3-4 пока p2 < n.
 Все оставшиеся не зачеркнутыми числа – простые.

 Реализуйте «Решето Эратосфена» в JavaScript, используя массив.
 Найдите все простые числа до 100 и выведите их сумму.
 */

function eratosphen(n) {
    var myArr = [];
    for (var i = 2; i <= n; i++) {
        myArr.push(i);
    }
    for (var j = 2; j <= Math.floor(Math.sqrt(n)); j++) {
        for (var i = 0; i < myArr.length; i++) {
            if ((myArr[i] - j != 0) && (myArr[i] % j == 0)) {
                myArr[i] = 0;
            }
        }
    }
    var sum = 0;
    for (var i = 0; i < myArr.length; i++) {
        sum += myArr[i];
    }
    return sum;
}

console.log(eratosphen(100));