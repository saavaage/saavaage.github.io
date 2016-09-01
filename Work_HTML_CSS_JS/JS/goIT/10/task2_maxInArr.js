/**
 * Created by boss on 01 сентября.
 */
// Необходимо написать функцию, которая будет принимать на вход массив чисел и возвращать самое большое.

function getMaxNumber(){
    var valArg = [].slice.apply(arguments[0]);
    return valArg.reduce(function(a, b){return Math.max(a, b)});
}


console.log(getMaxNumber([1,30,40,2,7])); // 40
console.log(getMaxNumber([1,15,-20,2,-7])); // 15
