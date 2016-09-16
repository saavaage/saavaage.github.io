/**
 * Created by boss on 16 сентября.
 */

'use strict';

/*
 У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:
 var obj = {
 className: 'open menu'
 };
 Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть.
 P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

 obj = {
 className: 'my menu menu'
 };
 removeClass(obj, 'menu');
 alert( obj.className ); // 'my'
 Лишних пробелов после функции образовываться не должно.
 */

var obj = {
    className: 'my menu menu'
};

function removeClass(obj, cls) {
    var newArr = obj.className.split(' ');

    // if (newArr.indexOf(cls) == -1) {
    //     return obj.className;
    // } else {
        for (var i = 0; i < newArr.length; i++) {
            if (newArr[i] == cls) {
                newArr.splice(i, 1);
                i--;
            }
        }
        return obj.className = newArr.join(' ');
    // }
}

console.log(removeClass(obj, 'menu')); // my