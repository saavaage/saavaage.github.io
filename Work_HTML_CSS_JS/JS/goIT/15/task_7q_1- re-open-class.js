/**
 * Created by boss on 02 октября.
 */

'use strict';
/*
Ruby and Javascript let you re-open classes so you can add
new functionalities to existing classes and objects.
To demonstrate this, you'll have to add a new method
(called my_new_method in Ruby or myNewMethod in JS)
into the String class that simply calls the upcase method (toUpperCase()
in Javascript), so that:
Ruby
"abc".my_new_method
JS
"abc".myNewMethod();
returns
"ABC"
*/
// версия 1 - мое решение
String.prototype.myNewMethod = function(){
    return this.toUpperCase();
};

// версия 2
String.prototype.myNewMethod = String.prototype.toUpperCase;

console.log("abc".myNewMethod());

