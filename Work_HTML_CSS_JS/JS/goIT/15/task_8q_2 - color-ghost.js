/**
 * Created by boss on 02 октября.
 */

'use strict';
/*
 Color Ghost
 Create a class Ghost
 Ghost objects are instantiated without any arguments.
 Ghost objects are given a random color attribute of
 white" or "yellow" or "purple" or "red" when instantiated

 ghost = new Ghost();
 ghost.color //=> "white" or "yellow" or "purple" or "red"
 c# Ghost ghost = new Gost(); ghost.GetColor(); // => "white" or "yellow" or "purple" or "red"*/

// версия 1
// var Ghost = function () {
//     var colors = ['white', 'yellow', 'purple', 'red'];
//     var func = colors.sort(function () {
//         return (Math.random() > .5) ? 1 : -1;
//     });
//     this.color = func[0];
// };

// версия 2
var Ghost = function() {
    var arr = ["white","yellow","purple","red"];
    this.color = arr[[Math.floor(Math.random() * arr.length)]];
};

var ghost = new Ghost();
console.log(ghost.color); //=> "white" or "yellow" or "purple" or "red"
