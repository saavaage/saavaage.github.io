/**
 * Created by boss on 23 августа.
 */
var myArr = [5, 4, 3, 2, 1];

var everyother = myArr.filter(function(x,i){
    return i%2==0;
});
console.log(everyother);