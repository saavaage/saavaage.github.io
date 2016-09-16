/**
 * Created by boss on 16 сентября.
 */
/*
 Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
 Если объект пустой, то пусть он выводит «нет сотрудников».
 */

"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

function getEmployeeMax(obj) {
    var maxSalary = 0;
    var maxName = '';
    for (var key in obj) {
        if (obj[key] > maxSalary) {
            maxSalary = obj[key];
            maxName = key;
        }
    }
    return (maxName)? maxName: 'нет сотрудника';

}

console.log(getEmployeeMax(salaries));