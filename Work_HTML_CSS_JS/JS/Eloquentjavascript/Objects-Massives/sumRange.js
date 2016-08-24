/**
 * Created by boss on 16 августа.
 */
function range(a, b, j){
    var myArr = [];
    if(arguments.length == 2){
        for(var i= a; i <= b; i++){
            myArr.push(i);
        }
    }else if(j>=0){
    for(var k= a; k <= b; k+=j) {
        myArr.push(k);
    }
    }else{
        for(var n= a; n >= b; n+=j) {
            myArr.push(n);
        }
        }
    return myArr;
}

function sum(myArr){
    var total = 0;
    for(var i = 0; i < myArr.length; i++){
        total +=myArr[i];
    }
return total;
}

console.log(sum(range(5, 2, -1)));