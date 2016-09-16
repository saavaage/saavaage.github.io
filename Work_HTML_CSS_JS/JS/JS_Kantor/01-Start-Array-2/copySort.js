/**
 * Created by boss on 16 сентября.
 */

'use strict';

/*Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
Исходный массив не должен меняться.
Постарайтесь сделать код как можно короче.*/

var arr = ["HTML", "JavaScript", "CSS"];

var arrSorted = arr.slice().sort();

console.log( arrSorted ); // CSS, HTML, JavaScript
console.log(  arr ); // HTML, JavaScript, CSS (без изменений)
