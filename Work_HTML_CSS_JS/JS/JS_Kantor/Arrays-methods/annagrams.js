/**
 * Created by boss on 13 августа.
 */
/*
Анаграммы – слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:
воз - зов
киборг - гробик
корсет - костер - сектор
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
 Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/
// версия 1
var myArr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
function arrClean(arr){
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i].toLowerCase().split('').sort().join('') == arr[j].toLowerCase().split('').sort().join('')) {
                arr.splice(j--, 1);
            }
        }
    }
    return arr;
}

console.log(arrClean(myArr)); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"

// версия 2
function aclean(arr) {
    // этот объект будем использовать для уникальности
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        // разбить строку на буквы, отсортировать и слить обратно
        var sorted = arr[i].toLowerCase().split('').sort().join(''); // (*)
        obj[sorted] = arr[i]; // сохраняет только одно значение с таким ключом
    }
    var result = [];
    // теперь в obj находится для каждого ключа ровно одно значение
    for (var key in obj) result.push(obj[key]);
    return result;
}
var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

console.log( aclean(arr) );