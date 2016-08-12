/**
 * Created by boss on 12 августа.
 */
/*
Напишите цикл, который за 7 вызовов console.log
выводит такой треугольник:
#
##
###
####
#####
######
#######
*/

// версия 1
var some = '';
var someFigure ='#';
do{
    some += someFigure;
    console.log(some);
} while(some.length <7);

// версия 2
var figure ='';
for(var i =0; i<7; i++){
    var figure = figure + '#';
    console.log(figure);
}

// версия 3
for (var line = "#"; line.length < 8; line += "#") {
    console.log(line);
}