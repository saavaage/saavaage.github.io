/**
 * Created by boss on 27 сентября.
 */

'use strict';

/*Напишите конструктор User для создания объектов:

 С приватными свойствами имя firstName и фамилия surname.
 С сеттерами для этих свойств.
 С геттером getFullName(), который возвращает полное имя.
 */

function User() {
    var firstname, surname;
    this.setFirstName = function (name) {
        firstname = name;
    };
    this.setSurname = function (newSurname) {
        surname = newSurname;
    };
    this.getFullName = function(){
        return firstname + ' ' + surname;
    }
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

console.log(user.getFullName()); // Петя Иванов