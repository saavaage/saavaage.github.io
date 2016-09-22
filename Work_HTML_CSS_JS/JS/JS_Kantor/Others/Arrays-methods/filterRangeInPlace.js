/**
 * Created by boss on 13 августа.
 */
/*
Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr и
удаляет из него все числа вне диапазона a..b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна менять сам массив и ничего не возвращать.
    */
arr = [5, 3, 8, 0, -1, 2, 10, 1, 1];

function filterRangeInPlace(myArr, a, b){
    for(var i =0; i < myArr.length; i++){
        if(myArr[i] < a || myArr[i] > b){
            myArr.splice(i--,1);
        }
    }
}

filterRangeInPlace(arr, -1, 4);

console.log( arr );