/**
 * Created by boss on 27 сентября.
 */

'use strict';
// Улучшите готовый код кофеварки, который дан ниже: добавьте в кофеварку публичный метод stop(),
// который будет останавливать кипячение (через clearTimeout).
// P.S. Текущую температуру воды вычислять и хранить не требуется.
// P.P.S. При решении вам, скорее всего, понадобится добавить приватное свойство timerId,
// которое будет хранить текущий таймер.



function CoffeeMachine(power) {
    this.waterAmount = 0;
    var timer = 0;
    var WATER_HEAT_CAPACITY = 4200;

    var self = this;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        console.log( 'Кофе готов!' );
    }

    this.run = function() {
        timer = setTimeout(onReady, getBoilTime());
    };
    this.stop = function() {
        clearTimeout(timer);
    };

}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop(); // кофе приготовлен не будет