/**
 * Created by boss on 18 августа.
 */

// Напишите функцию складывает числа из 2х
// вызовов


function addf(value1){
    return function(value2){
        return value1 + value2;
    }
}


console.log(addf(3)(4)); //7