/**
 * Created by boss on 07 сентября.
 */
// Превратите объект team из примера ниже в JSON:
/*Может ли это сделать прямой вызов JSON.stringify(team)? Если нет, то почему?
  Какой подход вы бы предложили для чтения и восстановления таких объектов?
  */
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

// РЕШЕНИЕ //
// Изменить структуру на следующую:
//
var leader1 = {
    id: 12,
    name: "Василий Иванович"
};

var soldier1 = {
    id: 51,
    name: "Петька"
};

// поменяли прямую ссылку на ID
leader1.soldierId = 51;
soldier1.leaderId = 12;

var team1 = {
    12: leader,
    51: soldier
};