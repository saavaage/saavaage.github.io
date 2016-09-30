/**
 * Created by boss on 30 сентября.
 */

'use strict';

/*
Есть класс Menu. У него может быть два состояния: открыто STATE_OPEN и закрыто STATE_CLOSED.
Создайте наследника AnimatingMenu, который добавляет третье состояние STATE_ANIMATING.
1.При вызове open() состояние меняется на STATE_ANIMATING, а через 1 секунду, по таймеру,
открытие завершается вызовом open() родителя.
2.Вызов close() при необходимости отменяет таймер анимации (назначаемый в open) и передаёт
вызов родительскому close.
3.Метод showState для нового состояния выводит "анимация", для остальных – полагается на родителя.
*/

function Menu(state) {
    this._state = state || Menu.STATE_CLOSED;
};

Menu.STATE_OPEN = 1;
Menu.STATE_CLOSED = 0;

Menu.prototype.open = function() {
    this._state = Menu.STATE_OPEN;
};

Menu.prototype.close = function() {
    this._state = Menu.STATE_CLOSED;
};

Menu.prototype._stateAsString = function() {
    switch (this._state) {
        case Menu.STATE_OPEN:
            return 'открыто';

        case Menu.STATE_CLOSED:
            return 'закрыто';
    }
};

Menu.prototype.showState = function() {
    console.log(this._stateAsString());
};

// новый код ---------------------------------------------
function AnimatingMenu(){
  Menu.apply(this, arguments);
    this._timerId =0;
}

AnimatingMenu.prototype = Object.create(Menu.prototype);
AnimatingMenu.prototype.constructor = AnimatingMenu;

AnimatingMenu.STATE_ANIMATING = 2;

AnimatingMenu.prototype.open = function(){
    this._state = AnimatingMenu.STATE_ANIMATING;
    var self = this;
    this._timerId = setTimeout(function () {
        Menu.prototype.open.apply(self);
    }, 1000);
};

AnimatingMenu.prototype.close = function(){
   if(this._timerId > 0){
       clearTimeout(this._timerId);
   }
    Menu.prototype.close.apply(this);
};

AnimatingMenu.prototype.showState = function() {
    if(this._state == AnimatingMenu.STATE_ANIMATING){
        console.log('Анимация')
    } else{
        console.log(Menu.prototype._stateAsString.apply(this));
    }
};

// использование.. -----------------------------------------
var menu = new AnimatingMenu();

menu.showState(); // закрыто

menu.open();
menu.showState(); // анимация

setTimeout(function() {
    menu.showState(); // открыто

    menu.close();
    menu.showState(); // закрыто (закрытие без анимации)
}, 1000);