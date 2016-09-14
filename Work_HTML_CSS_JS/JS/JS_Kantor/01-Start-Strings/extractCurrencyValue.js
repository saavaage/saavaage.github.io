/**
 * Created by boss on 14 сентября.
 */
// Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять число-значение, в данном случае 120.

// версия 1 - простой вариант
// function extractCurrencyValue(str) {
//     return str.slice(1);
//
// }
//
// console.log(extractCurrencyValue("$120")); // 120


// версия 2 - если кол-во букв вначале строки неизвестно
function extractCurrencyValue1(str) {
    for (var i = 0; i < str.length; i++) {
       if(!isNaN(+ str[i])) {
            break;
        }
    }
    return str.slice(i);
}

console.log(extractCurrencyValue1("ru120")); // 120