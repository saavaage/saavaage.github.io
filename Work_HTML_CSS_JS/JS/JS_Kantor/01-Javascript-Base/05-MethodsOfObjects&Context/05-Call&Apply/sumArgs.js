/**
 * Created by boss on 22 сентября.
 */

'use strict';
/*
 Есть функция sum, которая суммирует все элементы массива:
 function sum(arr) {
 return arr.reduce(function(a, b) {
 return a + b;
 });
 }

 alert( sum([1, 2, 3]) ); // 6 (=1+2+3)
 Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:
 function sumArgs() {
 /!* ваш код *!/
 }
 alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива
 Для решения примените метод reduce к arguments, используя call, apply или одалживание метода.
 P.S. Функция sum вам не понадобится, она приведена в качестве примера использования reduce
 для похожей задачи.
 */
// версия 1
function sumArgs1(){
    var arr = [].slice.call(arguments);
    return arr.reduce(function (sum, prev) {
        return sum + prev;
    });
}
console.log(sumArgs1(1, 2, 3, 5, 4)); // 15

// версия 2
function sumArgs2(){
    return [].reduce.call(arguments, function(sum, prev){
        return sum + prev;
    });
}
console.log(sumArgs2(1, 2, 3, 5, 9)); // 20