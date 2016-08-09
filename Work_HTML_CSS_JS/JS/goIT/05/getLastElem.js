/**
 * Created by boss on 09 августа.
 */
//добавить в конец нового массива и вывести новый массив

function getLast(arr, el) {
    arr1 =[];
    for(var i=0; i<arr.length; i++){
        arr1[i] = arr[i];
    }
    arr1.push(el);
    return arr1;
}

var myArray = ['a', 'b', 'c', 'd'];
var elem = 'Fat';
console.log(getLast(myArray, elem));