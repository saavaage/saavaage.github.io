/**
 * Created by boss on 09 августа.
 */

// Написать функцию которая принимает на вход массив и
// возвращает случайное значение из этого массива.
//     var rand = min + Math.floor(Math.random() * (max + 1 - min));

var myArr = [1,2,3, 'fat'];
function getRandomElem(arr){
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

console.log(getRandomElem(myArr));