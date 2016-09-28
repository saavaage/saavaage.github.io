/**
 * Created by boss on 27 сентября.
 */

'use strict';
function f(a) {
    console.log(a)
};

function throttle(func, ms) {

    var isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function() {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}

// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)
setTimeout(function () { f1000(4)}, 900); // игнор (прошло только 100 мс)
setTimeout(function () { f1000(5)}, 1100); // выполнится
setTimeout(function () { f1000(6)}, 3150); //
setTimeout(function () { f1000(7)}, 3200); //