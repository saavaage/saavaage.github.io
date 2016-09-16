/**
 * Created by boss on 16 сентября.
 */
// Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2.

var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}


function multiplyNumeric(obj) {

    for (var key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
    return obj;
}

console.log(multiplyNumeric(menu));




