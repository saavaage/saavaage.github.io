/**
 * Created by boss on 14 сентября.
 */
/*
Напишите функцию randomInteger(min, max) для генерации случайного целого числа между min и max, включая min,max
как возможные значения.
Любое число из интервала min..max должно иметь одинаковую вероятность.
*/
// версия 1
function randomInteger(min, max) {
    return min-1 + Math.ceil(Math.random()*(max-min +1));

}

console.log(randomInteger(-5, 5));


// версия 2

function randomInteg(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

console.log( randomInteg(5, 10) );