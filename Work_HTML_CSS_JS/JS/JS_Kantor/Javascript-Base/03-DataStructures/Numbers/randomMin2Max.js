/**
 * Created by boss on 14 сентября.
 */
// Напишите код для генерации случайного числа от min до max, не включая max.
function randZeroMax(min, max) {
   return min + Math.random()*(max-min);

}

console.log(randZeroMax(-1, 1));