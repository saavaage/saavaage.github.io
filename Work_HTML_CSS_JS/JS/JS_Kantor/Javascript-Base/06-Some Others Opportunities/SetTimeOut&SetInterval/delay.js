/**
 * Created by boss on 24 сентября.
 */

'use strict';
/*
 Напишите функцию delay(f, ms), которая возвращает обёртку вокруг f,
 задерживающую вызов на ms миллисекунд.
 Упрощённо можно сказать, что delay возвращает "задержанный на ms" вариант f.
 delay должна быть универсальной: передавать любое количество аргументов и контекст this.
 */

function f(x) {
    console.log(x);
}

function delay(f, ms) {
    return function(){
        var myArg = arguments;
        var myThis = this;
        setTimeout(function () {
            f.apply(myThis, myArg);
        }, ms);
    }
}

var f1000 = delay(f, 2000);
var f1500 = delay(f, 5000);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
