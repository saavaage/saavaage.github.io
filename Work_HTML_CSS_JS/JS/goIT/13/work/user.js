/**
 * Created by boss on 28 сентября.
 */

'use strict';
/*
 Напишите конструктор User для создания объектов:
 • С приватными свойствами имя firstName и фамилия surname.
 • С сеттерами для этих свойств.
 • С геттером getFullName(), который возвращает полное имя.
 */
function User() {
    var firstName, surname;

    this.setFirstName = function (name) {
        firstName = name;
    };
    this.setSurname = function (newSurname) {
        surname = newSurname;
    };

    this.getFullName = function () {
        return firstName + ' ' + surname;
    }

}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");
console.log(user.getFullName()); // Петя Иванов

