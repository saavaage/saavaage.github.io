/**
 * Created by boss on 28 сентября.
 */

'use strict';
/*
Добавьте кофеварке публичный метод addWater(amount), который будет добавлять воду.
При этом, конечно же, должны происходить все необходимые проверки –
на положительность и превышение ёмкости.
*/

function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.addWater = function(amount){
        this.setWaterAmount(amount + waterAmount);

    };
    function onReady() {
        console.log( 'Кофе готов!' );
    }

    this.run = function() {
        setTimeout(onReady, getTimeToBoil());
    };

}

var coffeeMachine = new CoffeeMachine(100000, 600);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
coffeeMachine.run();