/**
 * Created by boss on 28 сентября.
 */

'use strict';
/*
Добавьте в холодильник методы:
1. Публичный метод filterFood(func), который возвращает всю еду,
для которой func(item) == true
2. Публичный метод removeFood(item), который удаляет еду item из холодильника.
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
    }

}



var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});

//
fridge.removeFood("нет такой еды"); // без эффекта
console.log( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
});

dietItems.forEach(function(item) {
    console.log( item.title ); // сок, зелень
    fridge.removeFood(item);
});

console.log( fridge.getFood().length ); // 2
