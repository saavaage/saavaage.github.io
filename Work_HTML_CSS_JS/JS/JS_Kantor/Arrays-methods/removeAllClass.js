/**
 * Created by boss on 13 августа.
 */
// Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть
// P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:
var myObj = {
    className: 'open menu menu',
    clName: 'open menu'
};
function removeClass(obj, cls){

for(key in obj){
    var myArr = obj[key].split(' ');
    for(var i = 0; i < myArr.length; i++){
        if(myArr[i] == cls){
            myArr.splice(i,1);
            i--;
        }

    }
    obj[key] = myArr.join(' ');
}
console.log(obj);
}

removeClass(myObj, 'open'); 