/**
 * Created by boss on 11 июля.
 */
/*
Напишите функцию formatDate(date), которая форматирует дату date так:

    Если со времени date прошло менее секунды, то возвращает "только что".
    Иначе если со времени date прошло менее минуты, то "n сек. назад".
    Иначе если прошло меньше часа, то "m мин. назад".
    Иначе полная дата в формате "дд.мм.гг чч:мм".
 console.log( formatDate(new Date(new Date - 1)) ); // "только что"

 console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

 console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

 console.log( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"
*/

function formatDate(date) {
var myDate = new Date();
    var diff = Math.floor((myDate - date)/1000);
    if(diff<=1){
       console.log('just now!')
    }else
    if(diff<=60){
        console.log( diff +' seconds before')
    }else if(diff<3600){
        console.log( Math.floor(diff/60) +' minutes before')
    }else{
        console.log( myDate.toDateString());
    }

}
var d = new Date(2016,6,11,21,37)
formatDate(d);