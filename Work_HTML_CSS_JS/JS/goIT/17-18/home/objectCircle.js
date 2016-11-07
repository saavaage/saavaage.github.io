/**
 * Created by boss on 12 октября.
 */

var data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }
    }
};

function createTreeText(obj) { // отдельная рекурсивная функция
    var li = '';
    for (var key in obj) {
        li += '<li>' + key + createTreeText(obj[key]) + '</li>';
        console.log(li);
    }
    if (li) {
        var ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
}

console.log(createTreeText(data));
