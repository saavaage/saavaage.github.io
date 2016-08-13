/**
 * Created by boss on 13 августа.
 */
/*
Напишите
функцию min, принимающую два аргумента, и
возвращающую минимальный из них.
*/

function min(a,b){
    if(a>b){
        return b;
    }else{
        return a;
    }
}



console.log(min(-10, -20));
