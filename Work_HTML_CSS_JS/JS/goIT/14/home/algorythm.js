/**
 * Created by boss on 30 сентября.
 */

'use strict';

var head = {
    glasses: 1
};

var table = {
    pen: 3
};

var bed = {
    sheet: 1,
    pillow: 2
};

var pockets = {
    money: 2000
};
/*
Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму:
 pockets -> bed -> table -> head.
То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.
После этого ответьте на вопрос, как быстрее искать glasses:
обращением к pockets.glasses или head.glasses? Попробуйте протестировать.
*/

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;
console.log(pockets.pen) // == 3
console.log(bed.glasses) // == 1
console.log(table.money) // == undefined

function test(name){
    var timeStart = Date.now();
    for(var i = 1; i <= 10000000; i++){
        if(name == true) true;
    }

    return (Date.now() - timeStart) / 1000;
}

console.log('Differ: ' + (test(pockets.glasses) - test(head.glasses))/ test(head.glasses) * 100 );

