/**
 * Created by boss on 14 августа.
 */
/*
 На входе массив чисел, например: arr = [1,2,3,4,5].
 Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
 Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же
 числа элементов, в котором на каждой позиции должна быть сумма элементов arr
 до этой позиции включительно.
 То есть:
 для arr = [ 1, 2, 3, 4, 5 ]
 getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
 Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].
 Функция не должна модифицировать входной массив.
 В решении используйте метод arr.reduce.
 */

// версия 1
var arr = [1, 2, 3, 4, 5];

function getSums(arr) {
    var copyArr = arr.slice();
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        copyArr.length = i+1;
        newArr[i] = copyArr.reduce(function (sum, current) {
            return sum + current;
        })
        copyArr = arr.slice();
    }
    return newArr;
}

console.log(getSums(arr));


// версия 2

function getSums1(arr) {
    var result = [];
    if (!arr.length) return result;

    var totalSum = arr.reduce(function(sum, item) {
        result.push(sum);
        return sum + item;
    });
    result.push(totalSum);

    return result;
}

console.log(getSums1([1,2,3,4,5])); // 1,3,6,10,15
