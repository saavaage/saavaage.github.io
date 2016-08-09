/**
 * Created by boss on 08 августа.
 */

function rand(min, max){

    return min + (Math.round(Math.random()*(max-min)));


}
console.log(rand(-1, 1));