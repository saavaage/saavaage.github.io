/**
 * Created by boss on 10 июля.
 */
// return a function that returns n

function always(n) {

    return function() { return n; };
}

var wrap = always(1);

console.log(wrap());
