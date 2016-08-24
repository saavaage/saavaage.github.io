/**
 * Created by boss on 18 августа.
 */
// Напишите функцию которая принимает бинарную
// функцию и вызывает её с 2-умя аргументами.


function applyf(binary) {
    return function(x) {
        return function(y) {
            return binary(x, y);
        }
    }
}

function mul(a,b){
    return a*b;
}
console.log(applyf(mul)(3)(4)); //12