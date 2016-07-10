/**
 * Created by boss on 10 июля.
// //  */
// Написать функцию которая принимает на вход массив и
// возвращает случайное значение из этого массива.
// var rand = min + Math.floor(Math.random() * (max + 1 - min));

function getRandom(arr) {
    var min = 0;
    var max = arr.length -1;
    var rand = min + Math.floor(Math.random() * (max + 1 - min));
    return arr[rand];
}

var fruits = ['apple', 'orange','kivi', 'pear','apricot'];

console.log(getRandom(fruits));