/**
 * Created by boss on 13 августа.
 */
// Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.

var arr = [1, 2, 3, 4, 5, 100];

arr.sort(function(){
    return .5- Math.random();
})

console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]