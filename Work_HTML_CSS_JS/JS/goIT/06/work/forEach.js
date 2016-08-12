/**
 * Created by boss on 12 августа.
 */
var arr = ['Яблоко', 'Апельсин', 'Груша', 'Слива'];

arr.forEach(function(item, i, arr) {
    console.log( i + ': ' + item + ' Array: ' + arr );
});