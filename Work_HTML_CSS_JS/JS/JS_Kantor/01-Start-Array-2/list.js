/**
 * Created by boss on 17 сентября.
 */

'use strict';
/*
Односвязный список – это структура данных, которая состоит из элементов,
каждый из которых хранит ссылку на следующий. Последний элемент может не иметь ссылки,
либо она равна null.
Например, объект ниже задаёт односвязный список, в next хранится ссылка на следующий элемент:*/

/*Задачи:
    1.Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
    2.Напишите функцию printList(list) при помощи рекурсии.
    3.Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке,
    при помощи рекурсии. Для списка выше она должна выводить 4,3,2,1
    4.Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.
*/

var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// 1 список через цикл
function printList(list) {
    var tmp = list;
    while (tmp) {
        console.log( tmp.value );
        tmp = tmp.next;
    }
}
printList(list);

// 2 список через рекурсию
function printListRec(list) {
    console.log( list.value ); // (1)

    if (list.next) {
        printListRec(list.next); // (2)
    }
}
printListRec(list);

// 3 обратный список через цикл
function printReverseList(list) {
    var arr = [];
    var tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (var i = arr.length - 1; i >= 0; i--) {
        console.log( arr[i] );
    }
}
printReverseList(list);

// 4 обратный список через рекурсию
function printListRecReverse(list) {

    if (list.next) {
        printListRecReverse(list.next); // (2)
    }
    console.log( list.value ); // (1)
}
printListRecReverse(list);