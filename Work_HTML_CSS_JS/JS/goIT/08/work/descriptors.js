/**
 * Created by boss on 26 августа.
 */
var user = {
    firstName: 'Вася',
    surname: 'Петров'};

Object.defineProperty(user, 'fullName', {
    get: function(){
        return this.firstName + ' ' + this.surname;
    },
     set: function(value){
        var split = value.split(' ');
         this.firstName = split[0];
         this.surname = split[1];
     }

    });

console.log(user.fullName); // Вася Петров (геттер)

user.fullName = 'Петя Иванов';
console.log( user.firstName ); // Петя  (поставил сеттер)
console.log( user.surname ); // Иванов (поставил сеттер)
