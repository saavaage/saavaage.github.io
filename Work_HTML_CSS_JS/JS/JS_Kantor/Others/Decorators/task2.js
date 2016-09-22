/**
 * Created by boss on 30 августа.
 */
/*Создайте декоратор makeLogging(func, log), для функции func возвращающий обёртку, которая при каждом вызове
добавляет её аргументы в массив log.
Условие аналогично задаче Логирующий декоратор (1 аргумент), но допускается func с любым набором аргументов.
Работать должно так:*/

function work(a, b) {
    console.log( a + b ); // work - произвольная функция
}

// версия 1
var log = [];

function makeLogging(f, log) {
    return function(){
        log.push([].slice.call(arguments));
        return f.apply(this, arguments);
    }
}
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
    var args = log[i]; // массив из аргументов i-го вызова
    console.log( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}

// версия 2

var log2 = [];

function makeLogging2(f, log) {
    return function(){
        var join = [].join;
        log2.push(join.call(arguments, ','));
        return f.apply(this, arguments);
    }
}

work2 = makeLogging2(work, log);

work2(10, 2); // 3
work2(4, 500); // 9

for (var i = 0; i < log2.length; i++) {
    var args = log2[i]; // массив из аргументов i-го вызова
    console.log( 'Лог:' + args); //  Альтернатива
}