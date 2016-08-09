/**
 * Created by boss on 09 августа.
 */
var salary = {
    'junior': 1000,
    'middle': 2500,
    'senior': 3500,
    'lead': 5000
};

function totalSum(obj) {
var total =0;
    for(var item in obj){
        total += obj[item];
    }
    return total;
}
console.log(totalSum(salary));