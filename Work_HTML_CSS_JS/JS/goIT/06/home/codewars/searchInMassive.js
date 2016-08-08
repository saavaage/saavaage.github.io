/**
 * Created by boss on 12 июля.
 */
/*
Fellow code warrior, we need your help! We seem to have lost one of our array elements, and we need your help to retrieve it!
 Our array, superImportantArray, was supposed to contain all of the integers from 0 to 9 (in no particular order),
 but one of them seems to be missing.
Write a function called getMissingElement that accepts an array of unique integers between 0 and 9 (inclusive), and returns
the missing element.
*/
// версия 1
function getMissingElement(superImportantArray){
    for(var i=0; i<=9; i++){
        for(var j=0; j < 1; j++ ){
            if(superImportantArray.indexOf(i) ==-1){
                return i;
            }
        }
    }
}
console.log(getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] )) // returns 8
console.log(getMissingElement( [9, 2, 4, 5, 7, 0, 8, 6, 1] )) // returns 3

// версия 2
function getMissingElement1(superImportantArray) {
    return superImportantArray.reduce(function (sum, value) {return sum - value;}, 45);
}
console.log(getMissingElement1( [0, 5, 1, 3, 2, 9, 7, 6, 4] )) // returns 8
console.log(getMissingElement1( [9, 2, 4, 5, 7, 0, 8, 6, 1] )) // returns 3