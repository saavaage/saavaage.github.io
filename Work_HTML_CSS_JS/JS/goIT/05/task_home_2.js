/**
 * Created by boss on 10 июля.
 */
// ## Задание 2 (Изменение численных свойств)
//
// Напишите функцию `multiplyNumeric` которая принимает на вход объект и возвращает объект
// в котором все числовые значения у свойств умножены на `2`.
//     ```js
// // Before
// var image = {
//     width: 100,
//     height: 400,
//     title: 'Cool image'
// };
//
// multiplyNumeric(image);
//
// // after
// image = {
//     width: 200,
//     height: 800,
//     title: 'Cool image'
// };
// ```
function multiplyNumeric(obj) {
    for (var item in obj) {
        if (!isNaN(parseFloat(obj[item])) && isFinite(obj[item])) {
            
            obj[item] *=  2;
        }
    }
    return obj;
}

var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

console.log(multiplyNumeric(image));