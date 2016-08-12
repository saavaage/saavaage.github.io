/**
 * Created by boss on 12 августа.
 */
var arr = [1, -1, 2, 0, -2, 3];

var filterArr = arr.filter(function(number) {
    return number >= -1 && number < 2;
});
console.log( filterArr ); // 1, -1, 0