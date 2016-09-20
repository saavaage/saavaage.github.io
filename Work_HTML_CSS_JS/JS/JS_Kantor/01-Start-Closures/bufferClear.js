/**
 * Created by boss on 19 сентября.
 */
'use strict';
/*
 Добавьте буферу из решения задачи buffer метод buffer.clear(),
 который будет очищать текущее содержимое буфера
 */

function makeBuffer() {

 var bufferHolder ='';

    function buffer() {
        if(arguments.length > 0){
            return bufferHolder += arguments[0];
        }else{
            return bufferHolder;
        }
    }

    buffer.clear = function(){
        bufferHolder = '';
    };

    return buffer;
}

var buffer = makeBuffer();


buffer("Тест");
buffer(" тебя не съест ");
console.log(buffer()); // Тест тебя не съест

buffer.clear();
console.log(buffer()); // ""