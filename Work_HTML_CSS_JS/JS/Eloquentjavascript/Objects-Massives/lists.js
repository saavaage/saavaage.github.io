/**
 * Created by boss on 18 августа.
 */
/*
Напишите функцию arrayToList, которая строит такую
структуру, получая в качестве аргумента [1, 2, 3], а также
функцию listToArray, которая создаёт массив из списка.
Также напишите вспомогательную функцию prepend,
которая получает элемент и создаёт новый список, где
этот элемент добавлен спереди к первоначальному
списку, и функцию nth, которая в качестве аргументов
принимает список и число, а возвращает элемент на
заданной позиции в списке или же undefined в случае
отсутствия такого элемента.
    Если ваша версия nth не рекурсивна, тогда напишите её
рекурсивную версию.
*/

function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--)
        list = {value: array[i], rest: list};
    return list;
}

function listToArray(list) {
    var array = [];
    for (var node = list; node; node = node.rest)
        array.push(node.value);
    return array;
}

function prepend(value, list) {
    return {value: value, rest: list};
}

function nth(list, n) {
    if (!list)
        return undefined;
    else if (n == 0)
        return list.value;
    else
        return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
