/**
 * Created by boss on 22 сентября.
 */

'use strict';

/*
Создайте декоратор makeLogging(f, log), который берет функцию f и массив log.
Он должен возвращать обёртку вокруг f, которая при каждом вызове
 записывает («логирует») аргументы в log, а затем передает вызов в f.
В этой задаче можно считать, что у функции f ровно один аргумент
*/

function work(a) {
    /* ... */ // work - произвольная функция, один аргумент
}

function makeLogging(f, log) {
    return function(){
        log.push(arguments[0]);
        return f.call(this, arguments[0]);
    }

}

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
    console.log( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}