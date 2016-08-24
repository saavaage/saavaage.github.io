/**
 * Created by boss on 25 августа.
 */
function mull(value1){
    return function(value2){
        return value1 * value2;
    }
}

function applyf(f){
    return f;

}

console.log(applyf(mull)(3)(4));