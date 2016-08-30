/**
 * Created by boss on 29 августа.
 */
var user = {
    firstName: "Вася",
    sayHi: function() {
        console.log( this.firstName );
    }
};

setTimeout(user.sayHi, 1000); // undefined (не Вася!)
setTimeout(user.sayHi(), 1000); // Вася!

//////////////////////////////////////////////////////////

var user1 = {
    firstName: "Вася",
    sayHi: function(who) {
        console.log( this.firstName + ": Привет, " + who );
    }
};

setTimeout(function() {
    user1.sayHi("Петя"); // Вася: Привет, Петя
}, 1000);


////////////ИСПОЛЬЗОВАНИЕ BIND///////////////////////
var user2 = {
    firstName: "Вася",
    sayHi: function() {
        console.log( this.firstName );
    }
};

setTimeout(user2.sayHi.bind(user2), 1000); // аналог через встроенный метод
