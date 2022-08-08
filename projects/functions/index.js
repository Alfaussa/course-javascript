/* ДЗ 1 - Функции */

/*
 Задание 1:

 1.1: Добавьте к функции параметр с любым именем
 1.2: Функция должна возвращать аргумент, переданный ей в качестве параметра
 Другими словами: функция должна возвращать в неизменном виде то, что поступает ей на вход
 */
function returnFirstArgument(value) {
  return value;
}

/*
 Задание 2:

 2.1: Функция должна возвращать сумму переданных аргументов
 */
function sumWithDefaults(a, b = 100) {
  return a + b;
}
const sumResult = sumWithDefaults(5);
console.log(sumResult);

/*
 Задание 3:

 Функция должна принимать другую функцию и возвращать результат вызова этой функции
 */
function returnFnResult(fn) {
  return fn();
}
function func() {
  return;
}
const result = returnFnResult(func);
result();

/*
 Задание 4:

 Функция должна принимать число (если ничего не передано, то воспринимать как 0) и возвращать новую функцию (F)
 При вызове функции F, переданное ранее число должно быть увеличено на единицу и возвращено из F
 */

function returnCounter(number) {
  function F() {
    number = (number || 0) + 1;
    return number;
  }
  return F;
}

//  Задание 5 *:

//  Функция должна возвращать все переданные ей аргументы в виде массива
//  Количество переданных аргументов заранее неизвестно

function returnArgumentsArray(...args) {
  const arr = [];
  arr.push(...args);
  return arr;
}

/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
*/

function bindFunction(fn, ...args) {
  return fn.bind(null, ...args);
}

export {
  returnFirstArgument,
  sumWithDefaults,
  returnArgumentsArray,
  returnFnResult,
  returnCounter,
  bindFunction,
};
