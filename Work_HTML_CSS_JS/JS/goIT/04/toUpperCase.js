/**
 * Created by boss on 08 августа.
 */

function upperFirst(myString){
    var myFirst = myString.charAt(0);
    return myFirst.toUpperCase() + myString.slice(1);
}

console.log(upperFirst("witch"));

// версия 2
function upperFirst2(myString){

    return myString[0].toUpperCase() + myString.substring(1);

}

console.log(upperFirst2("butcher"));