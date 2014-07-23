#!/usr/bin/env node

 // TODO 1 : Make a greeting for our App
var welcomeMessage = "Welcome to our awesome superhero building app!"
console.log(welcomeMessage);
// TODO 2 :  Make our object 
var person = {};
console.log(person);
// TODO 3 : Add firstName and lastName properties to our hero:
person.firstName = "Jack";
person.lastName = "Jones";
console.log("First Name: " + person.firstName);
console.log("Last Name: " + person.lastName);
// TODO 4 : Add the city to our hero:
person["city"] = "New Orleans";
console.log("City: " + person.city);