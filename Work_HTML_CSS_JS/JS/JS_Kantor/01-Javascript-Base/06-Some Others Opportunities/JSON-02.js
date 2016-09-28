/**
 * Created by boss on 24 сентября.
 */

'use strict';

/*
Превратите объект team из примера ниже в JSON:
    var leader = {
        name: "Василий Иванович"
    };
var soldier = {
    name: "Петька"
};
// эти объекты ссылаются друг на друга!
leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];

Может ли это сделать прямой вызов JSON.stringify(team)? Если нет, то почему?
Какой подход вы бы предложили для чтения и восстановления таких объектов?
*/

// версия 1
var leader1 = {
    name: "Василий Иванович",
    Id: 1,
    soldierId: 2
};

var soldier1 = {
    name: "Петька",
    Id: 2,
    leaderId: 1
};


var team1 = {
 1: leader1,
 2: soldier1
};

console.log(JSON.stringify(team1));


// версия 2

var leader = {
    name: "Василий Иванович"
};
var soldier = {
    name: "Петька"
};
// эти объекты ссылаются друг на друга!
leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];


var js = JSON.stringify(team, function(k, v) {
    if (typeof v == 'object' && typeof k == 'string' && k.length > 1) {
        var tmp = {};
        for (var key in v) {
            if (typeof v[key] == 'string') {
                tmp[key] = v[key];
            }
        }
        return tmp;
    }
    return v;
}, 4);

console.log(js);