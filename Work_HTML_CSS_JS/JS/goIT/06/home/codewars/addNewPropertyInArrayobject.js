/**
 * Created by boss on 12 июля.
 */
/*
 Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should
 be set to null. The solution should work for array of any length.
 For example:

 var questions = [{
 question: "What's the currency of the USA?",
 choices: ["US dollar", "Ruble", "Horses", "Gold"],
 corAnswer: 0
 }, {
 question: "Where was the American Declaration of Independence signed?",
 choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
 corAnswer: 0
 }];
 After adding the property the result should be:

 var questions = [{
 question: "What's the currency of the USA?",
 choices: ["US dollar", "Ruble", "Horses", "Gold"],
 corAnswer: 0,
 usersAnswer: null
 }, {
 question: "Where was the American Declaration of Independence signed?",
 choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
 corAnswer: 0,
 usersAnswer: null
 }];
 The questions array is already defined for you and is not the same as the one in the example.
 */
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

function addNewProp(arr, field){
    for(var i=0; i < arr.length; i++){
        arr[i][field] = null;

    }
return arr;
}

console.log(addNewProp(questions,'usersAnswer'));