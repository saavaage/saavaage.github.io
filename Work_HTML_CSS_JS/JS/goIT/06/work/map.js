/**
 * Created by boss on 12 августа.
 */
var names = ['HTML', 'CSS', 'JavaScript'];

var nameNew = names.map(function(name) {
    if(name == 'CSS'){
     return 'PHP';
    }else{
        return name;
    }
});

console.log( nameNew );