let countries = ["Австрия", "Албания", "Белоруссия", "Болгария", "Босния и Герцеговина", "Ватикан", "Великобритания", "Венгрия", "Германия", "Дания", "Ирландия", "Исландия", "Испания", "Италия", "Кипр", "Латвия", "Литва", "Люксембург", "Македония", "Молдова", "Нидерланды", "Норвегия", "Польша", "Португалия", "Румыния", "Сербия", "Словакия", "Словения", "Украина", "Франция", "Хорватия", "Черногория", "Чехия", "Швейцария", "Швеция", "Эстония"]
let capitals = ["Вена", "Тирана", "Минск", "София", "Сараево", "Ватикан", "Лондон", "Будапешт", "Берлин", "Копенгаген", "Дублин", "Рейкьявик", "Мадрид", "Рим", "Никосия", "Рига", "Вильнюс", "Люксембург", "Скопье", "Кишинёв", "Амстердам", "Осло", "Варшава", "Лиссабон", "Бухарест", "Белград", "Братислава", "Любляна", "Киев", "Париж", "Загреб", "Подгорица", "Прага", "Берн", "Стокгольм", "Таллин"]
let countries_1 = ["Австрия", "Албания", "Белоруссия", "Болгария", "Босния и Герцеговина", "Ватикан", "Великобритания", "Венгрия", "Германия", "Дания", "Ирландия", "Исландия", "Испания", "Италия", "Кипр", "Латвия", "Литва", "Люксембург", "Македония", "Молдова", "Нидерланды", "Норвегия", "Польша", "Португалия", "Румыния", "Сербия", "Словакия", "Словения", "Украина", "Франция", "Хорватия", "Черногория", "Чехия", "Швейцария", "Швеция", "Эстония"] // будут уменьшаться
let capitals_1 =  ["Вена", "Тирана", "Минск", "София", "Сараево", "Ватикан", "Лондон", "Будапешт", "Берлин", "Копенгаген", "Дублин", "Рейкьявик", "Мадрид", "Рим", "Никосия", "Рига", "Вильнюс", "Люксембург", "Скопье", "Кишинёв", "Амстердам", "Осло", "Варшава", "Лиссабон", "Бухарест", "Белград", "Братислава", "Любляна", "Киев", "Париж", "Загреб", "Подгорица", "Прага", "Берн", "Стокгольм", "Таллин"] // будут уменьшаться
let i = 35
let right_capital1
let right_country1
let count = 0
let passcount = 0
let isExisting = true

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Проверки правильности ответа (Универсольной функции сделать не получилось, поэтому четыре)
function checkAnswer1(right_capital, right_country) {
    if (firstbutton.innerText == right_capital) {
        alert("Правильно. " + right_capital + " - столица государства \"" + right_country + "\"")
        count++
    } else {
        alert("Неправильно. " + "Правильно - " + right_country + ": " + right_capital + "\nВы ответили " + firstbutton.innerText)
    }
}
function checkAnswer2(right_capital, right_country) {
    if (secondbutton.innerText == right_capital) {
        alert("Правильно. " + right_capital + " - столица государства \"" + right_country + "\"")
        count++
    } else {
        alert("Неправильно. " + "Правильно - " + right_country + ": " + right_capital + "\nВы ответили " + secondbutton.innerText)
    }
}
function checkAnswer3(right_capital, right_country) {
    if (thirdbutton.innerText == right_capital) {
        alert("Правильно. " + right_capital + " - столица государства \"" + right_country + "\"")
        count++
    } else {
        alert("Неправильно. " + "Правильно - " + right_country + ": " + right_capital + "\nВы ответили " + thirdbutton.innerText)
    }
}
function checkAnswer4(right_capital, right_country) {
    if (fourthbutton.innerText == right_capital) {
        alert("Правильно. " + right_capital + " - столица государства \"" + right_country + "\"")
        count++
    } else {
        alert("Неправильно. " + "Правильно - " + right_country + ": " + right_capital + "\nВы ответили " + fourthbutton.innerText)
    }
}

firstbutton = document.getElementById("first")
secondbutton = document.getElementById("second")
thirdbutton = document.getElementById("third")
fourthbutton = document.getElementById("fourth")

question_number_container = document.querySelector("#question-number-container")

firstbutton.setAttribute("style", "display:none")
secondbutton.setAttribute("style", "display:none")
thirdbutton.setAttribute("style", "display:none")
fourthbutton.setAttribute("style", "display:none")


function startGame() {
    
    if (isExisting) {
        document.getElementById("description").remove()
        document.getElementById("start").remove()
        isExisting = false
    }
    

    firstbutton.setAttribute("style", "display:block")
    secondbutton.setAttribute("style", "display:block")
    thirdbutton.setAttribute("style", "display:block")
    fourthbutton.setAttribute("style", "display:block")

    if (i >= -1) {
        
        if (i == -1) { // Обнуление
            i = 35
            countries_1 = ["Австрия", "Албания", "Белоруссия", "Болгария", "Босния и Герцеговина", "Ватикан", "Великобритания", "Венгрия", "Германия", "Дания", "Ирландия", "Исландия", "Испания", "Италия", "Кипр", "Латвия", "Литва", "Люксембург", "Македония", "Молдова", "Нидерланды", "Норвегия", "Польша", "Португалия", "Румыния", "Сербия", "Словакия", "Словения", "Украина", "Франция", "Хорватия", "Черногория", "Чехия", "Швейцария", "Швеция", "Эстония"] // будут уменьшаться
            capitals_1 =  ["Вена", "Тирана", "Минск", "София", "Сараево", "Ватикан", "Лондон", "Будапешт", "Берлин", "Копенгаген", "Дублин", "Рейкьявик", "Мадрид", "Рим", "Никосия", "Рига", "Вильнюс", "Люксембург", "Скопье", "Кишинёв", "Амстердам", "Осло", "Варшава", "Лиссабон", "Бухарест", "Белград", "Братислава", "Любляна", "Киев", "Париж", "Загреб", "Подгорица", "Прага", "Берн", "Стокгольм", "Таллин"] // будут уменьшаться
            alert("Игра началась заново! \n" + "Правильных ответов: " + count)


            count = 0
            passcount = 0
        }

        question_number_container.innerHTML = `Вопрос ${36 - i} из 36.`

        let right_answer_container_number = getRandomInt(1, 4)
        let pair_number = getRandomInt(0, i)
        let right_capital = capitals_1[pair_number]
        let right_country = countries_1[pair_number]
        document.getElementById("country").innerHTML = right_country
        console.log(i, pair_number)
        
        // А здесь не получилось с "case"
        if (right_answer_container_number == 1) {
            firstbutton.innerHTML = right_capital
            fake1 = getRandomInt(0, 35)
            while (capitals[fake1] == right_capital) {
                fake1 = getRandomInt(0, 35)
            }
            secondbutton.innerHTML = capitals[fake1]
            
            fake2 = getRandomInt(0, 35) 
            while (capitals[fake2] == capitals[fake1] || capitals[fake2] == right_capital) {
                fake2 = getRandomInt(0, 35)
            }
            thirdbutton.innerHTML = capitals[fake2]
            fake3 = getRandomInt(0, 35) 
            while (capitals[fake3] == capitals[fake2] || capitals[fake3] == capitals[fake1] || capitals[fake3] == right_capital) {
                fake3 = getRandomInt(0, 35) 
            }
            fourthbutton.innerHTML = capitals[fake3]
        }
        else { if (right_answer_container_number == 2) {
            secondbutton.innerHTML = capitals_1[pair_number]
            
            fake1 = getRandomInt(0, 35)
            while (capitals[fake1] == right_capital) {
                fake1 = getRandomInt(0, 35)
            }
            firstbutton.innerHTML = capitals[fake1]
            
            fake2 = getRandomInt(0, 35) 
            while (capitals[fake2] == capitals[fake1] || capitals[fake2] == right_capital) {
                fake2 = getRandomInt(0, 35)
            }
            thirdbutton.innerHTML = capitals[fake2]
            fake3 = getRandomInt(0, 35) 
            while (capitals[fake3] == capitals[fake2] || capitals[fake3] == capitals[fake1] || capitals[fake3] == right_capital) {
                fake3 = getRandomInt(0, 35) 
            }
            fourthbutton.innerHTML = capitals[fake3]
        }
        }
        if (right_answer_container_number == 3) {
            thirdbutton.innerHTML = capitals_1[pair_number]
            
            fake1 = getRandomInt(0, 35)
            while (capitals[fake1] == right_capital) {
                fake1 = getRandomInt(0, 35)
            }
            secondbutton.innerHTML = capitals[fake1]
            
            fake2 = getRandomInt(0, 35) 
            while (capitals[fake2] == capitals[fake1] || capitals[fake2] == right_capital) {
                fake2 = getRandomInt(0, 35)
            }
            firstbutton.innerHTML = capitals[fake2]
            fake3 = getRandomInt(0, 35) 
            while (capitals[fake3] == capitals[fake2] || capitals[fake3] == capitals[fake1] || capitals[fake3] == right_capital) {
                fake3 = getRandomInt(0, 35) 
            }
            fourthbutton.innerHTML = capitals[fake3]
        }
        if (right_answer_container_number == 4) {
            fourthbutton.innerHTML = capitals_1[pair_number]
            fake1 = getRandomInt(0, 35)
            while (capitals[fake1] == right_capital) {
                fake1 = getRandomInt(0, 35)
            }
            secondbutton.innerHTML = capitals[fake1]
            
            fake2 = getRandomInt(0, 35) 
            while (capitals[fake2] == capitals[fake1] || capitals[fake2] == right_capital) {
                fake2 = getRandomInt(0, 35)
            }
            thirdbutton.innerHTML = capitals[fake2]
            fake3 = getRandomInt(0, 35) 
            while (capitals[fake3] == capitals[fake2] || capitals[fake3] == capitals[fake1] || capitals[fake3] == right_capital) {
                fake3 = getRandomInt(0, 35) 
            }
            firstbutton.innerHTML = capitals[fake3]
            
        }
        countries_1.splice(pair_number, 1)
        capitals_1.splice(pair_number, 1)
        console.log(right_capital)
        console.log(capitals_1, countries_1)
        console.log(right_answer_container_number)
        right_capital1 = right_capital
        right_country1 = right_country
        i--

            

    }
}

firstbutton.onclick = function() {
    checkAnswer1(right_capital1, right_country1)
    startGame()
}

secondbutton.onclick = function() {
    checkAnswer2(right_capital1, right_country1)
    startGame()
}

thirdbutton.onclick = function() {
    checkAnswer3(right_capital1, right_country1)
    startGame()
}

fourthbutton.onclick = function() {
    checkAnswer4(right_capital1, right_country1)
    startGame()
}

