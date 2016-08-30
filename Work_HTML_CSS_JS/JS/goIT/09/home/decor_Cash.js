/**
 * Created by boss on 30 августа.
 */
/*Создайте декоратор makeCaching(f), который берет функцию f и возвращает обертку, которая кеширует её результаты.
 В этой задаче функция f имеет только один аргумент, и он является числом.
 При первом вызове обертки с определенным аргументом – она вызывает f и запоминает значение.
 При втором и последующих вызовах с тем же аргументом возвращается запомненное значение.

 Обратите внимание: проверка на наличие уже подсчитанного значения выглядит так: if (x in cache).
 Менее универсально можно проверить так: if (cache[x]), это если мы точно знаем,
 что cache[x] никогда не будет false, 0 и т.п.
*/
function f(x) {
    return Math.floor(Math.random()*10*x); // random для удобства тестирования
}

function makeCaching(f) {
    var cash = {};
    return function () {
        var valCash = f.apply(this, arguments);
        if(valCash in cash){
        }else{
            cash[valCash] = 'true';
        }
        return valCash;
    }
}
f = makeCaching(f);

var a, b;
a = f(1);
b = f(1);
console.log(a == b); // true (значение закешировано)

b = f(2);
console.log(a == b); // false, другой аргумент => другое значение