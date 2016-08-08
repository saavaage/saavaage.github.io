/**
 * Created by boss on 11 июля.
 */
/*
## Задание 2 (Сортировка массива строк)

Есть массив строк `arr`. Создайте массив `arrSorted` — из тех же элементов, но отсортированный.

    Исходный массив не должен меняться.

    ```js
var arr = ['HTML', 'JavaScript', 'CSS'];

// ... ваш код ...

console.log( arrSorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)
```*/
var arr = ['HTML', 'JavaScript', 'CSS'];

function arrSorted(arr){
    var arrSorted = arr.slice().sort();
    return arrSorted;
}


console.log(arrSorted(arr)); // CSS, HTML, JavaScript
console.log(arr ); // HTML, JavaScript, CSS (без изменений)