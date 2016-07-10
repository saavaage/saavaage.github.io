/**
 * Created by boss on 10 июля.
 */
var salaries = {
    'junior': 1000,
    'middle': 2500,
    'senior': 3500,
    'lead': 5000
};

function money(obj) {
    var summ = 0;
    for (var item in obj) {
        summ += obj[item];
    }
    return summ;
}

console.log(money(salaries));