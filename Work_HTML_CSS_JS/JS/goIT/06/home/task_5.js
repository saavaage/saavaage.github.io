/**
 * Created by boss on 12 июля.
 */
/*
Палиндром - это строка которая читается с обоих сторон одинаково.
Например: Анна, оно, А роза упала на лапу Азора.
Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости от того
является ли строка палиндромом или нет.

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
*/
var myString = 'А роза упала на лапу Азора';
function isPal(string){

    var myArr = string.toLowerCase().split('');

for (var i =0; i<myArr.length; i++){
    if(myArr[i] === ' '){
        myArr.splice(i,1);
        i--;
    }
}
    if(myArr.join() === myArr.reverse().join()){
        return true;
    }else{
        return false;
    }

}

console.log(isPal(myString));