/*
Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
*/
/*
Сделайте три варианта решения:
1.С использованием цикла.
2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
3. С использованием формулы для суммы арифметической прогрессии.
*/

// версия 1 - цикл
function sumTo(n) {
sum = 0;
for(var i = 1; i <=n; i++){
sum += i;
}
return sum;
 }
console.log( sumTo(100) ); // 5050

// // версия 2 - рекурсия
function sumToRec(n) {
  return (n !=1)? n + sumToRec(n-1) : n;
 }
console.log( sumToRec(100) ); // 5050

// версия 3 - арифм прогрессия
function sumToArProg(n) {
  return (1+n)/2*n;
 }
console.log( sumToArProg(100) ); // 5050