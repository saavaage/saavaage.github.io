/**
 * Created by boss on 03 сентября.
 */
/*
 Let's build a calculator that can calculate the average for an arbitrary number of arguments.
 The test expects you to provide a Calculator object with an average method:
 Calculator.average()
 The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.
 It expects Calculator.average(3,4,5) to return 4.
 */
// версия 1
var Calculator = {
    average: function () {
        if (arguments.length > 0) {
            for (var i = 0, sum = 0; i < arguments.length; i++) {
                sum += arguments[i];
            }
            return sum / arguments.length;
        } else {
            return 0
        }
    }
};

console.log(Calculator.average(3,4,5)); // 4

// версия 2
var Calculator1 = {
    average: function() {
        var sum = [].reduce.call(arguments, function(t, n) { return t + n; },0);
        return sum === 0 ? 0 : sum / arguments.length;
    }
};
console.log(Calculator1.average()); // 4