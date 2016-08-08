/**
 * Created by boss on 12 июля.
 */
/*
Анаграммы — слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:
воз - зов
киборг - гробик
корсет - костер - сектор
Напишите функцию anClean(arr), которая возвращает массив слов, очищенный от анаграмм.
 var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
 console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/
// версион 1
function anClean(arr){
    var myMass = arr.slice();
    for (var i=0; i< myMass.length; i++){
        for(var j=i+1; j<myMass.length; j++){
            if(myMass[j].toLowerCase().split('').sort().join() === myMass[i].toLowerCase().split('').sort().join()){
                myMass.splice(j,1);
                j--;
            }
        }
    }
    return myMass;
}
var myArr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
console.log( anClean(myArr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'

// версия 2 !!скорость!!
function aclean1(arr) {
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

var arr1 = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

console.log( aclean1(arr1) );