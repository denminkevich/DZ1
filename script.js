'use strict';

var budget = +prompt("Ваш бюджет на месяц?", "");

var date = prompt("Введите дату в формате YYYY-MM-DD");

var income = [];

let appData = {
    budg: budget, 
    time: date,
    expenses: {}, 
    optExp: {},
    moreExp: income,
    savings: false
}

for (let i = 0; i < 2; i++)
{
    let a = prompt("Введите обязательную статью расходов в этом месяце ", ' '),
        b = prompt("Во сколько обойдется", ' ');
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50)  {
        appData.expenses[a] = b; 
    }else {

    }
};

appData.moneyPerDay = appData.budg / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Средний уровень достатка");
} else {
    console.log("Произошла ошибка");
}

console.log(appData);