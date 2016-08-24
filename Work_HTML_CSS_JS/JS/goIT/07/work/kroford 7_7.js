
/**
 * Created by boss on 18 августа.
 */

/*Напишите функцию которая принимает аргумент и
возвращает функцию которая возвращает этот
аргумент.
*/

var idf = identityf(3);

function identityf(value){
    return function(){
        return value;
    };

}


    console.log(idf()); // 3
