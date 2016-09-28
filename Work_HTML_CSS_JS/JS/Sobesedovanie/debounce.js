/**
 * Created by boss on 28 сентября.
 */

'use strict';

function f(x) {
    return console.log(x);
}

function debounce(func, time) {
    var flag = false;
    return function () {
        if(flag == false) {
            func.apply(this, arguments);
            flag = true;
        }else if(flag == true){
            return;
        }
        setTimeout(function () {
            return flag = false;
        }, time);
    }
}
var f = debounce(f, 1000);

f(1); // выполнится сразу же
f(2); // игнор

setTimeout(function () { f(3)}, 100); // игнор (прошло только 100 мс)
setTimeout(function () { f(4)}, 1100); // выполнится
setTimeout(function () { f(5)}, 1500); // игнор