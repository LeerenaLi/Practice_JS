/*  Программа для расчета расхода пользователя

    2 вопроса пользователю, записанные в переменные money и time, 
    которые выводятся на экран командой prompt
    в ответ получим стороковый тип данных

    объект appDate, который будет содержать все данные о программе

    вопросы a и b, которые передадим в свойство объекта expenses
    и выведем на экран с помощью prompt
    и расчет бюджета  alert(appData.budget / 30);

    цикл for для вопросов пользователю с условием r(i = 0; i < 2; i++)
    чтобы вывести вопросы 2 раза

    appData.expenses[a] = b;
    запишем в свойство expenses ответы пользователя
    [ ] - позволят записать строку (ответ)

    проверка на тип данных (условие)
    ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null)
    проверка на строку, и на то, что пользователь вводит данные, а не нажимает отмену 
    != null - тип данных не равен null

    Проверка, которая запретит пользователю оставлять пустой переменные a и b:
    && a != '' && b != ''

    Запрет на воод больше определенного кол-ва символов

    else - если не прошли проверку, то нужно вернуться к первому вопросу

    записать бюджет в данные программы, ориентируясь на ответ пользователя:
    appData.moneyPerDay = создадим новое свойство объекта
    и запишем в него кол-во денег на 1 день:  appData.budget / 30

    Условие: вывести сообщение в консоль в зависимости от ежедневного бюджета уровень достатка человека
    в условиях (appData.moneyPerDay < 100) и далее
    если не одно условие не выполнено (не тот тип данных, ошибка) выведем console.log("Произошла ошибка");

    Чтобы получить от пользователя не стороку, а числовой тип данных ставим перед prompt унарный плюс:
    +prompt


    Вместо for другие циклы:

    Используем цикл WHILE

    let i = 0;
    while (i < 2) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
             b = prompt ("Во сколько обойдется?", "");

        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            console.log ("done");
            appData.expenses[a] = b;
        } else {
            console.log ("bad result");
            i--;
        } i++;     
    };



    Используем цикл DO...WHILE

    let i = 0;
    do {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");

        if( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50){
            console.log ("done");
            appData.expenses[a] = b;
        } else {
            console.log ("bad result");
            i--;
        }
        i++;
        } while(i < 2);
*/

let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for(i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50){
        console.log("done");    
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    };
    
};

appData.moneyPerDay = appData.budget / 30;
    
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
}else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if(appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
};


