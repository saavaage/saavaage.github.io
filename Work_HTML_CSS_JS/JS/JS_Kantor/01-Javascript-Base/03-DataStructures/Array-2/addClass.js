/**
 * Created by boss on 16 сентября.
 */

'use strict';

/*
 В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
 var obj = {
 className: 'open menu'
 }
 Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там
 еще нет:

 P.S. Ваша функция не должна добавлять лишних пробелов.
 */

var myObj = {
    className: 'menu open'
};

function addClass(obj, cls) {
    if (obj.className) {
        var clsArr = obj.className.split(' ');
    }else{
        clsArr =[]; // если свойство className есть, но = ''
    }

    if (clsArr.indexOf(cls) == -1) {
        clsArr.push(cls);
        obj.className = clsArr.join(' ');
    }
    return obj.className;
}


// function addClass(obj, cls) {
//     var classes = obj.className ? obj.className.split(' ') : [];
//
//     for (var i = 0; i < classes.length; i++) {
//         if (classes[i] == cls) return; // класс уже есть
//     }
//
//     classes.push(cls); // добавить
//
//     obj.className = classes.join(' '); // и обновить свойство
//     return obj.className;
// }

console.log(addClass(myObj, 'new')); // obj.className='open menu new'
console.log(addClass(myObj, 'open')); // без изменений (класс уже существует)
console.log(addClass(myObj, 'me')); // obj.className='open menu new me'
