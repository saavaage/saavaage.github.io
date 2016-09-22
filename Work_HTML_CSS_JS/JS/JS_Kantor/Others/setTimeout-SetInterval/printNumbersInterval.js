/**
 * Created by boss on 07 сентября.
 */
/*
 Напишите функцию printNumbersInterval(), которая последовательно выводит в консоль числа от 1 до 20, с интервалом между
 числами 100 мс. То есть, весь вывод должен занимать 2000 мс, в течение которых каждые 100 мс в консоли появляется очередное число.
 P.S. Функция должна использовать setInterval.
 */

function printNumbersInterval() {
    var i = 1;
    var intervalId = setInterval(function () {
        console.log(i);
        i++;
       if(i==21){
           clearInterval(intervalId);
       }
    }, 100);
}

printNumbersInterval();