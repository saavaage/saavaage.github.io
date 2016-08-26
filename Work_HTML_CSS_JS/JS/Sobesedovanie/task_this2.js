
/**
 * Created by boss on 25 августа.
 */
// Что выведет этот код?
var arr = ['a', 'b'];
arr.push(function(){
    console.log(this);
 });

arr[2]();

// ответ: [ 'a', 'b', [Function] ] - см. лекцию 8 GoIT самое начало.

