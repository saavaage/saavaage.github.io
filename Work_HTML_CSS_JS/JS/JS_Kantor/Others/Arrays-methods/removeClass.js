/**
 * Created by boss on 13 августа.
 */
// Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть
// P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:
var myObj = {
    className: 'open menu menu',
};
function removeClass(obj, cls) {
    if (obj.className) {
        var myArr = obj.className.split(' ');
        for (var i = 0; i < myArr.length; i++) {
            if (myArr[i] == cls) {
                myArr.splice(i, 1);
                i--;
            }
        }
        obj.className = myArr.join(' ');
    }
    console.log(obj);
}

removeClass(myObj, 'open');