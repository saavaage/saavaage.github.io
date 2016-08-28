/**
 * Created by boss on 27 августа.
 */
function Calculator() {

    this.calculate = function (str) {
        var arr = str.split(' ');
        if (arr[1] === '+') {
            return sum(+arr[0], +arr[2]);
        } else if (arr[1] === '-') {
            return sub(+arr[0], +arr[2]);
        } else if(arr[1] === this.name) {
            return this.func(+arr[0], +arr[2]);
        }
    };

    function sum(a, b) {
        return a + b;
    };

    function sub(a, b) {
        return a - b;
    };

    this.addMethod = function(name, func) {
        this.name = name;
        this.func = func;
    }
}

var calc = new Calculator();
console.log(calc.calculate('33 - 10')); // 10
//

var powerCalc = new Calculator();
powerCalc.addMethod('**', function (a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
console.log(result); // 8

var powerCalc1 = new Calculator();
powerCalc1.addMethod('*', function(a, b) {
    return a * b;
});
var result = powerCalc1.calculate('2 * 3');
console.log(result); // 6


var powerCalc2 = new Calculator();
powerCalc2.addMethod('/', function(a, b) {
    return a / b;
});
var result = powerCalc2.calculate('2 / 3');
console.log(result); // .666(6)



