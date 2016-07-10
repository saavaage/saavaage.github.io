/**
 * Created by boss on 10 июля.
 */
// версия 1
function isEmpty1(obj) {
    var counter = 0;
    for (var item in obj) {
        counter++;
    }
    return (counter === 0) ? 'true' : 'false';

}


// версия 2
function isEmpty2(obj) {

    for(var item in obj) {
        return false;
    }
    return true;

}


var toDoList = {};
toDoList.name = 'Serj';
toDoList.age = 30;
delete toDoList.age;
delete toDoList.name;


console.log(isEmpty1(toDoList));
console.log(isEmpty2(toDoList));