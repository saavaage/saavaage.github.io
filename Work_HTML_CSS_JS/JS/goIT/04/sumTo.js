/**
 * Created by boss on 08 августа.
 */
function sumTo(n){
    if(n !=1){
        return n + sumTo(n-1);
    }else{
        return n;
    }
}
console.log(sumTo(5));