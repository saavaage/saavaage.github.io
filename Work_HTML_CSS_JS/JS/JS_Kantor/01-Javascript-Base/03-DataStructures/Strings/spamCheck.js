/**
 * Created by boss on 14 сентября.
 */

// Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.
// Функция должна быть нечувствительна к регистру

function checkSpam(str){
    var spam1 = 'viagra';
    var spam2 = 'XXX';
    if(str.toLowerCase().indexOf(spam1) + str.toUpperCase().indexOf(spam2) == -2){
        return false;
    }
    return true;


}


console.log(checkSpam('buy ViAgRA now')); // true
console.log(checkSpam('free xxxxx')); // true
console.log(checkSpam("innocent rabbit")); // false
