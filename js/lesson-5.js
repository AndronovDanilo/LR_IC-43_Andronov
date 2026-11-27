'use strict';

/**
 * Лабораторна робота №5
 * Тема: Об'єкт. Методи об'єкта. Масив об'єктів. Деструктуризація.
 *       Callback-функції. Стрілочні функції. Перебираючі методи масиву.
 * Виконавець: Андронов Данило Юрійович, група ІС-43 (№1 у списку, Варіант №1).
 *
 * Кожне з 19 завдань Варіанта №1 оформлено в окремій ізольованій функції
 * з текстом умови у коментарі, щоб однакові імена змінних
 * (student, product, user, students, products) не конфліктували.
 */

// ============================================================================
// ПІДТЕМА 1. «Об'єкт» (Варіант №1: завдання 1, 9)
// ============================================================================

/*
 * Підтема 1 «Об'єкт» — Завдання 1. Створення об'єкта студента
 * Створіть об'єкт student, який містить такі властивості: firstName, lastName,
 * age, specialty, course. Заповніть властивості відповідними значеннями.
 * Виведіть об'єкт у консоль.
 */
function task1_1(
  student = {
    firstName: 'Данило',
    lastName: 'Андронов',
    age: 19,
    specialty: '126 Інформаційні системи та технології',
    course: 2,
  }
) {
  console.log('[1.1] Об\'єкт student:', student);
  return student;
}

/*
 * Підтема 1 «Об'єкт» — Завдання 9. Вкладені об'єкти
 * Створіть об'єкт user, який містить інформацію про користувача: ім'я,
 * прізвище, вік та вкладений об'єкт address. Об'єкт address повинен містити
 * місто, вулицю, номер будинку та поштовий індекс. Виведіть у консоль місто
 * та вулицю проживання користувача.
 */
function task1_9(
  user = {
    firstName: 'Данило',
    lastName: 'Андронов',
    age: 19,
    address: {
      city: 'Київ',
      street: 'Політехнічна',
      house: '14В',
      postalCode: '03056',
    },
  }
) {
  console.log(`[1.9] Місто проживання: ${user.address.city}, вулиця: ${user.address.street}`);
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
function task2_1(
  student = {
    name: 'Данило Андронов',
    age: 19,
    specialty: 'Інформаційні системи та технології',
    course: 2,
    group: 'ІС-43',
  }
) {
  const keys = Object.keys(student);
  console.log('[2.1] Ключі об\'єкта student:', keys);
  return keys;
}

/*
 * Підтема 2 «Методи об'єкта» — Завдання 8. Створення копії об'єкта
 * Створіть об'єкт product із властивостями name, price, category. Створіть
 * його поверхневу копію за допомогою Object.assign(). Змініть значення
 * властивості price у копії. Перевірте, чи змінився початковий об'єкт.
 */
function task2_8(
  product = {
    name: 'Готельний тур «Карпатський вікенд»',
    price: 4500,
    category: 'Туризм та готелі',
  },
  newCopyPrice = 3990
) {
  const originalPrice = product.price;
  const productCopy = Object.assign({}, product);
  productCopy.price = newCopyPrice;

  const isOriginalChanged = product.price !== originalPrice;
  console.log('[2.8] Початковий об\'єкт product:', product);
  console.log('[2.8] Поверхнева копія productCopy:', productCopy);
  console.log(
    `[2.8] Чи змінився початковий об'єкт? ${isOriginalChanged ? 'Так' : `Ні (price залишилась ${product.price})`}`
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
function task3_1(
  students = [
    { id: 1, name: 'Данило Андронов', age: 19, group: 'ІС-43' },
    { id: 2, name: 'Олена Коваленко', age: 18, group: 'ІС-43' },
    { id: 3, name: 'Максим Шевченко', age: 19, group: 'ІС-43' },
  ]
) {
  console.log('[3.1] Масив студентів:', students);
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
  const products = productsInput.slice();

  let indexToDelete = -1;
  for (let i = 0; i < products.length; i += 1) {
    if (products[i].id === targetId) {
      indexToDelete = i;
      break;
    }
  }

  let removedItem = null;
  if (indexToDelete !== -1) {
    [removedItem] = products.splice(indexToDelete, 1);
    console.log(`[3.7] Видалено товар з id=${targetId} (індекс ${indexToDelete}):`, removedItem);
  } else {
    console.log(`[3.7] Товар з id=${targetId} не знайдено, масив без змін.`);
  }

  console.log('[3.7] Оновлений масив товарів:', products);
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
function task4_1(
  student = {
    name: 'Данило Андронов',
    age: 19,
    group: 'ІС-43',
    course: 2,
  }
) {
  const { name, age, group, course } = student;
  console.log(`[4.1] Деструктуризація: ім'я=${name}, вік=${age}, група=${group}, курс=${course}`);
  return { name, age, group, course };
}

/*
 * Підтема 4 «Деструктуризація об'єктів» — Завдання 5. Отримання решти властивостей об'єкта
 * Створіть об'єкт student із властивостями name, age, group, email, phone, course.
 * За допомогою деструктуризації отримайте значення name та group, а оператор
 * rest (...) використайте для збереження решти властивостей в окремий об'єкт.
 * Виведіть усі результати.
 */
function task4_5(
  student = {
    name: 'Данило Андронов',
    age: 19,
    group: 'ІС-43',
    email: 'andronov.danylo@kpi.ua',
    phone: '+380671234567',
    course: 2,
  }
) {
  const { name, group, ...rest } = student;
  console.log(`[4.5] Ім'я: ${name}, Група: ${group}`);
  console.log('[4.5] Решта властивостей (...rest):', rest);
  return { name, group, rest };
}

/*
 * Підтема 4 «Деструктуризація об'єктів» — Завдання 10. Опрацювання об'єкта відповіді сервера
 * Створіть об'єкт response, який імітує відповідь сервера та містить вкладені
 * дані користувача: data.user.name, data.user.email, data.user.address.city,
 * а також властивість status. Використовуючи вкладену деструктуризацію та
 * перейменування властивостей, отримайте ім'я, електронну пошту, місто та
 * статус відповіді.
 */
function task4_10(
  response = {
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
  }
) {
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

  console.log(
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
  console.log(`[5.1] processValue(${value}, ${callback.name || 'callback'}) = ${result}`);
  return result;
}

/*
 * Підтема 5 «Callback (функції зворотного виклику)» — Завдання 7. Відкладене виконання повідомлення
 * Створіть функцію showMessage(), яка приймає текст повідомлення та функцію
 * зворотного виклику. Використовуючи setTimeout(), організуйте виклик callback
 * через 3 секунди. Передайте функцію, яка виводить повідомлення в консоль.
 */
function logDelayedMessage(message) {
  console.log(`[5.7] Відкладене повідомлення (через 3 секунди): "${message}"`);
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
  console.log(`[5.7] Заплановано відкладене повідомлення (затримка ${delayMs} мс)...`);
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

  console.log(`[6.1] greeting("${name}"): "${regularResult}"`);
  console.log(`[6.1] greetingArrow("${name}"): "${arrowResult}" (однакові: ${areEqual})`);

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
    // Стрілочна функція лексично успадковує this зовнішньої області (undefined у strict mode)
    getInfoArrow: () => this?.brand,
  };

  const methodBrand = car.getInfo();
  const arrowThisBrand = car.getInfoArrow();
  const arrowMessage = showBrand(car.brand);
  const explanation =
    'Стрілочна функція не має власного this і бере його з зовнішньої області видимості; ' +
    'тому для методів об\'єкта використовують звичайні методи, а стрілочній функції дані передають через параметр.';

  console.log(`[6.10] car.getInfo() (this.brand): "${methodBrand}"`);
  console.log(`[6.10] car.getInfoArrow() (лексичний this.brand): ${String(arrowThisBrand)}`);
  console.log(`[6.10] showBrand(car.brand): "${arrowMessage}"`);
  console.log(`[6.10] Пояснення: ${explanation}`);

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
  console.log(`[7.1] processNumber(${num}, (n) => n * 5) = ${result}`);
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
  if (!doc) return null;

  const inputEl = doc.getElementById('task-7-6-input');
  const outputEl = doc.getElementById('task-7-6-output');
  const buttonEl = doc.getElementById('task-7-6-button');
  const clearBtnEl = doc.getElementById('task-7-6-clear');
  const statusEl = doc.getElementById('task-7-6-status');
  const formEl = doc.getElementById('task-7-6-form');

  if (!inputEl) return null;

  const renderValue = (value) => {
    if (outputEl) {
      outputEl.textContent = value.length > 0 ? value : '(порожньо)';
    }
  };

  if (formEl) {
    formEl.addEventListener('submit', (event) => event.preventDefault());
  }

  // Стрілочний callback на подію input
  inputEl.addEventListener('input', (event) => {
    const currentValue = event.target.value;
    renderValue(currentValue);
    console.log(`[7.6] Подія input -> поточне значення: "${currentValue}"`);
  });

  if (buttonEl) {
    buttonEl.addEventListener('click', () => {
      const currentValue = inputEl.value;
      renderValue(currentValue);
      const statusText =
        currentValue.trim().length > 0
          ? `Підтверджено значення: "${currentValue}"`
          : 'Поле введення наразі порожнє.';
      if (statusEl) statusEl.textContent = statusText;
      console.log(`[7.6] Натиснуто кнопку -> ${statusText}`);
    });
  }

  if (clearBtnEl) {
    clearBtnEl.addEventListener('click', () => {
      inputEl.value = '';
      renderValue('');
      if (statusEl) statusEl.textContent = 'Поле очищено.';
      console.log('[7.6] Поле введення очищено.');
    });
  }

  return { inputEl, outputEl, buttonEl, clearBtnEl, statusEl };
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
      console.log(`[7.9] Promise .then(): "${message}"`);
      return { ok: true, message };
    })
    .catch((error) => {
      console.log(`[7.9] Promise .catch(): "${error.message}"`);
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
function task8_1(
  students = [
    { name: 'Данило Андронов', age: 19, group: 'ІС-43' },
    { name: 'Олена Коваленко', age: 18, group: 'ІС-43' },
    { name: 'Максим Шевченко', age: 19, group: 'ІС-43' },
  ]
) {
  const formattedLines = [];
  students.forEach((student, index) => {
    const info = `[8.1] Студент №${index + 1}: ${student.name}, вік: ${student.age}, група: ${student.group}`;
    formattedLines.push(info);
    console.log(info);
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
  products = [
    { id: 201, name: 'Тур у Яремче (2 ночі)', price: 4200 },
    { id: 202, name: 'Готель Буковель SPA', price: 6800 },
    { id: 203, name: 'Вікенд у Львові', price: 3100 },
  ],
  targetId = 202
) {
  const foundIndex = products.findIndex((item) => item.id === targetId);
  const message =
    foundIndex !== -1
      ? `[8.5] Товар з id=${targetId} знайдено за індексом ${foundIndex} (${products[foundIndex].name})`
      : `[8.5] Товар з id=${targetId} не знайдено (індекс -1)`;

  console.log(message);
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
function task8_8(
  products = [
    { name: 'Клавіатура механічна', price: 2500, quantity: 4 },
    { name: 'Миша бездротова', price: 1400, quantity: 6 },
    { name: 'Монітор 27"', price: 9800, quantity: 2 },
  ]
) {
  const totalCost = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  console.log(`[8.8] Загальна вартість товарів на складі: ${totalCost} грн`);
  return totalCost;
}

function runSubtopic(subtopicNumber) {
  const runners = {
    1: () => {
      console.log('=== Підтема 1. Об\'єкт (1, 9) ===');
      task1_1();
      task1_9();
    },
    2: () => {
      console.log('=== Підтема 2. Методи об\'єкта (1, 8) ===');
      task2_1();
      task2_8();
    },
    3: () => {
      console.log('=== Підтема 3. Масив об\'єктів (1, 7) ===');
      task3_1();
      task3_7();
      task3_7(undefined, 999);
    },
    4: () => {
      console.log('=== Підтема 4. Деструктуризація об\'єктів (1, 5, 10) ===');
      task4_1();
      task4_5();
      task4_10();
    },
    5: () => {
      console.log('=== Підтема 5. Callback-функції (1, 7) ===');
      task5_1(7);
      task5_1(12.5);
      task5_7();
    },
    6: () => {
      console.log('=== Підтема 6. Стрілочні функції (1, 10) ===');
      task6_1('Данило');
      task6_1('Олена');
      task6_10('Toyota');
      task6_10('Volkswagen');
    },
    7: () => {
      console.log('=== Підтема 7. Стрілочні функції як колбеки (1, 6, 9) ===');
      task7_1(8);
      task7_1(-3);
      console.log('[7.6] Подія input підключена до #task-7-6-input (у браузері).');
      return Promise.all([task7_9(false), task7_9(true)]);
    },
    8: () => {
      console.log('=== Підтема 8. Перебираючі методи масиву (1, 5, 8) ===');
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
  return runner ? runner() : undefined;
}

function runAllDemos() {
  console.log('=== Старт демонстрації ЛР №5 (Варіант №1, ІС-43, Андронов Данило) ===');
  const pending = [];
  for (let i = 1; i <= 8; i += 1) {
    const res = runSubtopic(i);
    if (res && typeof res.then === 'function') {
      pending.push(res);
    }
  }
  return Promise.all(pending);
}

function initBrowserUi() {
  if (typeof document === 'undefined') return;

  initTask7_6(document);

  document.getElementById('run-all-demos-btn')?.addEventListener('click', () => {
    runAllDemos();
  });

  document.querySelectorAll('[data-subtopic]').forEach((btn) => {
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
