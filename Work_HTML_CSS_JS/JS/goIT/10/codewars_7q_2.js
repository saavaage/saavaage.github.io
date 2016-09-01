/**
 * Created by boss on 01 сентября.
 */
// Given a string, swap the case for each of the letters.
//     e.g. CodEwArs --> cODeWaRS

// версия 1
var myString = 'CodEwArs';

function getSwap(str){

    var arr = str.split('');
    var newStr ='';

    arr.forEach(function(item){
       if(item === item.toUpperCase()){
           newStr += item.toLowerCase();
       } else{
           newStr += item.toUpperCase();
       }
    });
    return newStr;
}

console.log(getSwap(myString));

// версия 2
var myStr = 'CodEwArs';

function swap(str){
    var arr = str.split('');

   var newArr =  arr.map(function(item){
      return (item === item.toUpperCase())? item.toLowerCase() : item.toUpperCase();
   });
    return newArr.join('');
}

console.log(swap(myStr));