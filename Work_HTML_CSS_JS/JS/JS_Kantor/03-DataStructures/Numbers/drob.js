/**
 * Created by boss on 14 сентября.
 */
// Напишите функцию getDecimal(num), которая возвращает десятичную часть числа:


function getDecimal(num){

    var stringNumber = num.toString();
    var point = stringNumber.indexOf('.');
    var tail = + stringNumber.slice(point);

    return tail;
}


console.log( getDecimal(12.345) ); // 0.345
console.log( getDecimal(1.2) ); // 0.2
console.log( getDecimal(-1.2) ); // 0.2