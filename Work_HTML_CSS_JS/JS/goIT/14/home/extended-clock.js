/**
 * Created by boss on 30 сентября.
 */

'use strict';

/*
Есть реализация часиков на прототипах. Создайте класс, расширяющий её,
добавляющий поддержку параметра precision, который будет задавать частоту
тика в setInterval. Значение по умолчанию: 1000.

1. Для этого класс Clock надо унаследовать. Пишите ваш новый код в файле extended-clock.js.
2. Исходный класс Clock менять нельзя.
3. Пусть конструктор потомка вызывает конструктор родителя. Это позволит избежать проблем
при расширении Clock новыми опциями.

P.S. Часики тикают в браузерной консоли (надо открыть её, чтобы увидеть).
 */
function Clock(options) {
    this._template = options.template;
}

Clock.prototype._render = function render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
};

Clock.prototype.stop = function() {
    clearInterval(this._timer);
};

Clock.prototype.start = function() {
    this._render();
    var self = this;
    this._timer = setInterval(function() {
        self._render();
    }, 1000);
};

// создать класс ExtendedClock с подтягиванием данных из прототипа Clock
function ExtendedClock(options){
    Clock.apply(this, arguments);
    this._precision = options.precision;

}
// привязка прототипа родителя к ExtendedClock
ExtendedClock.prototype = Object.create(Clock.prototype);
ExtendedClock.prototype.constructor = ExtendedClock;

// задать для конструктора ExtendedClock расширенный метод
ExtendedClock.prototype.start = function(){
    this._render();
    var self = this;
    this._timer = setInterval(function() {
        self._render();
    }, this._precision);
};

// создать новые часы с требуемыми параметрами
var lowResolutionClock = new ExtendedClock({
    template: 'h:m:s',
    precision: 10000
});

lowResolutionClock.start();