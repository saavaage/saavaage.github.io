/**
 * Created by boss on 02 октября.
 */

'use strict';
/*
Ahoy matey!
You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty eficient system to identify ships with a heavy booty on board.
Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?
You begin with writing a generic Ship class:

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}
Every time your spies see a new ship enter the dock, they will create a new ship object:

    var titanic = new Ship(15,10);
Now comes the tricky part: An average man will sink the ship by exactly 1.5 units. (Ship's draft goes up) That means the draft can show the estimated weight of the presumable booty aboard.
if it weighs more than 20 without people, it is worthy to board. Your system should have a method
isWorthIt  to decide that:
    titanic.isWorthIt() //return false
*/
// версия 1
function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function(){
       return ((this.draft - (this.crew * 1.5))>20)? true : false;
    }
}
var titanic = new Ship(35,10);
console.log(titanic.isWorthIt()); //return false

// версия 2 - через прототип
function Ship1(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}

Ship1.prototype.isWorthIt = function(){
    return this.draft-(this.crew*1.5) > 20;
};

var titanic1 = new Ship1(45,10);
console.log(titanic1.isWorthIt()); //return false