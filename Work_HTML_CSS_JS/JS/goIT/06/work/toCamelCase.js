/**
 * Created by boss on 11 августа.
 */
// Напишите функцию toCamelCase(str), которая преобразует
// строки вида «my-short-string» в «myShortString».
// То есть, дефисы удаляются, а все слова после них получают
// заглавную букву.
myStr ="list-style-image";
function toCamelCase(str){
    var myNewMass = str.split("-");
    for(var i=1; i < myNewMass.length; i++){
        myNewMass[i] = myNewMass[i].charAt(0).toUpperCase() + myNewMass[i].slice(1);
    }
    return myNewMass.join("");

}

console.log(toCamelCase(myStr));