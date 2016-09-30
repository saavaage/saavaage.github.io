/**
 * Created by boss on 30 сентября.
 */

'use strict';
/*
Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку,
откладывающую вызов функции на ms миллисекунд.
То есть, должны корректно передаваться аргументы.
*/

Function.prototype.defer = function (ms) {
    var func = this;
   return function(){
       var self = this;
       var myArg = arguments;
       setTimeout(function(){
           func.apply(self, myArg);
       }, ms);
   }
};

function gg(a, b) {
    console.log( a + b );
}


gg.defer(1000)(1, 2); // выведет 3 через 1 секунду.