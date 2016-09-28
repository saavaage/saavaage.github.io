/**
 * Created by boss on 18 сентября.
 */

'use strict';

/*Напишите функцию formatDate(date), которая форматирует дату date так:
 Если со времени date прошло менее секунды, то возвращает "только что".
 Иначе если со времени date прошло менее минуты, то "n сек. назад".
 Иначе если прошло меньше часа, то "m мин. назад".
 Иначе полная дата в формате "дд.мм.гг чч:мм".
 */

function formatDate(date) {
    var nowDate = new Date();
    var diff = Math.round((nowDate - date) / 1000);

    if (diff <= 1) {
        return 'только что';
    } else if (diff < 60) {
        return diff + ' секунд назад';
    } else if (diff < 3600) {
        return Math.round(diff / 60) + ' минут назад';
    } else {
        return nowDate.getDate() + '.' + ((nowDate.getMonth() +1 <10)? '0' + (nowDate.getMonth() +1) : nowDate.getMonth() +1 ) + '.' + nowDate.getFullYear()%100 + '   ' +  nowDate.toLocaleString('ru', {
            hour: 'numeric',
            minute: 'numeric'
        })

    }
}
console.log(formatDate(new Date(new Date - 1000))); // "только что"
console.log(formatDate(new Date(new Date - 30 * 1000)));   // "30 сек. назад"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"
console.log(formatDate(new Date(new Date - 86400 * 1000)));  // вчерашняя дата в формате "дд.мм.гг чч:мм"