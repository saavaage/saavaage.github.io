/**
 * Created by boss on 11 июля.
 */
/*
Напишите функцию toCamelCase(str), которая преобразует
строки вида «my-short-string» в «myShortString».
То есть, дефисы удаляются, а все слова после них получают
заглавную букву.
    Например:
toCamelCase('background-color'); // 'backgroundColor';
toCamelCase('list-style-image'); // 'listStyleImage';
toCamelCase('-webkit-transition'); // 'WebkitTransition';
P.S. Вам пригодятся методы строк charAt, split и toUpperCase.
*/
//версия1
function toCamelCase(str){
    var myArr = str.split('-');
    for(var i=1; i<myArr.length; i++){
        myArr[i] = myArr[i].charAt(0).toUpperCase()+ myArr[i].substring(1);
    }

return myArr.join('');
}
console.log(toCamelCase('-list-style-image'));

//версия 2
function toCamelCase1(str){
    var myArr = str.split('-');
    for(var i=1; i<myArr.length; i++){
        myArr[i] = myArr[i].charAt(0).toUpperCase()+ myArr[i].slice(1);
    }

    return myArr.join('');
}
console.log(toCamelCase1('sheet-style-image'));