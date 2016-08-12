/**
 * Created by boss on 12 августа.
 */
/*
 Напишите программу, создающую строку, содержащую
 решётку 8х8, в которой линии разделяются символами
 новой строки. На каждой позиции либо пробел, либо #. В
 результате должна получиться шахматная доска.
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 */
// версия 1
var chessFigure = '';
var row = 8;

for (var i = 0; i < row; i++) {
    if (i%2 !== 0) {
        for(var j = 0; j < row/2; j++) {
            chessFigure += '#' + ' ';
        }
      } else {
        for(var j = 0; j < row/2; j++) {
            chessFigure += ' ' + '#';
        }
    }
    console.log(chessFigure);
    chessFigure ='';
}

// версия 2
var size = 8;
var board = "";

for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
            board += "#";
        else
            board += " ";
    }
    board += "\n";
}
console.log(board);
