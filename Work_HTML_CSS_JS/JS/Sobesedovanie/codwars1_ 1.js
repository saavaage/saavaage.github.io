/**
 * Created by boss on 19 августа.
 */
// We want to create a function, which returns an array of functions, which return their index in the array.


function createFunctions(n) {
    var callbacks = [];

    for (var i=0; i<n; i++) {
        (function(i){
            callbacks.push(function () {
                return i;
            });
        }(i))
    }
    return callbacks;
}

var CallbacksArr = createFunctions(5);


console.log(CallbacksArr[0]());
console.log(CallbacksArr[1]());
console.log(CallbacksArr[2]());
console.log(CallbacksArr[3]());
console.log(CallbacksArr[4]());