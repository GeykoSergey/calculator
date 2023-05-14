// 1. находим действующие элементы

// 2. отслеживаем события на странице
// отслеживаем изменения и выводим результат сразу же после
// ввода значений 

// 3. совершение необходимых действий
// - расчет по стоимости

// метод - это функция запущенная от обьекта

// ************************************************************************
// работаем с окном ввода колличества метров
// <input type="number" min="0" max="200" value="50" id="square-input" class="title__inline input-short" />

// работаем с рейндж слайдером
//<input type="range" id="square-range" class="range-input" min="0" max="200" value="50" step="1" />

// находим #square-input
// находим #square-range

// связываем поле ввода с рейндж (при изменении одного будет
// меняться другой)
// когда у нас происходит изменение значения в инпуте, по сути 
// происходит ввод данных (происходит событие input) 

// для того что бы в реальном времени (интерактивно) выводить
//  значение прайса (интерактивно) создадим коллекцию
// всех input

// элементы формы
const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');

// радиокнопки блока тип ремонта, которые имеют атрибут name
// со значением type
const radioType = document.querySelectorAll('input[name="type"]');
// будет найден нод лист
// радиокнопки блока тип дома
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');
// чекбоксы находим все три
const ceilings = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');



const basePrice = 6000;
const totalPriceElement = document.querySelector('#total-price');

// связываем поле ввода с рейндж (при изменении одного будет
// меняться другой)
// когда у нас происходит изменение значения в инпуте, по сути 
// происходит ввод данных (происходит событие input)
// слушаем событие input значение берем из value

// получаем значение рейндж и передаем его в текстовое поле
// squareInput.value = squareRange.value;
// читается слева направо
squareRange.addEventListener('input', function () {
    squareInput.value = squareRange.value;
})

// ввод значения в текстовое поля и связываем его с рейндж
squareInput.addEventListener('input', function () {
    squareRange.value = squareInput.value;
})

function calculate() {
    let totalPrice = basePrice * (squareInput.value);

    for (const item of radioType) {
        if(item.checked === true) {
            totalPrice = totalPrice * parseFloat(item.value);
        }
    }

    for (const item of radioBuilding) {
        if(item.checked === true) {
            totalPrice = totalPrice * parseFloat(item.value);
        }
    }

    for (const item of radioRooms) {
        if(item.checked === true) {
            totalPrice = totalPrice * parseFloat(item.value);
        }
    }

    if (ceilings.checked) {
        totalPrice = totalPrice + parseFloat(ceilings.value) * parseInt(squareInput.value);
    }

    if (walls.checked) {
        totalPrice = totalPrice * parseFloat(walls.value);
    }

    if (floor.checked) {
        totalPrice = totalPrice * parseFloat(floor.value);
    }

    const formatter = new Intl.NumberFormat('ru');
    totalPriceElement.innerText = formatter.format(totalPrice);
    
}

calculate();

for (const item of inputs) {
    item.addEventListener('input', function (event) {
        calculate();
    })
}

// ************************************************************************
// создаем функцию calculate() для того что бы не использовать код
// let totalPrice = basePrice * (squareInput.value); каждый раз когда нам
// это необходимо, а вызывать функцию

// <span id="total-price">0</span> - сюда выводим тотал прайс

// const formatter = new Intl.NumberFormat('ru'); - форматирование отображения
// прайса
// затем у formatter вызываем метод format тотал прайса
// formatter.format(totalPrice);
// totalPriceElement.innerText = formatter.format(totalPrice);
// все что попадает в InnerText - становиться строкой

// ************************************************************************
// РАДИОКНОПКИ ИНПУТЫ ЧЕКБОКСЫ

// необходимо найти например, радиокнопки, и далее когда у нас изменяются 
// инпуты, смотреть чему равны радиокнопки, и это будет влиять на цену

// блок ТИП РЕМОНТА
// <input type="radio" class="radio" name="type" value="1" />
// <input type="radio" class="radio" name="type" value="1.3" checked />
// <input type="radio" class="radio" name="type" value="1.5" />

// эти три радиокнопки связаны между собой атрибутом name="type"

// мы получили коллекцию из трех радиокнопок, нам необходимо получить
// значение выбранной радиокнопки (понять какая из них выбрана)
// у выбранной кнопки есть свойство checked = tru
// необходимо пройти по всем трем инпутам выбрать тот который выбран
// взять у него value и цену перемножить на это value

// прослушка всех инпутов у нас есть
// for (const item of inputs) {
//     item.addEventListener('input', function () {
//         calculate();
//     })
// }

// и теперь изменение инпутов в блоке тип ремонта мы должны учесть

// parseInt(item.value) - возвращает целое цисло
// parseFloat(item.value); - возвращает число с плавающей точкой


// ************************************************************************
// по аналогии делаем второй блок радиокнопок ТИП ДОМА

// эти три радиокнопки связаны между собой атрибутом name="building"
// ************************************************************************
