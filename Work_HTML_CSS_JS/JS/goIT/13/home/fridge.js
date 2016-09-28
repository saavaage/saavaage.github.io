/**
 * Created by boss on 28 сентября.
 */

'use strict';
/*
 Создайте класс для холодильника Fridge(power), наследующий от Machine,
 с приватным свойством food и методами addFood(...), getFood():
 1. Приватное свойство food хранит массив еды.
 2. Публичный метод addFood(item) добавляет в массив food новую еду,
 доступен вызов с несколькими аргументами addFood(item1, item2...) для добавления
 нескольких элементов сразу.
 3. Если холодильник выключен, то добавить еду нельзя, будет ошибка.
 4. Максимальное количество еды ограничено power/100, где power – мощность холодильника,
 указывается в конструкторе. При попытке добавить больше – будет ошибка
 5. Публичный метод getFood() возвращает еду в виде массива, добавление или удаление
 элементов из которого не должно влиять на свойство food холодильника.
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
    this._food = [];

    this.addFood = function () {
        if (!this._enabled) {
            throw new Error('Холодильник выключен! Включите холодильник!');
        }
        if(arguments.length + this._food.length <= maxFood){
           var tempArr = [].slice.apply(arguments);
            this._food = this._food.concat( tempArr );
        }else{
            throw new Error('ошибка, слишком много еды');
        }
    };
    this.getFood = function () {
        return this._food.slice();
    };
}


// Код для проверки:
// var fridge = new Fridge(200);
// fridge.addFood("котлета"); // ошибка, холодильник выключен

// Ещё код для проверки:
// создать холодильник мощностью 500 (не более 5 еды)
// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "зелень");
// fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды
// console.log( fridge.getFood() );


// Холодос без ошибок:
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
console.log( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье