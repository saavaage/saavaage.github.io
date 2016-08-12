/**
 * Created by boss on 11 августа.
 //  */
// В объекте есть свойство className, которое содержит
// список «классов» – слов, разделенных пробелом.
//     Создайте функцию addClass(obj, cls), которая добавляет в
// список класс cls, но только если его там еще нет.
//     Ваша функция не должна добавлять лишних пробелов.

var obj = {
    className: 'open menu new'
};

function addClass(obj, cls) {

    var objMass = obj.className.split(' ');

    if (objMass.indexOf(cls) == -1) {
        objMass.push(cls);
        obj.className = objMass.join(" ");
    }
return obj;

}


console.log(addClass(obj, 'fuck'));
