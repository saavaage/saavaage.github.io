/**
 * Created by boss on 16 сентября.
 */

'use strict';

/*
 Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
 То есть, дефисы удаляются, а все слова после них получают заглавную букву.
 */

function camelize(str) {
    var myArr = str.split('-');
    var myStr = '';
    for (var i = 1; i < myArr.length; i++) {
        myArr[i] = myArr[i][0].toUpperCase() + myArr[i].slice(1);
    }
    return myArr.join('');
}

console.log(camelize("background-color"));// == 'backgroundColor';
console.log(camelize("list-style-image"));// == 'listStyleImage';
console.log(camelize("-webkit-transition"));// == 'WebkitTransition';