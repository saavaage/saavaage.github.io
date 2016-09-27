/**
 * Created by boss on 25 сентября.
 */

'use strict';
/*
 Напишите функцию throttle(f, ms) – «тормозилку», которая возвращает обёртку, передающую
 вызов f не чаще, чем раз в ms миллисекунд.
 У этой функции должно быть важное существенное отличие от debounce: если игнорируемый
 вызов оказался последним, т.е. после него до окончания задержки ничего нет – то он выполнится.
 */
function f(a) {
    console.log(a)
};

function throttle(f, ms) {
    var state = false;
    var myArgs;
    return function () {
        if (state) {
            myArgs = arguments;
        } else {
            if(!myArgs) {
                f.apply(this, arguments);
                var myTemp = arguments;
            }
            myArgs = arguments;
            state = true;
            setTimeout(function () {
                if(myArgs != myTemp){
                    f.apply(this, myArgs);
                }
                state = false;
            }, ms);
        }
    }
}

// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)
setTimeout(function () { f1000(4)}, 900); // игнор (прошло только 100 мс)
setTimeout(function () { f1000(5)}, 1100); // выполнится
setTimeout(function () { f1000(6)}, 3150); // игнор