'use strict';

var budget = prompt("Ваш бюджет на месяц?", "");
console.log(budget);

var date = prompt("Введите дату в формате YYYY-MM-DD");
console.log(date);

var income = [];

var exp = prompt("Введите обязательную статью расхода в этом месяце", "");
var expenses = prompt("Во сколько оойдется?");

let appData = {
    budg: budget, 
    time: date,
    expenses: {exp : expenses}, 
    optExp: "",
    moreExp: income,
    savings: false
}
console.log(appData);

alert("ваш бюджет на день = (пройдите дальше, чтобы посмотреть)");
alert(budget / 30);