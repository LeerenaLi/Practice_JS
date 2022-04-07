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
    
    2.26/ 5 Часть

    Кнопку start привяжем к функции start
    Значения которые получаем от пользователя добавим в объект appData (money, time)

    Значение доход добавим с пом. метода textContent в объект на странице budget-value о округлим
    budgetValue.textContent = money.toFixed();

    Введение даты. Если у нас есть input, то мы используем его значение value, а не textContent

    Date - объект в JS, у которого есть свои свойства и методы
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date

    Дата создается через синтаксис new Date
    У объекта Date есть метод parse, кот принимает данные от пользователя в каком то формате,
    напр. YYYY-MM-DD и превращает их в кол-во милисекунд
    Для того, чтобы получить из них год используем метод getFullYear

    Также обрабатываем инпут месяц
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    Прибавляем единицу, т.к. значения начинаются с 0

    Далее методы кторые есть у объекта appData будем превращать в обработчики событий

    Расчет обязательных расходов - нужно суммировать все расходы и пересчитывать при нажатии на кнопку
    Утвердить. Сначала повесим на эту кнопку expensesBtn обработчик событий
    Зададим переменную для суммирования всех ценников

    Далее перенесем в функцию заранее заготовленный цикл для обязательных расходов

    в условии вместо i < 2 ставим длину псевдомассива, чтобы можно пользователю было задавать больше инпутов
    В переменных a b вместо промпта пишем инпуты 

    let a = expensesItem[i].value,
            b = expensesItem[++i].value;

    Соответственно первый инпут у нас название, а второй цена
    и после добавления b в объект appData.expenses[a] = b; добавляем в переменную sum
    И далее сумму которую получили запишем в графу обязательные расходы
    expensesValue.textContent = sum;

    Далее необязательные расходы, которые должны попасть в блок Возможные траты

    Расчет дневного бюджета и кнопка Рассчитать

    Совмещаем 2 функции - бюджет на день и Уровень дохода
    и делаем проверку на то, что пользователь сначала начнет расчет (а не оставит бюджет пустым)

    Далее поле ввода дополнительных доходов и выводим в Доп доход
    Там текстовый инпут,  в таких случаях исползуются события input и change
    input событие возникает, когда мы что-то вводим в инпут
    change возникает когда мы убираем с инпута мышь и кликаем в другом месте - пропадает фокус инпута

    Далее расчет накоплений, который активируется чекбоксом
    изначально savings: false, нужно записать проверку, если он стоит в true- то сначала выключить его, 
    а если опять кликаем, то выключаем галку( ставим false)

    Далее мы должны расчитывать накопления, если введены оба значения в инпуты - сумма и проценты
    Сначала повесим обработчик событий на инпут с суммой и на инпус с процентами, а также 
    поставим в них проверку на то. что чекбокс включен(true)

    Создаем 2 переменных - с текущей суммой и текущим % - то, что собираем с инпутов,
    далее расчитываем накопления за 1 мес и за 1 год и записываем их в глобальный объект appData,
    и выводим на экран


*/

let startBtn = document.getElementById("start"),
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
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
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

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;


startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');
    
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for(i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50){
            console.log("done");    
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log("bad result");
            i--;
        };
        
    };
    expensesValue.textContent = sum;
})

optionalExpensesBtn.addEventListener('click', function() {
    for(i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    };
})

countBudgetBtn.addEventListener('click', function() {
    if(appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if(appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        };
    } else {
        dayBudgetValue.textContent = "Необходимо начать расчет";
    }
})

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;   
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
})

checkSavings.addEventListener('click', function() {
    if(appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
})

sumValue.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
})

percentValue.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
})

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for(let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
};









