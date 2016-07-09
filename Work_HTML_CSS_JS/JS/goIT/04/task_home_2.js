/**
 * Created by boss on 09 июля.
 */
// ## Задание 2 (Проверка на СПАМ)
//
// Напишите функцию `checkSpam` которая проверяет строку на содержание слов: `spam, sex`.
//
//     ```js
// checkSpam('get new Sex videos'); // true
// checkSpam('[SPAM] How to earn fast money?'); // true
// checkSpam('New PSD template'); // false
// ``
//
// вариант1 `
function checkSpam(myString) {
    var myStr = myString.toLowerCase();
    if (myStr.indexOf('spam')== 1 || myStr.indexOf('sex') == 1) {
        return 'true';
    } else {
        return 'false';
    }
}

// console.log(checkSpam('New PSD template'));

// вариант2
function checkSpam1(myString) {
    var myStr = myString.toLowerCase();
    if (myStr.indexOf('spam')+ myStr.indexOf('sex') == -2) {
        return 'false';
    } else {
        return 'true';
    }
}
console.log(checkSpam1('get new Sex videos'));