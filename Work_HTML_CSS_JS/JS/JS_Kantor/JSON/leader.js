/**
 * Created by boss on 07 сентября.
 */
var leader = {
    name: "Василий Иванович",
    age: 35
};

var obj2json = JSON.stringify(leader);

console.log(obj2json);

var json2obj = JSON.parse(obj2json);

console.log(json2obj);