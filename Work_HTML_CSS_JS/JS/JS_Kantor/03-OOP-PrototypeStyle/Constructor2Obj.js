/**
 * Created by boss on 28 сентября.
 */

'use strict';
/*
Пусть у нас есть произвольный объект obj, созданный каким-то конструктором, каким – мы не знаем,
но хотели бы создать новый объект с его помощью.
Сможем ли мы сделать так?

   var obj2 = new obj.constructor();

Приведите пример конструкторов для obj, при которых такой код будет работать верно – и неверно.
*/

// Ответ: можем, если не менять св-во Proto.prototype = {constractor: Proto }

function Rat(name){this.name = name};
var obj = new Rat('Petya');
Rat.prototype.run = true;
var obj2 = new obj.constructor('Vasya');
console.log(obj2.name);

// если изменить св-во Proto.prototype = {constractor: Proto }, то нет

function Rat(name){this.name = name};
Rat.prototype = { // перезаписали
    run: true
}
var obj = new Rat('Petya');
var obj2 = new obj.constructor('Vasya');
console.log(obj2.name);