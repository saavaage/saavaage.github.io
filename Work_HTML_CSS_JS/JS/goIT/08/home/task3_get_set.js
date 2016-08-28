/**
 * Created by boss on 28 августа.
 */
function User(fullName) {
    this.fullName = fullName;
}

var vasya = new User('Александр Пушкин');

Object.defineProperty(vasya, 'firstName', {
    get: function(){
        return this.fullName.split(' ')[0];
    },
    set: function(value){
        this.fullName = this.fullName.replace(this.fullName.split(' ')[0], value);
    }
});

Object.defineProperty(vasya, 'lastName', {
    get: function(){
        return this.fullName.split(' ')[1];
    },
    set: function (value){
        this.fullName = this.fullName.replace(this.fullName.split(' ')[1], value);
    }
});

// чтение firstName/lastName
console.log(vasya.firstName); // Александр
console.log(vasya.lastName); // Пушкин

// запись в lastName
vasya.lastName = 'Толстой';
vasya.firstName = 'Лев';
console.log(vasya.fullName); // Александр Толстой