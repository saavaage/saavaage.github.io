/**
 * Created by boss on 13 августа.
 */
/*

Мы видели, что оператор % (остаток от деления) может
использоваться для определения того, чётное ли число (
% 2). А вот ещё один способ определения:
    Ноль чётный.
    Единица нечётная.
    У любого числа N чётность такая же, как у N - 2.
Напишите рекурсивную функцию isEven согласно этим
правилам. Она должна принимать число и возвращать
булевское значение.
*/

// версия 1
function isEven(n){
    if(n>=0) {
        if (n == 0) return 'true';
        if (n == 1) return 'false';
        return isEven(n - 2);
    }else{
        if (n == 0) return 'true';
        if (n == -1) return 'false';
        return isEven(n + 2);
    }
}

console.log(isEven(-50));

// версия 2
function isEven1(n) {
    if (n == 0)
        return true;
    else if (n == 1)
        return false;
    else if (n < 0)
        return isEven(-n);
    else
        return isEven(n - 2);
}


console.log(isEven1(-75));

