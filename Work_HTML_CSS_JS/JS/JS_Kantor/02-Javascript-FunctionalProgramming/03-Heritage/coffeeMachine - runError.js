/**
 * Created by boss on 28 сентября.
 */

'use strict';

// В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.

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
            setTimeout(onReady, 1000);
        }
    };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.run(); // ошибка, кофеварка выключена!

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!