/**
 * Created by boss on 14 августа.
 */

// Код ниже получает из массива строк новый массив, содержащий их длины:

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
    arrLength[i] = arr[i].length;
}

console.log( arrLength ); // 4,5,2,5
// Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function(name){
    return name.length;

})


console.log( arrLength ); // 4,5,2,5