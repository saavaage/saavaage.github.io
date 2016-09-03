/**
 * Created by boss on 03 сентября.
 */
/*
 You have to create a function named reverseIt.
 Write your function so that in the case a string or a number is passed in as the data ,
 you will return the data in reverse order. If the data is any other type, return it as it is.
 Examples of inputs and subsequent outputs:
 "Hello" -> "olleH"
 "314159" -> "951413"
 [1,2,3] -> [1,2,3]

 */
var myData = '17589.66ghj';

function reverseIt(data) {
    if (typeof data === 'string') {
        return data.split('').reverse().join('');
    } else if (typeof data === 'number') {
        return +String(data).split('').reverse().join('');
    }
    return data;
}

console.log(reverseIt(myData));

