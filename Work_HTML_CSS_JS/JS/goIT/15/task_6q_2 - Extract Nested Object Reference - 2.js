/**
 * Created by boss on 04 октября.
 */

'use strict';

// You are given a complex object that has many deeply nested variables.
// You don't want to go the usual if obj.property == null route.
// Create a prototype method that given a nested path, either return
// the value or undefined.


var obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};

// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
    var arr = string.split('.');
    return arr.reduce(function(pv, cv){
        return (pv) ? pv[cv] : pv;
    }, this);
}


console.log(obj.hash('person.name')); // 'joe'
console.log(obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
console.log(obj.hash('person.game.home')); // undefined
console.log(obj.hash('person.animal.pet.needNoseAntEater')); // undefined