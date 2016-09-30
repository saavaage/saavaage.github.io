/**
 * Created by boss on 30 сентября.
 */

'use strict';
/*
 Есть класс CoffeeMachine, заданный в функциональном стиле.
 Задача: переписать CoffeeMachine в виде класса с использованием прототипа.
 P.S. При описании через прототипы локальные переменные недоступны методам,
 поэтому нужно будет переделать их в защищённые свойства.
 */
// Функциональный стиль

// function CoffeeMachine(power) {
//     var waterAmount = 0;
//
//     var WATER_HEAT_CAPACITY = 4200;
//
//     function getTimeToBoil() {
//         return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//     }
//
//     this.run = function() {
//         setTimeout(function() {
//             console.log( 'Кофе готов!' );
//         }, getTimeToBoil());
//     };
//
//     this.setWaterAmount = function(amount) {
//         waterAmount = amount;
//     };
//
// }
//
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.setWaterAmount(50);
// coffeeMachine.run();

// Прототипный стиль
function CoffeeMachine(power) {
    this._power = power;
    this._waterAmount = 0;
    // вариант 1
    // var WATER_HEAT_CAPACITY = 4200;
    // this._getTimeToBoil = function() {
    //     return this._waterAmount * WATER_HEAT_CAPACITY * 80 / this._power;
    // }

}
//вариант 2
CoffeeMachine.prototype._WATER_HEAT_CAPACITY = 4200;
CoffeeMachine.prototype._getTimeToBoil = function () {
    return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this._power;
};

CoffeeMachine.prototype.run = function () {
    setTimeout(function () {
        console.log('Кофе готов!');
    }, this._getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function (amount) {
    this._waterAmount = amount;
};

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

