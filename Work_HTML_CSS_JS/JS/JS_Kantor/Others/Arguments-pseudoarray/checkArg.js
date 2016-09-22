/**
 * Created by boss on 14 августа.
 */
// Как в функции отличить отсутствующий аргумент от undefined?


function f1(x) {
    console.log( arguments.length ? 1 : 0 );
}

f1(undefined);
f1();