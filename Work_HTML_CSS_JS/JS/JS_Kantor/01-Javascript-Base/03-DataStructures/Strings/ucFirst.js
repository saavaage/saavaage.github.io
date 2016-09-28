/**
 * Created by boss on 14 сентября.
 */
// Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом.
// P.S. В JavaScript нет встроенного метода для этого. Создайте функцию, используя toUpperCase() и charAt().

// версия 1
function ucFirst(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}


console.log(ucFirst("вася")); // "Вася";
console.log(ucFirst(''));// "" нет ошибок при пустой строке

// версия 2
function ucFirst1(str){
    if(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    return str;
}


console.log(ucFirst1("вася")); // "Вася";
console.log(ucFirst1(''));// "" нет ошибок при пустой строке