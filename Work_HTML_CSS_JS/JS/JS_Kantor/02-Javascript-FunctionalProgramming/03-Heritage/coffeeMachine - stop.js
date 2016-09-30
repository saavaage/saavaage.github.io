/**
 * Created by boss on 28 сентября.
 */

'use strict';

// Когда кофеварку выключают – текущая варка кофе должна останавливаться.

function Machine(power) {
    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);
    var timerId;
    var waterAmount = 0;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

    function onReady() {
        console.log('Кофе готово!');
    }

    this.run = function() {
        if(!this._enabled){
            console.log('ошибка, кофеварка выключена!');
        }else {
           timerId = setTimeout(onReady, 1000);
        }
    };
    var parentDisable = this.disable;
    this.disable = function() {
        parentDisable.call(this);
        clearTimeout(timerId);
    };

}

var coffeeMachine = new CoffeeMachine(10000);

coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет