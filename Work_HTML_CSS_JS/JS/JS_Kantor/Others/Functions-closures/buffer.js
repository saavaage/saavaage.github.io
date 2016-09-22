/**
 * Created by boss on 19 августа.
 */
/*
Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:
Создание объекта: var buffer = makeBuffer();.
Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value)
добавляет значение в некоторое внутреннее хранилище, а при вызове без аргументов buffer() – возвращает его.
Буфер должен преобразовывать все данные к строковому типу.
Решение не должно использовать глобальные переменные.
*/
// версия 1
function makeBuffer() {
    var superBuffer = '';
    return function(value){
        if(arguments.length !== 0) {
            return superBuffer += value;
        }else{
            return superBuffer;
        }
    }
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer(0);
buffer(20);
buffer(0);

// получить текущее значение
console.log( buffer());


// версия 2
function makeBuffer1() {
    var text = '';

    return function(piece) {
        if (arguments.length == 0) { // вызов без аргументов
            return text;
        }
        text += piece;
    };
};

var buffer1 = makeBuffer1();

// добавить значения к буферу
buffer1(0);
buffer1(20);
buffer1(0);

// получить текущее значение
console.log( buffer1()); // Замыкания Использовать Нужно!
