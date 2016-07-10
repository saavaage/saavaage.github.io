/**
 * Created by boss on 10 июля.
//  */
// . Создайте массив fruits с элементами «apple», «orange».
// 2. Добавьте в конец значение «kiwi»
// 3. Замените предпоследнее значение с конца на «pear». Код
// замены предпоследнего значения должен работать для
// массивов любой длины.
// 4. Удалите первое значение массива и выведите его console.
// 5. Добавьте в начало значения «apricot» и «peach».

var fruits = ['apple', 'orange'];
fruits.push('kivi');
fruits[fruits.length-2] = 'pear';
console.log(fruits.shift());
fruits.unshift('apricot','peach');
console.log(fruits);