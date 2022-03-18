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
 
*/



/* 
    Функция start - чтобы вопросы не выводились просто так,
    внутрь помещаем переменные money и time, 
    но чтобы к ним можно было обратиться из любого места, выводим их также на глобальный уровень/

    Также в функцию добавляем проверку, чтобы человек не мог оставить строку пустой,
    ввести не числа или отменить prompt. Используем цикл while

    Для проверки переменной money на числа используем команду isNaN

    isNaN - возвращает true, когда введены НЕ числа
    || money == "" или пустая строка
    || money == null или пользователь нажал кнопку отмена

    Если пользователь ввел не числа, пустую строку или нажал отмену - задаем вопрос еще раз,
    т.е. цикл продолжается

    start(); - вызываем функцию

    Выбор обязательных расходов, цикл for мы также оформим в виде функции chooseExpenses
    и вызовем ее

    Метод toFixed() - округляет число. При пустых скобках - до целого,
    (1) - до первого знака после запятой и т.д.
    Но он меняет тип данных - возвращает строковое значение

    задание:
    Создать функцию для определения необязательных расходов (chooseOptExpenses):
    - Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”
    - Записать ответы в объект optionalExpenses в формате Номер - Ответ
    optionalExpenses: {
    1 : “ответ на вопрос”
    }

*/

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
};
start();



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
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
};
chooseExpenses();

function chooseOptExpenses() {
    for(i = 0; i < 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i + 1] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    };
};
chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
};
detectDayBudget();

function detectLevel(){
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if(appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    };    
}; 
detectLevel();


/* Расчет накоплений с депозита

    appData.savings == true - если накопления есть, т.е. возвращет true?
    то задаем вопросы пользователю. Перед prompt + - чтобы вводили числа

    appData.monthIncome - обращаемся к объекту и создаем новое свойство (приход в мес)

*/

function checkSavings(){
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с депозита: " + appData.monthIncome);
    }
};
checkSavings();

