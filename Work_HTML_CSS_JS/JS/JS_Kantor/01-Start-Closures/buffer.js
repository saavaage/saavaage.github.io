/**
 * Created by boss on 19 сентября.
 */

'use strict';
/*
Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:

Создание объекта: var buffer = makeBuffer();.

Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value)
добавляет значение в некоторое внутреннее хранилище, а при вызове без аргументов buffer() –
возвращает его.

 Буфер должен преобразовывать все данные к строковому типу.
 Решение не должно использовать глобальные переменные.
*/

function makeBuffer() {
 var holder = '';
    return function() {
            if(arguments.length > 0){
                return holder += arguments[0];
            }else{
                return holder;
            }
        }
 }

var buffer = makeBuffer();

// добавить значения к буферу
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');
buffer(0);
buffer(1);
buffer(0);

// получить текущее значение
console.log( buffer() ); // Замыкания Использовать Нужно!
