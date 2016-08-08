/**
 * Created by boss on 11 июля.
 */

/*
Необходимо отсортировать массив в случайном порядке используя метод sort.

    var arr = [1, 2, 3, 4, 5];

arr.sort(ваша функция);

console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
*/

// версия 1
var myArr = [1, 2, 3, 4, 5];

arr.sort(function(a,b){
    var a = Math.round(Math.random() * 10);
    var b = Math.round(Math.random() * 10);
    return a - b;

});
console.log( myArr ); // элементы в случайном порядке, например [3,5,1,2,4]

// версия 2
var arr = [1, 2, 3, 4, 5];
function compareRandom(a, b) {
    return Math.random() - 0.5;
}
arr.sort(compareRandom);

console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]