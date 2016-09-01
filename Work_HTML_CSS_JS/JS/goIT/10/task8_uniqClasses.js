/**
 * Created by boss on 01 сентября.
 */
/*
 Имеется массив css классов со страницы.
 var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link' ... ];
 Необходимо из этого массива получить массив с уникальными именами классов (без повторений) отсортированный по частоте
 использования (наиболее часто используемые - впереди).
 Если классы используются одинаковое количество раз - между ними не важно какой будет первее.
 result = ['link', 'menu__item', 'menu', 'header', 'footer', 'sidebar', ... ];
 */

var myArr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'menu', 'footer', 'menu', 'menu', 'sidebar', 'link'];

function getUniqueClasses(arr) {
    var obj = {};
    arr.forEach(function (item) {
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] += 1;
        }
    });

    var result = Object.keys(obj);
    return result.sort(function (a, b) {
        return obj[b] - obj[a];
    })

}

console.log(getUniqueClasses(myArr));