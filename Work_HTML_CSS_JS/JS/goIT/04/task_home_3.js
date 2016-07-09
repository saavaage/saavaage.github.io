/**
 * Created by boss on 09 июля.
//  */
// ## Задание 3 (Троеточие)
//
// Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов.
//     Если длинна больше 20, то обрезает строку и добавляет в конец строки `'...'`
function checkLength(myString) {
    // console.log(myString.length);
 if(myString.length <=20){
     return myString;
 }else{
     return myString.slice(0,20) + '...';
 }
}
console.log(checkLength('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'));