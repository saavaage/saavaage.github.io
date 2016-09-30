/**
 * Created by boss on 30 сентября.
 */

'use strict';

/*
Есть реализация часиков, оформленная в виде одной функции-конструктора. У неё есть приватные
cвойства timer, template и метод render.
Задача:
переписать часы на прототипах. Приватные свойства и методы сделать защищёнными.
P.S. Часики тикают в браузерной консоли (надо открыть её, чтобы увидеть).
*/

function Clock(options) {

    this._template = options.template;
    this._timer;
}

Clock.prototype._render = function(){
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var min = date.getMinutes();
        if (min < 10) min = '0' + min;

        var sec = date.getSeconds();
        if (sec < 10) sec = '0' + sec;
        var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

        console.log(output);

}

Clock.prototype.stop = function() {
    clearInterval(this._timer);
};

Clock.prototype.start = function() {
    this._render();
    var self = this;
    this._timer = setInterval(
        function(){
            self._render()
        }, 1000);
};

var clock = new Clock({
    template: 'h:m:s'
});

clock.start();

