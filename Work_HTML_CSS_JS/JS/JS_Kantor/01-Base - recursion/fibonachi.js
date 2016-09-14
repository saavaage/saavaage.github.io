/*
Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. То есть, следующее число получается как
сумма двух предыдущих.
Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.
*/
// версия 1 - цикл
function fib(n) {
    var number = 1;
    if (n > 2) {
        var a = b = 1;
        for (var i = 3; i <= n; i++) {
            number = a + b;
            a = b;
            b = number;
        }
    }
    return number;
}

console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(4)); // 2
console.log(fib(6)); // 5
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

// версия 2 - рекурсия
function fb(n) {
    return (n > 1) ? fb(n - 1) + fb(n - 2) : n;
}

console.log(fb(1)); // 1
console.log(fb(2)); // 1
console.log(fb(4)); // 2
console.log(fb(6)); // 5
console.log(fb(7)); // 13
console.log(fib(77)); // 5527939700884757
