/**
 * Created by boss on 19 августа.
 */
// We want to create a function, which returns an array of functions, which return their index in the array.


function createFunctions(n) {
    var callbacks = [];

    for (var i=0; i<n; i++) {
        callbacks[i]=function(j) {
            return function(){ return j };
        }(i);
    }

    return callbacks;
}

console.log(createFunctions(3));