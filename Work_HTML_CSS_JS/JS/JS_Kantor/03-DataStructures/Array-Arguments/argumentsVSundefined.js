/**
 * Created by boss on 18 сентября.
 */

'use strict';

// Как в функции отличить отсутствующий аргумент от undefined?

function f(x) {
    return (!arguments.length)? 0
    :(arguments[0] ==='undefined')? 1 : arguments[0];
}

console.log(f(undefined)); // 1
console.log(f()); // 0