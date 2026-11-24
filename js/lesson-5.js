'use strict';

/**
 * Лабораторна робота №5
 * Тема: Об'єкт. Методи об'єкта. Масив об'єктів. Деструктуризація.
 *       Callback-функції. Стрілочні функції. Перебираючі методи масиву.
 * Виконавець: Андронов Данило Юрійович, група ІС-43 (№1 у списку, Варіант №1).
 *
 * Організація файлу: кожне з 19 завдань Варіанта №1 оформлено в окремій
 * ізольованій функції з текстом умови у коментарі, щоб однакові імена змінних
 * (student, product, user, students, products) не конфліктували між собою.
 */

// Допоміжна функція логування: виводить у стандартну консоль і (у браузері) у журнал на сторінці
function logOutput(...args) {
  console.log(...args);

  if (typeof document === 'undefined') {
    return;
  }

  const mirror = document.getElementById('console-mirror');
  if (!mirror) {
    return;
  }

  const formatted = args
    .map((item) => {
      if (typeof item === 'string') {
        return item;
      }
      try {
        return JSON.stringify(item, null, 2);
      } catch {
        return String(item);
      }
    })
    .join(' ');

  const line = document.createElement('div');
  if (formatted.startsWith('===')) {
    line.className = 'console-line-heading';
  }
  line.textContent = formatted;
  mirror.appendChild(line);
}

// ============================================================================
// ПІДТЕМА 1. «Об'єкт» (Варіант №1: завдання 1, 9)
// ============================================================================

/*
 * Підтема 1 «Об'єкт» — Завдання 1. Створення об'єкта студента
 * Створіть об'єкт student, який містить такі властивості: firstName, lastName,
 * age, specialty, course. Заповніть властивості відповідними значеннями.
 * Виведіть об'єкт у консоль.
 */
function task1_1(studentInput = {
  firstName: 'Данило',
  lastName: 'Андронов',
  age: 19,
  specialty: '126 Інформаційні системи та технології',
  course: 2,
}) {
  const student = {
    firstName: studentInput.firstName,
    lastName: studentInput.lastName,
    age: studentInput.age,
    specialty: studentInput.specialty,
    course: studentInput.course,
  };

  logOutput('[1.1] Об\'єкт student:', student);
  return student;
}

/*
 * Підтема 1 «Об'єкт» — Завдання 9. Вкладені об'єкти
 * Створіть об'єкт user, який містить інформацію про користувача: ім'я,
 * прізвище, вік та вкладений об'єкт address. Об'єкт address повинен містити
 * місто, вулицю, номер будинку та поштовий індекс. Виведіть у консоль місто
 * та вулицю проживання користувача.
 */
function task1_9(userInput = {
  firstName: 'Данило',
  lastName: 'Андронов',
  age: 19,
  address: {
    city: 'Київ',
    street: 'Політехнічна',
    house: '14В',
    postalCode: '03056',
  },
}) {
  const user = {
    firstName: userInput.firstName,
    lastName: userInput.lastName,
    age: userInput.age,
    address: {
      city: userInput.address.city,
      street: userInput.address.street,
      house: userInput.address.house,
      postalCode: userInput.address.postalCode,
    },
  };

  logOutput(
    `[1.9] Місто проживання: ${user.address.city}, вулиця: ${user.address.street}`
  );

  return {
    user,
    city: user.address.city,
    street: user.address.street,
  };
}

// ============================================================================
// ПІДТЕМА 2. «Методи об'єкта» (Варіант №1: завдання 1, 8)
// ============================================================================

/*
 * Підтема 2 «Методи об'єкта» — Завдання 1. Отримання ключів об'єкта
 * Створіть об'єкт student із властивостями name, age, specialty, course, group.
 * Використовуючи метод Object.keys(), отримайте масив назв усіх властивостей
 * об'єкта. Виведіть отриманий масив у консоль.
 */
function task2_1(studentInput = {
  name: 'Данило Андронов',
  age: 19,
  specialty: 'Інформаційні системи та технології',
  course: 2,
  group: 'ІС-43',
}) {
  const student = {
    name: studentInput.name,
    age: studentInput.age,
    specialty: studentInput.specialty,
    course: studentInput.course,
    group: studentInput.group,
  };

  const keys = Object.keys(student);
  logOutput('[2.1] Ключі об\'єкта student:', keys);
  return keys;
}

/*
 * Підтема 2 «Методи об'єкта» — Завдання 8. Створення копії об'єкта
 * Створіть об'єкт product із властивостями name, price, category. Створіть
 * його поверхневу копію за допомогою Object.assign(). Змініть значення
 * властивості price у копії. Перевірте, чи змінився початковий об'єкт.
 */
function task2_8(
  productInput = {
    name: 'Готельний тур «Карпатський вікенд»',
    price: 4500,
    category: 'Туризм та готелі',
  },
  newCopyPrice = 3990
) {
  const product = {
    name: productInput.name,
    price: productInput.price,
    category: productInput.category,
  };

  const productCopy = Object.assign({}, product);
  productCopy.price = newCopyPrice;

  const isOriginalChanged = product.price !== productInput.price;
  logOutput('[2.8] Початковий об\'єкт product:', product);
  logOutput('[2.8] Поверхнева копія productCopy:', productCopy);
  logOutput(
    `[2.8] Чи змінився початковий об'єкт? ${isOriginalChanged ? 'Так' : 'Ні (price залишилась ' + product.price + ')'}`
  );

  return {
    product,
    productCopy,
    isOriginalChanged,
  };
}

// ============================================================================
// ПІДТЕМА 3. «Масив об'єктів» (Варіант №1: завдання 1, 7)
// ============================================================================

/*
 * Підтема 3 «Масив об'єктів» — Завдання 1. Створення масиву студентів
 * Створіть масив students, який містить три об'єкти студентів. Кожен об'єкт
 * повинен мати властивості id, name, age, group. Виведіть увесь масив у консоль.
 */
function task3_1(studentsInput = [
  { id: 1, name: 'Данило Андронов', age: 19, group: 'ІС-43' },
  { id: 2, name: 'Олена Коваленко', age: 18, group: 'ІС-43' },
  { id: 3, name: 'Максим Шевченко', age: 19, group: 'ІС-43' },
]) {
  const students = studentsInput.map((item) => ({
    id: item.id,
    name: item.name,
    age: item.age,
    group: item.group,
  }));

  logOutput('[3.1] Масив студентів:', students);
  return students;
}

/*
 * Підтема 3 «Масив об'єктів» — Завдання 7. Видалення об'єкта за ідентифікатором
 * Створіть масив товарів із властивостями id, name, price. За допомогою циклу
 * знайдіть індекс товару з указаним id. Видаліть відповідний об'єкт за
 * допомогою методу splice(). Виведіть оновлений масив.
 */
function task3_7(
  productsInput = [
    { id: 101, name: 'Номер Standard', price: 1800 },
    { id: 102, name: 'Номер Deluxe Panorama', price: 3200 },
    { id: 103, name: 'Шале у Буковелі', price: 5400 },
  ],
  targetId = 102
) {
  const products = productsInput.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
  }));

  let indexToDelete = -1;
  for (let i = 0; i < products.length; i += 1) {
    if (products[i].id === targetId) {
      indexToDelete = i;
      break;
    }
  }

  let removedItem = null;
  if (indexToDelete !== -1) {
    const removed = products.splice(indexToDelete, 1);
    removedItem = removed[0];
    logOutput(
      `[3.7] Видалено товар з id=${targetId} (індекс ${indexToDelete}):`,
      removedItem
    );
  } else {
    logOutput(`[3.7] Товар з id=${targetId} не знайдено, масив без змін.`);
  }

  logOutput('[3.7] Оновлений масив товарів:', products);
  return {
    products,
    removedIndex: indexToDelete,
    removedItem,
  };
}

// ============================================================================
// ПІДТЕМА 4. «Деструктуризація об'єктів» (Варіант №1: завдання 1, 5, 10)
// ============================================================================

/*
 * Підтема 4 «Деструктуризація об'єктів» — Завдання 1. Базова деструктуризація об'єкта
 * Створіть об'єкт student із властивостями name, age, group, course.
 * Використовуючи деструктуризацію, створіть окремі змінні для отримання
 * значень цих властивостей. Виведіть змінні в консоль.
 */
function task4_1(studentInput = {
  name: 'Данило Андронов',
  age: 19,
  group: 'ІС-43',
  course: 2,
}) {
  const student = {
    name: studentInput.name,
    age: studentInput.age,
    group: studentInput.group,
    course: studentInput.course,
  };

  const { name, age, group, course } = student;
  logOutput(
    `[4.1] Деструктуризація: ім'я=${name}, вік=${age}, група=${group}, курс=${course}`
  );

  return { name, age, group, course };
}

/*
 * Підтема 4 «Деструктуризація об'єктів» — Завдання 5. Отримання решти властивостей об'єкта
 * Створіть об'єкт student із властивостями name, age, group, email, phone, course.
 * За допомогою деструктуризації отримайте значення name та group, а оператор
 * rest (...) використайте для збереження решти властивостей в окремий об'єкт.
 * Виведіть усі результати.
 */
function task4_5(studentInput = {
  name: 'Данило Андронов',
  age: 19,
  group: 'ІС-43',
  email: 'andronov.danylo@kpi.ua',
  phone: '+380671234567',
  course: 2,
}) {
  const student = {
    name: studentInput.name,
    age: studentInput.age,
    group: studentInput.group,
    email: studentInput.email,
    phone: studentInput.phone,
    course: studentInput.course,
  };

  const { name, group, ...restProperties } = student;
  logOutput(`[4.5] Ім'я: ${name}, Група: ${group}`);
  logOutput('[4.5] Решта властивостей (...rest):', restProperties);

  return {
    name,
    group,
    rest: restProperties,
  };
}

/*
 * Підтема 4 «Деструктуризація об'єктів» — Завдання 10. Опрацювання об'єкта відповіді сервера
 * Створіть об'єкт response, який імітує відповідь сервера та містить вкладені
 * дані користувача: data.user.name, data.user.email, data.user.address.city,
 * а також властивість status. Використовуючи вкладену деструктуризацію та
 * перейменування властивостей, отримайте ім'я, електронну пошту, місто та
 * статус відповіді.
 */
function task4_10(responseInput = {
  status: 200,
  data: {
    user: {
      name: 'Данило Андронов',
      email: 'danylo.andronov@mandrystay.ua',
      address: {
        city: 'Київ',
      },
    },
  },
}) {
  const response = responseInput;

  const {
    status: responseStatus,
    data: {
      user: {
        name: userName,
        email: userEmail,
        address: { city: userCity },
      },
    },
  } = response;

  logOutput(
    `[4.10] Відповідь сервера -> статус: ${responseStatus}, користувач: ${userName}, email: ${userEmail}, місто: ${userCity}`
  );

  return {
    userName,
    userEmail,
    userCity,
    responseStatus,
  };
}

// ============================================================================
// ПІДТЕМА 5. «Callback (функції зворотного виклику)» (Варіант №1: завдання 1, 7)
// ============================================================================

/*
 * Підтема 5 «Callback (функції зворотного виклику)» — Завдання 1. Функція як аргумент іншої функції
 * Створіть функцію processValue(), яка приймає два параметри: числове значення
 * та функцію зворотного виклику. Усередині processValue() передайте отримане
 * число у функцію зворотного виклику. Створіть окрему функцію, яка множить
 * число на 2, та передайте її як аргумент.
 */
function processValue(value, callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('callback у processValue() має бути функцією');
  }
  return callback(value);
}

function multiplyByTwo(num) {
  return num * 2;
}

function task5_1(value = 7, callback = multiplyByTwo) {
  const result = processValue(value, callback);
  logOutput(`[5.1] processValue(${value}, ${callback.name || 'callback'}) = ${result}`);
  return result;
}

/*
 * Підтема 5 «Callback (функції зворотного виклику)» — Завдання 7. Відкладене виконання повідомлення
 * Створіть функцію showMessage(), яка приймає текст повідомлення та функцію
 * зворотного виклику. Використовуючи setTimeout(), організуйте виклик callback
 * через 3 секунди. Передайте функцію, яка виводить повідомлення в консоль.
 */
function logDelayedMessage(message) {
  logOutput(`[5.7] Відкладене повідомлення (через 3 секунди): "${message}"`);
}

function showMessage(message, callback, delayMs = 3000) {
  if (typeof callback !== 'function') {
    throw new TypeError('callback у showMessage() має бути функцією');
  }

  return setTimeout(() => {
    callback(message);
  }, delayMs);
}

function task5_7(
  message = 'Дані бронювання MandryStay успішно синхронізовано!',
  callback = logDelayedMessage,
  delayMs = 3000
) {
  logOutput(`[5.7] Заплановано відкладене повідомлення (затримка ${delayMs} мс)...`);
  return showMessage(message, callback, delayMs);
}

// ============================================================================
// ПІДТЕМА 6. «Стрілочні функції» (Варіант №1: завдання 1, 10)
// ============================================================================

/*
 * Підтема 6 «Стрілочні функції» — Завдання 1. Перетворення звичайної функції на стрілочну
 * Створіть звичайну функцію greeting(), яка приймає ім'я користувача та повертає
 * привітання. Перепишіть цю функцію у вигляді стрілочної функції. Порівняйте
 * обидва варіанти та перевірте результат.
 */
function greeting(name) {
  return `Вітаємо, ${name}!`;
}

const greetingArrow = (name) => `Вітаємо, ${name}!`;

function task6_1(name = 'Данило') {
  const regularResult = greeting(name);
  const arrowResult = greetingArrow(name);
  const areEqual = regularResult === arrowResult;

  logOutput(`[6.1] Звичайна функція greeting("${name}"): "${regularResult}"`);
  logOutput(`[6.1] Стрілочна функція greetingArrow("${name}"): "${arrowResult}"`);
  logOutput(`[6.1] Результати однакові: ${areEqual}`);

  return {
    regularResult,
    arrowResult,
    areEqual,
  };
}

/*
 * Підтема 6 «Стрілочні функції» — Завдання 10. Стрілочні функції та контекст this
 * Створіть об'єкт car із властивістю brand та методом getInfo(), оголошеним за
 * допомогою звичайного синтаксису методу об'єкта. Метод повинен повертати
 * значення this.brand. Додатково створіть стрілочну функцію showBrand, яка
 * отримує марку автомобіля через параметр і повертає повідомлення з нею.
 * Порівняйте результати та з'ясуйте, чому стрілочна функція не має власного
 * контексту this.
 */
const showBrand = (brand) => `Марка автомобіля: ${brand}`;

function task6_10(brand = 'Toyota') {
  const car = {
    brand,
    getInfo() {
      return this.brand;
    },
    // Демонстрація: стрілочна функція бере лексичний this із зовнішньої області, а не об'єкт car
    getInfoArrow: () => (typeof this !== 'undefined' && this ? this.brand : undefined),
  };

  const methodBrand = car.getInfo();
  const arrowThisBrand = car.getInfoArrow();
  const arrowMessage = showBrand(car.brand);
  const explanation =
    'Стрілочна функція не створює власного контексту this, а лексично успадковує this зовнішньої області видимості; ' +
    'тому для методів об\'єкта використовують звичайні методи, а стрілочній функції дані передають через параметр.';

  logOutput(`[6.10] car.getInfo() (this.brand): "${methodBrand}"`);
  logOutput(`[6.10] car.getInfoArrow() (лексичний this.brand): ${String(arrowThisBrand)}`);
  logOutput(`[6.10] showBrand(car.brand): "${arrowMessage}"`);
  logOutput(`[6.10] Пояснення: ${explanation}`);

  return {
    car,
    methodBrand,
    arrowThisBrand,
    arrowMessage,
    explanation,
  };
}

// ============================================================================
// ПІДТЕМА 7. «Стрілочні функції як колбеки» (Варіант №1: завдання 1, 6, 9)
// ============================================================================

/*
 * Підтема 7 «Стрілочні функції як колбеки» — Завдання 1. Стрілочна функція як callback
 * Створіть функцію processNumber(), яка приймає число та функцію зворотного
 * виклику. Викличте processNumber(), передавши стрілочну функцію, яка множить
 * отримане число на 5. Виведіть результат у консоль.
 */
function processNumber(num, callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('callback у processNumber() має бути функцією');
  }
  return callback(num);
}

function task7_1(num = 8) {
  const result = processNumber(num, (n) => n * 5);
  logOutput(`[7.1] processNumber(${num}, (n) => n * 5) = ${result}`);
  return result;
}

/*
 * Підтема 7 «Стрілочні функції як колбеки» — Завдання 6. Отримання значення з поля введення
 * Створіть HTML-сторінку з текстовим полем input та кнопкою. За допомогою
 * addEventListener() додайте обробник події введення тексту (input).
 * Використайте стрілочну функцію як callback, щоб отримувати та виводити
 * поточне значення поля введення.
 */
function initTask7_6(doc = typeof document !== 'undefined' ? document : null) {
  if (!doc) {
    return null;
  }

  const inputEl = doc.getElementById('task-7-6-input');
  const outputEl = doc.getElementById('task-7-6-output');
  const buttonEl = doc.getElementById('task-7-6-button');
  const clearBtnEl = doc.getElementById('task-7-6-clear');
  const statusEl = doc.getElementById('task-7-6-status');
  const formEl = doc.getElementById('task-7-6-form');

  if (!inputEl) {
    return null;
  }

  const renderValue = (value) => {
    if (outputEl) {
      outputEl.textContent = value.length > 0 ? value : '(порожньо)';
    }
  };

  // Перешкоджаємо перезавантаженню сторінки при натисканні Enter у формі
  if (formEl) {
    formEl.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  }

  // Стрілочний callback на подію input
  inputEl.addEventListener('input', (event) => {
    const currentValue = event.target.value;
    renderValue(currentValue);
    logOutput(`[7.6] Подія input -> поточне значення: "${currentValue}"`);
  });

  if (buttonEl) {
    buttonEl.addEventListener('click', () => {
      const currentValue = inputEl.value;
      renderValue(currentValue);
      const statusText =
        currentValue.trim().length > 0
          ? `Підтверджено значення: "${currentValue}"`
          : 'Поле введення наразі порожнє.';
      if (statusEl) {
        statusEl.textContent = statusText;
      }
      logOutput(`[7.6] Натиснуто кнопку -> ${statusText}`);
    });
  }

  if (clearBtnEl) {
    clearBtnEl.addEventListener('click', () => {
      inputEl.value = '';
      renderValue('');
      if (statusEl) {
        statusEl.textContent = 'Поле очищено.';
      }
      logOutput('[7.6] Поле введення очищено.');
    });
  }

  return {
    inputEl,
    outputEl,
    buttonEl,
    clearBtnEl,
    statusEl,
  };
}

/*
 * Підтема 7 «Стрілочні функції як колбеки» — Завдання 9. Використання стрілочної функції з Promise
 * Створіть об'єкт Promise, який повертає повідомлення "Дані успішно завантажено".
 * За допомогою методу .then() та стрілочної функції отримайте результат виконання
 * Promise і виведіть його в консоль. Додайте обробку помилки за допомогою .catch().
 */
function loadData(shouldFail = false) {
  return new Promise((resolve, reject) => {
    if (shouldFail) {
      reject(new Error('Не вдалося завантажити дані із сервера'));
      return;
    }
    resolve('Дані успішно завантажено');
  });
}

function task7_9(shouldFail = false) {
  return loadData(shouldFail)
    .then((message) => {
      logOutput(`[7.9] Promise .then(): "${message}"`);
      return { ok: true, message };
    })
    .catch((error) => {
      logOutput(`[7.9] Promise .catch(): "${error.message}"`);
      return { ok: false, error: error.message };
    });
}

// ============================================================================
// ПІДТЕМА 8. «Перебираючі методи масиву» (Варіант №1: завдання 1, 5, 8)
// ============================================================================

/*
 * Підтема 8 «Перебираючі методи масиву» — Завдання 1. Перебір масиву за допомогою forEach()
 * Створіть масив об'єктів students, кожен із яких містить властивості name, age,
 * group. Використовуючи метод forEach() та стрілочну функцію, виведіть
 * інформацію про кожного студента в консоль.
 */
function task8_1(studentsInput = [
  { name: 'Данило Андронов', age: 19, group: 'ІС-43' },
  { name: 'Олена Коваленко', age: 18, group: 'ІС-43' },
  { name: 'Максим Шевченко', age: 19, group: 'ІС-43' },
]) {
  const students = studentsInput;
  const formattedLines = [];

  students.forEach((student, index) => {
    const info = `[8.1] Студент №${index + 1}: ${student.name}, вік: ${student.age}, група: ${student.group}`;
    formattedLines.push(info);
    logOutput(info);
  });

  return formattedLines;
}

/*
 * Підтема 8 «Перебираючі методи масиву» — Завдання 5. Пошук індексу елемента за допомогою findIndex()
 * Створіть масив об'єктів товарів із властивостями id, name, price.
 * Використовуючи метод findIndex(), знайдіть індекс товару з визначеним
 * ідентифікатором. Виведіть індекс у консоль. Якщо товар не знайдено, виведіть
 * повідомлення.
 */
function task8_5(
  productsInput = [
    { id: 201, name: 'Тур у Яремче (2 ночі)', price: 4200 },
    { id: 202, name: 'Готель Буковель SPA', price: 6800 },
    { id: 203, name: 'Вікенд у Львові', price: 3100 },
  ],
  targetId = 202
) {
  const products = productsInput;
  const foundIndex = products.findIndex((item) => item.id === targetId);

  const message =
    foundIndex !== -1
      ? `[8.5] Товар з id=${targetId} знайдено за індексом ${foundIndex} (${products[foundIndex].name})`
      : `[8.5] Товар з id=${targetId} не знайдено (індекс -1)`;

  logOutput(message);
  return {
    index: foundIndex,
    found: foundIndex !== -1,
    message,
  };
}

/*
 * Підтема 8 «Перебираючі методи масиву» — Завдання 8. Обчислення суми за допомогою reduce()
 * Створіть масив об'єктів products, кожен із яких містить властивості name,
 * price, quantity. Використовуючи метод reduce(), обчисліть загальну вартість
 * усіх товарів на складі. Результат виведіть у консоль.
 */
function task8_8(productsInput = [
  { name: 'Клавіатура механічна', price: 2500, quantity: 4 },
  { name: 'Миша бездротова', price: 1400, quantity: 6 },
  { name: 'Монітор 27"', price: 9800, quantity: 2 },
]) {
  const products = productsInput;
  const totalCost = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  logOutput(`[8.8] Загальна вартість товарів на складі: ${totalCost} грн`);
  return totalCost;
}

function runSubtopic(subtopicNumber) {
  const runners = {
    1: () => {
      logOutput('=== Підтема 1. Об\'єкт (1, 9) ===');
      task1_1();
      task1_9();
    },
    2: () => {
      logOutput('=== Підтема 2. Методи об\'єкта (1, 8) ===');
      task2_1();
      task2_8();
    },
    3: () => {
      logOutput('=== Підтема 3. Масив об\'єктів (1, 7) ===');
      task3_1();
      task3_7();
      task3_7(undefined, 999);
    },
    4: () => {
      logOutput('=== Підтема 4. Деструктуризація об\'єктів (1, 5, 10) ===');
      task4_1();
      task4_5();
      task4_10();
    },
    5: () => {
      logOutput('=== Підтема 5. Callback-функції (1, 7) ===');
      task5_1(7);
      task5_1(12.5);
      task5_7();
    },
    6: () => {
      logOutput('=== Підтема 6. Стрілочні функції (1, 10) ===');
      task6_1('Данило');
      task6_1('Олена');
      task6_10('Toyota');
      task6_10('Volkswagen');
    },
    7: () => {
      logOutput('=== Підтема 7. Стрілочні функції як колбеки (1, 6, 9) ===');
      task7_1(8);
      task7_1(-3);
      logOutput('[7.6] Подія input підключена до #task-7-6-input (у браузері).');
      task7_9(false);
    },
    8: () => {
      logOutput('=== Підтема 8. Перебираючі методи масиву (1, 5, 8) ===');
      task8_1();
      task8_5(undefined, 202);
      task8_5(undefined, 999);
      task8_8();
      task8_8([
        { name: 'USB-хаб', price: 650, quantity: 3 },
        { name: 'SSD 1 ТБ', price: 3200, quantity: 2 },
      ]);
    },
  };

  const runner = runners[Number(subtopicNumber)];
  if (runner) {
    runner();
  }
}

function runAllDemos() {
  logOutput('=== Старт демонстрації ЛР №5 (Варіант №1, ІС-43, Андронов Данило) ===');
  for (let i = 1; i <= 8; i += 1) {
    runSubtopic(i);
  }
}

function initBrowserUi() {
  if (typeof document === 'undefined') {
    return;
  }

  initTask7_6(document);

  const runAllBtn = document.getElementById('run-all-demos-btn');
  if (runAllBtn) {
    runAllBtn.addEventListener('click', () => {
      runAllDemos();
    });
  }

  const clearMirrorBtn = document.getElementById('clear-mirror-btn');
  if (clearMirrorBtn) {
    clearMirrorBtn.addEventListener('click', () => {
      const mirror = document.getElementById('console-mirror');
      if (mirror) {
        mirror.textContent = '';
      }
    });
  }

  const subtopicButtons = document.querySelectorAll('[data-subtopic]');
  subtopicButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      runSubtopic(btn.dataset.subtopic);
    });
  });

  runAllDemos();
}

// Ініціалізація у браузері або при прямому запуску через Node CLI
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBrowserUi);
  } else {
    initBrowserUi();
  }
} else if (typeof require !== 'undefined' && typeof module !== 'undefined' && require.main === module) {
  runAllDemos();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    logOutput,
    task1_1,
    task1_9,
    task2_1,
    task2_8,
    task3_1,
    task3_7,
    task4_1,
    task4_5,
    task4_10,
    processValue,
    multiplyByTwo,
    task5_1,
    logDelayedMessage,
    showMessage,
    task5_7,
    greeting,
    greetingArrow,
    task6_1,
    showBrand,
    task6_10,
    processNumber,
    task7_1,
    initTask7_6,
    loadData,
    task7_9,
    task8_1,
    task8_5,
    task8_8,
    runSubtopic,
    runAllDemos,
  };
}
