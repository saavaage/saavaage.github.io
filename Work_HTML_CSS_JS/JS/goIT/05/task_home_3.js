/**
 * Created by boss on 10 июля.
 */
// ## Задание 3 (Калькулятор)
//
// Напишите код, который:
//
// * Запрашивает по очереди значения при помощи `prompt` и сохраняет их в массиве.
// * Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
// * При этом ноль `0` не должен заканчивать ввод, это разрешённое число.
// * Выводит сумму всех значений массива когда ввод прекращен.

function calculator() {
    var myMassive = [], summ = 0;
    while (true) {
        var calc = prompt('Enter a number');
        if (calc != '' && calc != null && !isNaN(parseFloat(calc)) && isFinite(calc)) {
            myMassive.push(+calc);
        } else {
            break;
        }
    }
    for (var i = 0; i < myMassive.length; i++) {
        summ += myMassive[i];
    }
    alert('Полученные массив: ' + myMassive);
    alert('Сумма цифр массива: ' +summ);
}

calculator();