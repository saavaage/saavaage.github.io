/**
 * Created by boss on 30 сентября.
 */

'use strict';

// Добавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции
// на ms миллисекунд.

Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};


function f() {
    console.log( "привет" );
}

f.defer(5000); // выведет "привет" через 1 секунду