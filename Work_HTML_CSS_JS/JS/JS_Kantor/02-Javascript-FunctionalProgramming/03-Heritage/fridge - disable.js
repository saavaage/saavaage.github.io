/**
 * Created by boss on 28 сентября.
 */

'use strict';
/*
 Переопределите метод disable холодильника,
 чтобы при наличии в нём еды он выдавал ошибку.
 */



function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function () {
        self._enabled = true;
    };

    this.disable = function () {
        self._enabled = false;
    };
}

function Fridge(power) {
    Machine.apply(this, arguments);
    var maxFood = Math.floor(this._power / 100);
    var food = [];

    this.addFood = function () {
        if (!this._enabled) {
            throw new Error('Холодильник выключен! Включите холодильник!');
        }
        if(arguments.length + food.length <= maxFood){
            var tempArr = [].slice.apply(arguments);
            food = food.concat( tempArr );
        }else{
            throw new Error('ошибка, слишком много еды');
        }
    };
    this.getFood = function () {
        return food.slice();
    };

    this.filterFood = function(func){
        return food.filter(func);
    };

    this.removeFood = function(item){
        for(var i = 0; i < food.length; i++){
            if(food[i] == item){
                food.splice(i--, 1);
            }
        }
    };

    var parentDisable = this.disable;
    this.disable = function() {
       if(food.length){
           throw new Error('ошибка, в холодильнике есть еда');
       }
        parentDisable();

    }

}



var fridge = new Fridge(500);
fridge.enable();
console.log(fridge._enabled);
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда
console.log(fridge._enabled);
