/**
 * Created by boss on 11 июля.
 */
/*Напишите функцию sum(...), которая возвращает сумму всех
своих аргументов.
sum() = 0
sum(1) = 1
sum(1, 2) = 3
sum(1, 2, 3) = 6
sum(1, 2, 3, 4) = 10*/

function sumReturn(){
    var mySumm =0;
    for(var i=0; i < arguments.length; i++){
       mySumm += arguments[i];
    }
    return mySumm;
}

console.log(sumReturn(1,2,3,4,5));