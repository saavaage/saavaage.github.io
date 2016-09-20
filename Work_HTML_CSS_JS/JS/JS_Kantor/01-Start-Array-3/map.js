/**
 * Created by boss on 18 сентября.
 */

'use strict';

/*
Код ниже получает из массива строк новый массив, содержащий их длины:

var arr = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
    arrLength[i] = arr[i].length;
}

alert( arrLength ); // 4,5,2,5
Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.
*/

var arr = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = arr.map(function(myLenght){
    return myLenght.length;
});

console.log( arrLength ); // 4,5,2,5