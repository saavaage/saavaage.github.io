/**
 * Created by boss on 03 сентября.
 */
/*
The main idea is to count all the occuring characters(UTF-8) in string.
If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
What if the string is empty ? Then the result should be empty object literal { }
*/

var myString = 'Я дослал патрон в патронник..';

function count(str) {
    var obj = {};
    if(arguments.length >0 && str !== '') {
        var arr = str.replace(/ /g, '').split('');
        if (str !== '') {
            for (var i = 0; i < arr.length; i++) {
                if (obj[arr[i]]) {
                    obj[arr[i]] += 1;
                } else {
                    obj[arr[i]] = 1;
                }
            }
            return obj;
        }
    }
        return {};
}

console.log(count(myString));

// версия 2
function count1(string) {
    var obj = {};
    string = string.split('').forEach(function(x){
        obj[x] = obj[x] ? obj[x] + 1 : 1;
    });
    return obj;
}
console.log(count1(myString));


