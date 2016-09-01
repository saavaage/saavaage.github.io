/**
 * Created by boss on 01 сентября.
 */
// Задание 1 (Объект в массив)
/*
Есть объект из чисел, строк и прочих данных. Необходимо его превратить в массив состоящий только из чисел или строк.
Написать метод extractNumber или extractString, который будет возвращать массив.

    var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};

var ages = [20,30,40];
var names = ['Ivanov', 'Petrov', 'Sidorov'];
*/
// версия через функцию
var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov',
};

function extractNumber(obj){
        arr =[];
        for(it in obj){
            arr.push(obj[it]);
        }
        return arr.filter(function(a){return isNaN(a) !== true;});
}

console.log(extractNumber(obj));

// версия через метод
var myObj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 50,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov',
    extractString: function(){
        arr =[];
        for(it in this){
            arr.push(this[it]);
        }
        return arr.filter(function(a){return isNaN(a) === true;}).slice(0,-1);
    }
};

console.log(myObj.extractString());
