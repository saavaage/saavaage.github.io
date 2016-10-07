/**
 * Created by boss on 03 октября.
 */

'use strict';
/*
 Define a class named MyClass inside a namespace MyNamespace.
 The class constructor should accept a single string argument.
 It should also have a function named sayHello that returns
 the string passed into the constructor.
 Example:

 var myObject = new MyNamespace.MyClass('Hello!');

 var phrase = myObject.sayHello(); // phrase should be 'Hello!'

 The interesting part is that MyClass should only be accessible via
 the namespace and should not define any extra global variables.
 Code should not redefine an existing namespace, but should also function
 if the namespace is not previously defined.
 */

// версия 1
var MyNamespace ={};
MyNamespace.MyClass = function(text){
this.sayHello = function(){
    return console.log(text);
}
};

var myObject = new MyNamespace.MyClass('Hello!');
var phrase = myObject.sayHello(); // phrase should be 'Hello!'

// версия 2
var MyNamespace1 ={};
MyNamespace1.MyClass1 = function(message) {
    return {
        sayHello1: function(){
            return console.log(message);
        }
    };
};

var myObject1 = new MyNamespace1.MyClass1('Hello!');
var phrase1 = myObject1.sayHello1(); // phrase should be 'Hello!'