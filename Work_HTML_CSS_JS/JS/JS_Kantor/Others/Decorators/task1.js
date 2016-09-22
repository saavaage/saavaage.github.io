/**
 * Created by boss on 30 августа.
 */
/*Создайте декоратор makeLogging(f, log), который берет функцию f и массив log.
  Он должен возвращать обёртку вокруг f, которая при каждом вызове записывает
  («логирует») аргументы в log, а затем передает вызов в f.
   В этой задаче можно считать, что у функции f ровно один аргумент.
   Работать должно так:*/

function work(a) {
        return a*a;
    }

var log = [];

function makeLogging(f, log) {
    return function(myArg) {

       log.push(myArg);

        var result = f.call(this, myArg);

        return console.log(result);
    }
}

work = makeLogging(work, log);

work(3); // 1, добавлено в log
work(5); // 5, добавлено в log



for (var i = 0; i < log.length; i++) {
    console.log( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}
