/**
 * Created by boss on 10 июля.
 */
//добавить в конец и вывести массив

function getLast(arr, n) {
    arr.push(n);
    return arr;
}

var myArray = ['a', 'b', 'c', 'd'];
var elem = 'Fat';
console.log(getLast(myArray, elem));