/**
 * Created by boss on 10 июля.
 */
var person = {};
person.name = 'Sergei';
person.surname ='Petrov';
person.name = 'Andrei';
person.age = 30;
delete person.name;
console.log(person);