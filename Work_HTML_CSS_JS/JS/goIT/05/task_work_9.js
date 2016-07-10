/**
 * Created by boss on 10 июля.
 // //  */
// Создайте фунцию filterRange(arr, a, b), которая принимает
// массив чисел arr и возвращает новый массив, который
// содержит только числа из arr из диапазона от a до b.
//     То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//     Функция не должна менять arr.
//     var arr = [5, 7, 4, 8, 3, 0];
// var filtered = filterRange(arr, 3, 5);
// filtered = [5, 4, 3];
// arr = [5, 7, 4, 8, 3, 0];

// версия 1
function filterRange(arr, a, b){
    var filtered = [];
    for (var i = 0; i < arr.length; i++) {
        if (i >= a && i <= b) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

var MyArr = [5, 7, 4, 8, 3, 0];
console.log(filterRange(MyArr, 3, 5));
console.log(MyArr);


// версия 2
function filterRange1(arr, a, b){
    var filtered = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

var MyArr1 = [5, 7, 4, 8, 3, 0];
console.log(filterRange1(MyArr1, 3, 5));
console.log(MyArr1);