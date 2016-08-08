/*
 У объекта есть свойство className, которое хранит список css класов – слов, разделенных пробелами:

 var obj = {
 className: 'open menu'
 };
 Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

 removeClass(obj, 'open'); // obj.className='menu'
 removeClass(obj, 'blabla'); // без изменений
 P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

 obj = {
 className: 'my menu menu'
 };

 removeClass(obj, 'menu');

 console.log( obj.className ); // 'my'
 Лишних пробелов после функции образовываться не должно.
 */
// версия 1
var myObj = {
    className: 'hide open hide menu hide hide',
    classItem: 'hide open hide menu hide hide'
};

function removeClass(obj, cls) {

    if (obj.className) {
        var myArr = obj.className.split(' ');
        for (var i = 0; i < myArr.length; i++) {
            if (myArr[i] === cls) {
                myArr.splice(i, 1);
                i--;
            }
        }
        return obj.className = myArr.join(' ');
    } else {
        return 'Class has not been found!'
    }
}
console.log(removeClass(myObj, 'hide'));