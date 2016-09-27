/**
 * Created by boss on 24 сентября.
 */

'use strict';

/*
Превратите объект leader из примера ниже в JSON:

    var leader = {
        name: "Василий Иванович",
        age: 35
    };
После этого прочитайте получившуюся строку обратно в объект.
*/

var leader = {
    name: "Василий Иванович",
    age: 35
};

var conv2json = JSON.stringify(leader);

var conv2js = JSON.parse(conv2json);

console.log(conv2json);
console.log(conv2js);