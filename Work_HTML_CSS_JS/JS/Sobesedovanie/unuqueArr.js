/**
 * Created by boss on 14 июля.
 */

// сформировать массив с уникальными элементами, расположенными в порядке частоты повторения (от мах к мин)

var myArr = ['div', 'div', 'div', 'div', 'img', 'img', 'footer', 'header', 'main', 'aside', 'aside', 'tab', 'tab_item', 'tab_item', 'tab_item', 'tab_item', 'tab_item', 'tab_item',];

// версия 1
function uniqueArr(arr) {
    var myObj = {};
    arr.forEach(function (elem) {
        if (!myObj[elem]) {
            myObj[elem] = 1;
        } else {
            myObj[elem] += 1;
        }
    })
    var result = [];
    for (item in myObj) {
        result.push(item);
    }
    result.sort(function (a, b) {
        return myObj[b] - myObj[a];
    })
    return result;
}

console.log(uniqueArr(myArr));
