/**
 * Created by boss on 14 августа.
 */
// Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:
function sum(){
    var total =0;
    for(var i =0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}




console.log(sum(1, 2, 3, 4)); // = 10
console.log(sum(1, 5, -4));