/**
 * Created by boss on 19 августа.
 */

function makeBuffer() {
    var text = '';

    function buffer(value) {
        if (arguments.length == 0) { // вызов без аргументов
            return text;
        }
        text += value;
    }

    buffer.clear = function(){
        text = "";
    }

    return buffer;
};

var buffer = makeBuffer();

// добавить значения к буферу
buffer(0);
buffer(20);
buffer(0);
buffer.clear(); // очиска буфера

// получить текущее значение
console.log( buffer());