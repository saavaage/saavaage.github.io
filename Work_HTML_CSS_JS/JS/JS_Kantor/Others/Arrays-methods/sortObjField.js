/**
 * Created by boss on 13 августа.
 */
// Напишите код, который отсортирует массив объектов people по полю age.
// Выведите список имён в массиве после сортировки.

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];
people.sort(function(a,b){
    return a.age - b.age;
})
for(var i =0; i< people.length; i++){
    console.log(people[i].name);
}

