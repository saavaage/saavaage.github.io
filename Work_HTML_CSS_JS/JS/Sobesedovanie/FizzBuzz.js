/**
 * Created by boss on 12 августа.
 */
/*
Напишите программу, которая выводит через console.log
все числа от 1 до 100, с двумя исключениями. Для чисел,
    нацело делящихся на 3, она должна выводить ‘Fizz’, а
для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила
«FizzBuzz» для всех чисел, которые делятся и на 3, и на
5.
*/
// версия 1
for(var i =1;i<=100; i++){
    if(i%3 == 0 && i%5 != 0){
        console.log('Fizz');
    }else if(i%5 ==0 && i%3 !=0){
        console.log('Buzz');
    } else if(i%5 == 0 && i%3 ==0){
        console.log('BuzzFizz');
    }else{
        console.log(i);
    }
}

// версия 2
for (var n = 1; n <= 100; n++) {
    var output = "";
    if (n % 3 == 0)
        output += "Fizz";
    if (n % 5 == 0)
        output += "Buzz";
    console.log(output || n);
}