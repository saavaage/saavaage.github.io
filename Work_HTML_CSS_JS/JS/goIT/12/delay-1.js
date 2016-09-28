/**
 * Created by boss on 28 сентября.
 */

'use strict';

function f(x) {
    console.log('Hello ' + x);
}
function delay(func, time) {

    return function () {
        var myArgs = arguments;
        var self = this;
        setTimeout(function(){
            return func.apply(self, myArgs);
        }, time);

    }
}
    var f1000 = delay(f, 1000);
    var f1500 = delay(f, 1500);

    f1000('тест1000'); // вывести тест1000 через 1000мс
    f1500('тест1500'); // вывести тест1500 через 1500мс