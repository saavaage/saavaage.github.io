/**
 * Created by boss on 16 сентября.
 */
// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.

"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

function getSalaries(obj) {
    var sum = 0;

    for (var key in obj) {
        sum += obj[key]
    }
    return sum;

}

console.log(getSalaries(salaries)); //650