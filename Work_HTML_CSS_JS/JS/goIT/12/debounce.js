/**
 * Created by boss on 28 сентября.
 */

'use strict';

function f(x) {
    return console.log(x);
}

function debounce(func, time) {
    var flag = true;
    return function () {
        if(flag == true) {
            func.apply(this, arguments);
            flag = false;
        }else if(flag == false){
            return;
        }
        setTimeout(function () {
            return flag = true;
        }, time);
    }
}
var f = debounce(f, 1000);

f(1); // выполнится сразу же
f(2); // игнор

setTimeout(function () { f(3)}, 100); // игнор (прошло только 100 мс)
setTimeout(function () { f(4)}, 1100); // выполнится
setTimeout(function () { f(5)}, 2000); // игнор