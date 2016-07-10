/**
 * Created by boss on 10 июля.
// //  */
// Создайте функцию find(arr, value), которая ищет в массиве
// arr значение value и возвращает его позицию, если найдено,
// или -1, если не найдено.;

function find(arr, value) {
  for(var i=0; i < arr.length; i++){
    if(arr[i] === value){
        return (i +' - ' + value);
    }
}
    return -1;
}

var fruits = ['apple', 'orange','kivi', 'pear','apricot'];
console.log(find(fruits,'pear'));