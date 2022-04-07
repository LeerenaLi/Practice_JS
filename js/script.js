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

/* Расчет накоплений с депозита

    appData.savings == true - если накопления есть, т.е. возвращет true?
    то задаем вопросы пользователю. Перед prompt + - чтобы вводили числа

    appData.monthIncome - обращаемся к объекту и создаем новое свойство (приход в мес)

*/

/* 3. Методы объекта - это функции, создаем несколько методов.
    Функции, которые мы ранее создавали теперь выглядят в виде методов объекта appData

    Создаем новый метод для дополнительного дохода chooseIncome
    то, что мы получили от пользователя мы запишем в массив income ,
    чтобы преобразовать полученную строку в массив, воспользуемся командой split

    чтобы в консоли посмотреть объект вводим там console.log(appData)
    он выводится в виде массива

    Чтобы там запустить метод, который не вызван в коде, там же в консоли его вызовем:
    appData.detectDayBudget()
    или appData.chooseIncome()

    чтобы добавить элемент в конец массива, используем метод push и снова prompt
    т.е. мы получаем от пользователя какой-то еще элемент и добавляем его в конец массива
    appData.income.push(prompt("Может что-то еще?"));
    и отсортируем по алфавиту методом sort:
    appData.income.sort();

    Задания:
    1) Написать проверку, что пользователь может:
    - Ввести в дополнительных доходах (chooseIncome) только строку
    - Не может оставить строку пустой
    - Не может отменить вопрос

    if(typeof(items) != "string" || typeof(items) == null || typeof(items) == " " ) {
        console.log("Вы ввели некорректные данные, или не ввели их вовсе");
    } else {
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
    }

    2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome)
    - Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome

    appData.income.forEach (function (itemmassive, i) {
        alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
    });

    3) Используя цикл for in для объекта (appData) вывести в консоль сообщение 
    "Наша программа включает в себя данные: " (вывести весь appData)

    2.25/ 4 Часть
 
    Задание по проекту
    - Получить кнопку "Начать расчет" через id
    - Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div> )
    - Получить поля (input) c обязательными расходами через класс (class=”expenses-item”)
    - Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной
    - Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
    - Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
    


*/

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'); 

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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if(appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        };  
    },
    checkSavings: function() {
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(i = 0; i < 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i + 1] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        };
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход (перечислите через запятую)", '');
       

        if(typeof(items) != "string" || typeof(items) == null || typeof(items) == " " ) {
            console.log("Вы ввели некорректные данные, или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });
    }
};

for(let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
};








