/**
 * Created by boss on 28 августа.
 */
var arr1 = [1, 2, 3, 4];
var arr2 = ['a', 'b', 'c'];

var myString = arr1.join.call(arr2, '__');

console.log(myString);


function printArgs() {
    var join = [].join; // скопируем ссылку на функцию в переменную
// вызовем join с this=arguments,
// этот вызов эквивалентен arguments.join(':') из примера выше
    var argStr = join.call(arguments, ':');
    return argStr; // сработает и выведет 1:2:3
}
console.log(printArgs('abc', 2, 3, 4));