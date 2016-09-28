/**
 * Created by boss on 28 сентября.
 */

'use strict';
/*
Обычно когда кофе готов, мы хотим что-то сделать, например выпить его.
Сейчас при готовности срабатывает функция onReady, но она жёстко задана в коде
Создайте сеттер setOnReady, чтобы код снаружи мог назначить свой onReady
P.S. Значение onReady по умолчанию должно быть таким же, как и раньше.
P.P.S. Постарайтесь сделать так, чтобы setOnReady можно было вызвать не только до,
но и после запуска кофеварки, то есть чтобы функцию onReady можно было изменить в
любой момент до её срабатывания.
*/


function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };

    this.getWaterAmount = function(amount) {
        return waterAmount;
    };

    function onReady() {
        console.log( 'Кофе готов!' );
    }

    this.setOnReady = function(f){
      onReady = f;
    };

    this.run = function() {
        setTimeout(function(){
            onReady();}, getTimeToBoil());
    };

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.run();

coffeeMachine.setOnReady(function() {
    var amount = coffeeMachine.getWaterAmount();
    console.log( 'Готов кофе: ' + amount + 'мл' ); // Готов кофе: 150 мл
});