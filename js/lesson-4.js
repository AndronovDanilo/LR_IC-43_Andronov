/**
 * Лабораторна робота №4: Функціональне застосування JS у HTML-документі
 * Студент: Андронов Данило Юрійович, група ІС-43, №1 у списку (Варіант 1 / непарні номери)
 */

'use strict';

// ============================================================================
// ЗАВДАННЯ 1 (Непарні номери студентів за списком: 1, 3, 5…)
// ============================================================================
/*
Умова:
Збережіть введене значення (використати метод prompt()) у змінну value.
Вивести це значення у Console, використовуючи шаблонний рядок.
Перевірити: введене значення від’ємне? Додатнє? Дорівнює нулю?
Відповідь вивести за допомогою alert().
Наприклад: при введенні 80 виведе «Число додатнє».
Підказка: При введенні значень не забудьте зробити ряд перевірок.
*/
function classifyNumber(rawValue) {
  if (rawValue === null) {
    return 'Введення скасовано';
  }
  const trimmed = String(rawValue ?? '').trim();
  if (trimmed === '') {
    return 'Помилка: введіть коректне число';
  }
  const numericValue = Number(trimmed);
  if (!Number.isFinite(numericValue)) {
    return 'Помилка: введіть коректне число';
  }
  if (numericValue > 0) return 'Число додатнє';
  if (numericValue < 0) return 'Число від’ємне';
  return 'Число дорівнює нулю';
}

function runTask1(
  promptFn = (msg) => globalThis.prompt(msg),
  alertFn = (msg) => globalThis.alert(msg)
) {
  const value = promptFn('Завдання 1: Введіть число:');
  console.log(`Завдання 1 — введене значення: ${value}`);
  const message = classifyNumber(value);
  console.log(`Завдання 1 — результат: ${message}`);
  alertFn(message);
  return { value, message };
}

// ============================================================================
// ЗАВДАННЯ 2 (Непарні номери студентів за списком: 1, 3, 5…)
// ============================================================================
/*
Умова:
Змінна number може набувати 4 значення: '1', '2', '3' або '4' (запитуй це значення
у користувача через prompt). Якщо вона має значення '1', то у змінну result
запишіть 'зима', якщо має значення '2' - 'весна' і так далі.
Розв'яжіть завдання через switch-case. Не забудьте про дефолтне значення, на випадок,
якщо користувач введе в prompt щось інше. Значення змінної result виведіть в консоль.
*/
function getSeason(number) {
  const normalized = typeof number === 'string' ? number.trim() : number;
  let result;
  switch (normalized) {
    case '1':
      result = 'зима';
      break;
    case '2':
      result = 'весна';
      break;
    case '3':
      result = 'літо';
      break;
    case '4':
      result = 'осінь';
      break;
    default:
      result = 'Невірне значення. Введіть 1, 2, 3 або 4.';
      break;
  }
  return result;
}

function runTask2(
  promptFn = (msg) => globalThis.prompt(msg),
  alertFn = (msg) => globalThis.alert(msg)
) {
  const number = promptFn("Завдання 2: Введіть значення number ('1', '2', '3' або '4'):");
  const result = getSeason(number);
  console.log(`Завдання 2 — number=${number} → result: ${result}`);
  if (typeof alertFn === 'function') {
    alertFn(`Пора року: ${result}`);
  }
  return { number, result };
}

// ============================================================================
// ЗАВДАННЯ 3 (Непарні номери студентів за списком: 1, 3, 5…)
// ============================================================================
/*
Умова:
Є Admin та User, з відповідними паролями. (Об’явити, проініцілізувати)
Написати програмний код, який запитуватиме у користувача логін (використати prompt)
і виводить результат в консоль браузера, використовуючи шаблонний рядок.
Після цього додайте перевірку введеного користувачем значення: якщо відвідувач вводить
"Admin", то prompt запитує пароль. У випадку вдалої ідентифікації в alert вивести
«Hello, Admin»; якщо нічого не ввели або натиснули Cancel, то вивести в alert рядок
"Cancelled"; в іншому випадку вивести в alert рядок "I don't know you".
Теж саме виконати з User.
*/
const DEMO_USERS = Object.freeze({
  Admin: 'admin123',
  User: 'user123'
});

function authenticateUser(login, password) {
  const normalizedLogin = login == null ? '' : String(login).trim();
  if (normalizedLogin === '') {
    return 'Cancelled';
  }
  if (!Object.hasOwn(DEMO_USERS, normalizedLogin)) {
    return "I don't know you";
  }
  if (password === undefined) {
    return 'NEED_PASSWORD';
  }
  if (password === null || String(password).trim() === '') {
    return 'Cancelled';
  }
  return String(password) === DEMO_USERS[normalizedLogin]
    ? `Hello, ${normalizedLogin}`
    : 'Wrong password';
}

function runTask3(
  promptFn = (msg) => globalThis.prompt(msg),
  alertFn = (msg) => globalThis.alert(msg)
) {
  const login = promptFn('Завдання 3: Введіть логін (Admin або User):');
  console.log(`Завдання 3 — введений логін: ${login}`);

  let message = authenticateUser(login);
  if (message === 'NEED_PASSWORD') {
    const password = promptFn(`Введіть пароль для ${String(login).trim()}:`);
    message = authenticateUser(login, password);
  }

  console.log(`Завдання 3 — результат: ${message}`);
  alertFn(message);
  return { login, message };
}

// ============================================================================
// ЗАВДАННЯ 4 (Непарні номери студентів за списком: 1, 3, 5…)
// ============================================================================
/*
Умова:
Станція з продажу ремонтних дроїдів. Оголоси функцію makeTransaction, яка очікує
два параметри, значення яких будуть задаватися під час її виклику:
• quantity — перший параметр, число, що містить кількість замовлених дроїдів
• pricePerDroid — другий параметр, число, що містить вартість одного дроїда
Напиши код функції так, щоб вона повертала рядок з повідомленням про покупку
ремонтних дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!", де:
• <quantity> — це кількість замовлених дроїдів
• <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів.
*/
function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

function demoTask4() {
  console.log('=== Завдання 4: makeTransaction ===');
  console.log('makeTransaction(5, 3000) ->', makeTransaction(5, 3000));
  console.log('makeTransaction(3, 1000) ->', makeTransaction(3, 1000));
  console.log('makeTransaction(10, 500) ->', makeTransaction(10, 500));
}

// ============================================================================
// ЗАВДАННЯ 5 (Непарні номери студентів за списком: 1, 3, 5…)
// ============================================================================
/*
Умова:
Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на
вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку
параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.
Доповни код функції таким чином, що:
Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true.
Якщо в рядку відсутні заборонені слова, функція повертає буль false.
*/
function checkForSpam(message) {
  const lower = String(message).toLowerCase();
  return lower.includes('spam') || lower.includes('sale');
}

function demoTask5() {
  console.log('=== Завдання 5: checkForSpam ===');
  const samples = [
    'Latest technology news',
    'JavaScript weekly newsletter',
    'Get best sale offers now!',
    'Amazing SalE, only tonight!',
    'Trust me, this is not a spam message',
    'Get rid of sPaM emails. Our book in on sale!',
    '[SPAM] How to earn fast money?'
  ];
  for (const text of samples) {
    console.log(`"${text}" -> ${checkForSpam(text)}`);
  }
}

// ============================================================================
// ЗАВДАННЯ 6 (Непарні номери студентів за списком: 1, 3, 5…)
// ============================================================================
/*
Умова:
Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та
значення (value) як параметри. Функція повинна повертати новий масив лише тих чисел
із масиву numbers, які більші за значення value.
Усередині функції:
• Створи порожній масив, у який будеш додавати підходящі числа.
• Використай цикл для ітерації кожного елемента масиву numbers.
• Використовуй умовний оператор if усередині циклу для перевірки кожного елемента
  і додавання до свого масиву.
• Поверни свій новий масив з підходящими числами як результат.
*/
function filterArray(numbers, value) {
  const filteredNumbers = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }
  return filteredNumbers;
}

function demoTask6() {
  console.log('=== Завдання 6: filterArray ===');
  const cases = [
    [[1, 2, 3, 4, 5], 3],
    [[1, 2, 3, 4, 5], 4],
    [[1, 2, 3, 4, 5], 5],
    [[12, 24, 8, 41, 76], 38],
    [[12, 24, 8, 41, 76], 20]
  ];
  for (const [numbers, value] of cases) {
    console.log(`filterArray(${JSON.stringify(numbers)}, ${value}) ->`, filterArray(numbers, value));
  }
}

function runTasks4To6Demo() {
  demoTask4();
  demoTask5();
  demoTask6();
}

// ============================================================================
// ЗАВДАННЯ 7 (Варіант 1)
// ============================================================================
/*
Умова:
1. Створити одновимірний масив, кількість елементів якого задана користувачем.
Знайти максимальний серед парних елементів та мінімальний серед елементів з парними
індексами. В масиві поміняти місцями знайдені максимальний та мінімальний елементи,
надрукувати вхідний та вихідний масиви. Застосувати функції.
2. Виконати сортування вихідного масиву за зростанням методом вставки. Застосувати функції.
*/
function generateRandomArray(length, min = -20, max = 50, rng = Math.random) {
  if (!Number.isInteger(length) || length < 2) {
    throw new RangeError('Кількість елементів масиву має бути цілим числом >= 2.');
  }
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(Math.floor(rng() * (max - min + 1)) + min);
  }
  return result;
}

function findMaxEvenIndex(arr) {
  let maxIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (Number.isInteger(arr[i]) && arr[i] % 2 === 0) {
      if (maxIndex === -1 || arr[i] > arr[maxIndex]) {
        maxIndex = i;
      }
    }
  }
  return maxIndex;
}

function findMinAtEvenIndex(arr) {
  if (arr.length === 0) return -1;
  let minIndex = 0;
  for (let i = 2; i < arr.length; i += 2) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
}

function swapMaxEvenAndMinAtEvenIndex(arr) {
  const inputArray = [...arr];
  const outputArray = [...arr];
  const maxEvenIndex = findMaxEvenIndex(inputArray);
  const minAtEvenIndex = findMinAtEvenIndex(inputArray);

  if (maxEvenIndex === -1) {
    return {
      inputArray,
      outputArray,
      maxEvenIndex: -1,
      minAtEvenIndex,
      swapped: false,
      warning: 'У масиві відсутні парні елементи, обмін не виконано.'
    };
  }

  [outputArray[maxEvenIndex], outputArray[minAtEvenIndex]] = [
    outputArray[minAtEvenIndex],
    outputArray[maxEvenIndex]
  ];

  return {
    inputArray,
    outputArray,
    maxEvenIndex,
    minAtEvenIndex,
    swapped: true,
    warning: null
  };
}

function insertionSort(arr) {
  const sorted = [...arr];
  for (let i = 1; i < sorted.length; i += 1) {
    const key = sorted[i];
    let j = i - 1;
    while (j >= 0 && sorted[j] > key) {
      sorted[j + 1] = sorted[j];
      j -= 1;
    }
    sorted[j + 1] = key;
  }
  return sorted;
}

function runTask7(
  promptFn = (msg, def) => globalThis.prompt(msg, def),
  alertFn = (msg) => globalThis.alert(msg),
  rng = Math.random
) {
  const rawLength = promptFn('Завдання 7: Введіть кількість елементів масиву (ціле число >= 2):', '8');
  if (rawLength === null) {
    console.log('Завдання 7 — введення скасовано користувачем.');
    return null;
  }
  const trimmed = String(rawLength).trim();
  if (!/^\d+$/.test(trimmed) || Number(trimmed) < 2) {
    const errMsg = 'Помилка: введіть ціле число >= 2.';
    console.log(`Завдання 7 — ${errMsg}`);
    alertFn(errMsg);
    return null;
  }

  const length = Number(trimmed);
  const generated = generateRandomArray(length, -20, 50, rng);
  const swapRes = swapMaxEvenAndMinAtEvenIndex(generated);
  const sortedArray = insertionSort(swapRes.outputArray);

  console.log('=== Завдання 7 (Варіант 1) ===');
  console.log(`Вхідний масив (n=${length}):`, swapRes.inputArray);
  if (swapRes.warning) {
    console.log(`Попередження: ${swapRes.warning}`);
  } else {
    console.log(
      `Макс. парний елемент: ${swapRes.inputArray[swapRes.maxEvenIndex]} (індекс ${swapRes.maxEvenIndex}); ` +
        `Мін. на парному індексі: ${swapRes.inputArray[swapRes.minAtEvenIndex]} (індекс ${swapRes.minAtEvenIndex})`
    );
  }
  console.log('Вихідний масив після обміну:', swapRes.outputArray);
  console.log('Відсортований масив (Insertion Sort):', sortedArray);

  return { ...swapRes, sortedArray };
}

// ============================================================================
// ЗАВДАННЯ 8 (Непарні номери студентів за списком: 1, 3, 5…)
// ============================================================================
/*
Умова:
Є двовимірний масив додатніх і від’ємних чисел. (об’явити, проініціалізувати
генератором випадкових чисел). Вивести у Console браузера.
Створити два масива: масив додатніх чисел і масив від’ємних чисел.
Третій елемент у додатньому масиві заміни на від’ємне значення, яке буде введено
за допомогою prompt. Вивести у Console браузера.
*/
function generateRandomMatrix(rows = 4, cols = 4, min = -50, max = 50, rng = Math.random) {
  const matrix = [];
  let positiveCount = 0;

  for (let r = 0; r < rows; r += 1) {
    const row = [];
    for (let c = 0; c < cols; c += 1) {
      let val = Math.floor(rng() * (max - min + 1)) + min;
      if (val === 0) val = max >= 1 ? 1 : -1;
      if (val > 0) positiveCount += 1;
      row.push(val);
    }
    matrix.push(row);
  }

  // Гарантуємо щонайменше 3 додатних числа для заміни 3-го елемента
  for (let r = 0; r < rows && positiveCount < 3; r += 1) {
    for (let c = 0; c < cols && positiveCount < 3; c += 1) {
      if (matrix[r][c] < 0) {
        matrix[r][c] = Math.abs(matrix[r][c]);
        positiveCount += 1;
      }
    }
  }

  return matrix;
}

function splitMatrixBySign(matrix) {
  const positive = [];
  const negative = [];
  for (const row of matrix) {
    for (const value of row) {
      if (value > 0) positive.push(value);
      else if (value < 0) negative.push(value);
    }
  }
  return { positive, negative };
}

function splitMatrixAndReplaceThirdPositive(matrix, replacementValue) {
  const { positive, negative } = splitMatrixBySign(matrix);

  if (positive.length < 3) {
    return {
      ok: false,
      error: 'У масиві додатних чисел менше 3 елементів.',
      positive,
      negative,
      updatedPositive: null
    };
  }

  if (typeof replacementValue !== 'number' || !Number.isFinite(replacementValue) || replacementValue >= 0) {
    return {
      ok: false,
      error: 'Значення для заміни має бути суворо від’ємним числом (< 0).',
      positive,
      negative,
      updatedPositive: null
    };
  }

  const updatedPositive = [...positive];
  const replacedValue = updatedPositive[2];
  updatedPositive[2] = replacementValue;

  return {
    ok: true,
    positive,
    negative,
    updatedPositive,
    replacedValue,
    replacementValue,
    error: null
  };
}

function runTask8(
  promptFn = (msg, def) => globalThis.prompt(msg, def),
  alertFn = (msg) => globalThis.alert(msg),
  rng = Math.random
) {
  const matrix = generateRandomMatrix(4, 4, -50, 50, rng);
  const { positive, negative } = splitMatrixBySign(matrix);

  console.log('=== Завдання 8 (2D-масив 4×4) ===');
  console.log(`Початковий двовимірний масив:\n${matrix.map((row) => `  [${row.join(', ')}]`).join('\n')}`);
  console.log('Масив додатних чисел (до заміни):', positive);
  console.log('Масив від’ємних чисел:', negative);

  const rawReplacement = promptFn(
    'Завдання 8: Введіть від’ємне число (< 0) для заміни 3-го елемента додатного масиву:',
    '-25'
  );
  if (rawReplacement === null) {
    console.log('Завдання 8 — заміну скасовано користувачем.');
    return null;
  }

  const trimmed = String(rawReplacement).trim();
  const numericValue = trimmed === '' ? Number.NaN : Number(trimmed);
  const result = splitMatrixAndReplaceThirdPositive(matrix, numericValue);

  if (!result.ok) {
    console.log(`Завдання 8 — помилка: ${result.error}`);
    alertFn(result.error);
    return result;
  }

  console.log(`Замінено 3-й елемент (${result.replacedValue}) на ${result.replacementValue}`);
  console.log('Оновлений масив додатних чисел:', result.updatedPositive);
  console.log('Масив від’ємних чисел:', result.negative);
  return result;
}

// ============================================================================
// ЗАВДАННЯ 9 (Варіант 1 — Валідація HTML-форми реєстрації користувача)
// ============================================================================
/*
Умова:
Валідація HTML-форми реєстрації користувача:
Забезпечити перевірку елементів HTML-форми таких видів: ціле число, дійсне число,
дата у форматі DD.MM.YYYY, однаковість даних у полях введення паролю (основне та
перевірочне). Крім того, забезпечити перевірку введення обов’язкових полів,
помічених (*).
*/
function isIntegerString(rawValue) {
  return /^[+-]?\d+$/.test(String(rawValue).trim());
}

function isRealNumberString(rawValue) {
  return /^[+-]?(\d+(\.\d+)?|\.\d+)$/.test(String(rawValue).trim());
}

function isValidDateDDMMYYYY(rawDate) {
  const match = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(String(rawDate ?? '').trim());
  if (!match) return false;

  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);
  if (year < 1 || month < 1 || month > 12 || day < 1) return false;

  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return day <= daysInMonth[month - 1];
}

function validateRegistrationForm(fields = {}) {
  const errors = {};
  const username = String(fields.username ?? '').trim();
  const age = String(fields.age ?? '').trim();
  const budget = String(fields.budget ?? '').trim();
  const birthDate = String(fields.birthDate ?? '').trim();
  const password = String(fields.password ?? '');
  const confirmPassword = String(fields.confirmPassword ?? '');

  if (username === '') {
    errors.username = 'Обов’язкове поле (*): введіть логін користувача.';
  }

  if (age === '') {
    errors.age = 'Обов’язкове поле (*): введіть ціле число.';
  } else if (!isIntegerString(age)) {
    errors.age = 'Введіть коректне ціле число (наприклад: 19).';
  }

  if (budget !== '' && !isRealNumberString(budget)) {
    errors.budget = 'Введіть коректне дійсне число (наприклад: 4500.50).';
  }

  if (birthDate === '') {
    errors.birthDate = 'Обов’язкове поле (*): введіть дату у форматі DD.MM.YYYY.';
  } else if (!isValidDateDDMMYYYY(birthDate)) {
    errors.birthDate = 'Некоректна дата. Використовуйте дійсну календарну дату DD.MM.YYYY.';
  }

  if (password.trim() === '') {
    errors.password = 'Обов’язкове поле (*): введіть пароль.';
  }

  if (confirmPassword.trim() === '') {
    errors.confirmPassword = 'Обов’язкове поле (*): підтвердьте пароль.';
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'Паролі не співпадають.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

// ============================================================================
// Ініціалізація DOM-інтерфейсу у браузері
// ============================================================================
function initLesson4Page() {
  if (typeof document === 'undefined') return;

  document.getElementById('btn-task-1')?.addEventListener('click', () => runTask1());
  document.getElementById('btn-task-2')?.addEventListener('click', () => runTask2());
  document.getElementById('btn-task-3')?.addEventListener('click', () => runTask3());
  document.getElementById('btn-task-4-6')?.addEventListener('click', () => runTasks4To6Demo());
  document.getElementById('btn-task-7')?.addEventListener('click', () => runTask7());
  document.getElementById('btn-task-8')?.addEventListener('click', () => runTask8());

  runTasks4To6Demo();

  const regForm = document.getElementById('registration-form');
  const statusBanner = document.getElementById('reg-form-status');
  const fieldIds = {
    username: 'reg-username',
    age: 'reg-age',
    budget: 'reg-budget',
    birthDate: 'reg-birthdate',
    password: 'reg-password',
    confirmPassword: 'reg-confirm-password'
  };

  const clearValidationUI = () => {
    for (const [field, inputId] of Object.entries(fieldIds)) {
      document.getElementById(inputId)?.classList.remove('input-invalid', 'input-valid');
      const errEl = document.getElementById(`err-${field}`);
      if (errEl) errEl.textContent = '';
    }
    if (statusBanner) {
      statusBanner.className = 'form-status';
      statusBanner.textContent = '';
    }
  };

  if (regForm) {
    regForm.addEventListener('submit', (event) => {
      event.preventDefault();
      clearValidationUI();

      const fields = {};
      for (const [field, inputId] of Object.entries(fieldIds)) {
        fields[field] = document.getElementById(inputId)?.value ?? '';
      }

      const validation = validateRegistrationForm(fields);

      for (const [field, inputId] of Object.entries(fieldIds)) {
        const inputEl = document.getElementById(inputId);
        const errEl = document.getElementById(`err-${field}`);
        const errorMsg = validation.errors[field];
        if (errorMsg) {
          inputEl?.classList.add('input-invalid');
          if (errEl) errEl.textContent = errorMsg;
        } else if (inputEl && (fields[field].trim() !== '' || field !== 'budget')) {
          inputEl.classList.add('input-valid');
        }
      }

      if (validation.isValid) {
        if (statusBanner) {
          statusBanner.className = 'form-status is-visible is-success';
          statusBanner.textContent = `Успіх! Користувача "${fields.username.trim()}" успішно перевірено та зареєстровано.`;
        }
        console.log(`=== Завдання 9: Валідація успішна === Користувач: ${fields.username.trim()}, дата: ${fields.birthDate.trim()}`);
      } else {
        if (statusBanner) {
          statusBanner.className = 'form-status is-visible is-error';
          statusBanner.textContent = 'Перевірку не пройдено. Виправте виділені помилки у формі.';
        }
        console.log('=== Завдання 9: Помилки валідації ===', validation.errors);
      }
    });

    regForm.addEventListener('reset', () => setTimeout(clearValidationUI, 0));
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initLesson4Page);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    classifyNumber,
    runTask1,
    getSeason,
    runTask2,
    DEMO_USERS,
    authenticateUser,
    runTask3,
    makeTransaction,
    demoTask4,
    checkForSpam,
    demoTask5,
    filterArray,
    demoTask6,
    runTasks4To6Demo,
    generateRandomArray,
    findMaxEvenIndex,
    findMinAtEvenIndex,
    swapMaxEvenAndMinAtEvenIndex,
    insertionSort,
    runTask7,
    generateRandomMatrix,
    splitMatrixBySign,
    splitMatrixAndReplaceThirdPositive,
    runTask8,
    isIntegerString,
    isRealNumberString,
    isValidDateDDMMYYYY,
    validateRegistrationForm,
    initLesson4Page
  };
}
