/**
 * Created by boss on 27 сентября.
 */

'use strict';
/*
Добавьте кофеварке геттер для приватного свойства power, чтобы внешний код мог узнать мощность
кофеварки.
Обратим внимание, что ситуация, когда у свойства power есть геттер, но нет сеттера – вполне
обычна.
Здесь это означает, что мощность power можно указать лишь при создании кофеварки и в дальнейшем
её можно прочитать, но нельзя изменить.
*/

function CoffeeMachine(power, capacity) {
    this.getPower = function(){
        return power;
    }

}

var myCofeeMachine = new CoffeeMachine(5000, 1000);

console.log(myCofeeMachine.getPower());