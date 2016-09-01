/**
 * Created by boss on 01 сентября.
 */
// Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function getType(){
    var typesArg = [].slice.call(arguments);

    typesArg.forEach(function(item){
        console.log(typeof item);
    });
}

getType('fuck',23, [1,2,3], {name: 'John', age: 45}, function(){}, true);