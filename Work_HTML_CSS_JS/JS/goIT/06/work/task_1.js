/**
 * Created by boss on 11 июля.
 */
// В объекте есть свойство className, которое содержит
// список «классов» – слов, разделенных пробелом.
//     Создайте функцию addClass(obj, cls), которая добавляет в
// список класс cls, но только если его там еще нет.
//     Ваша функция не должна добавлять лишних пробелов.
//     var obj = {
//     className: 'open menu'
// };
// addClass(obj, 'new'); // obj.className='open menu new'
// addClass(obj, 'open'); // без изменений
// addClass(obj, 'me'); // obj.className='open menu new me'
// console.log( obj.className ); // "open menu new me"

var myObj = {
    className: 'open menu start enter'
};
//вариант 1
function addClass(obj, cls){
    var myString;
    //вариант старый получение строки
    // for(var item in obj){
    //     myString = obj[item];
    // }
    // вариант новый получения строки
    var keys = Object.keys(obj);
    myString = obj[keys[0]];

    if(myString.indexOf(cls) == -1){
        myString += ' '+ cls;
        obj.className = myString;
    }
return obj;
}
console.log(addClass(myObj, 'fuck'));
console.log(addClass(myObj, 'fuck1'));


// вариант 2
var myObj1 = {
    className: 'open new memory space'
};
function addClass1(obj, cls){

    var keys = Object.keys(obj);
    myMass = obj[keys[0]].split(' ');

    if(myMass.indexOf(cls) == -1){
       myMass.push(cls);
        obj[keys[0]] = myMass.join(' ');

    }
    return obj;
}
console.log(addClass1(myObj1, 'good'));
console.log(addClass1(myObj1, 'good1'));