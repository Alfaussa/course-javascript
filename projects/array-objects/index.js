/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el))
 */
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

/// Пример с ForEach
// let array = [1, 2, 3]
// array.forEach(function(i) {
//   console.log(i);
// });

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
 */

function map(array, fn) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = fn(array[i], i, array);
  }
  return newArray;
}

// let array = [1, 2, 3];
// console.log(map(array));
//Пример с Map
// let array = [1, 2, 3];
// let double = array.map(item => item ** 2);
// console.log(double);

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6
 */

function reduce(array, fn, initial) {
  let i = 0;
  if (initial === undefined) {
    initial = array[0];
    i++;
  }
  for (i; i < array.length; i++) {
    initial = fn(initial, array[i], i, array);
  }
  return initial;
}
// let result = reduce([1, 2, 3], (all, current) => all + current) ;
// console.log(result);

//Пример с reduce

// let array = [1, 2, 3];
// let reduceResult = array.reduce((previousValue, currentValue) => previousValue + currentValue);
// console.log(reduceResult);

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */

function upperProps(obj) {
  const newArr = [];
  for (const key in obj) {
    newArr.push(key.toUpperCase());
  }
  return newArr;
}

/*
 Задание 5 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат

 Пример:
   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 */
function createProxy(obj) {
  return new Proxy(obj, {
    set(obj, key, value) {
      obj[key] = value ** 2;
      return true;
    },
  });
}
// const obj = createProxy({});
// obj.foo = 2;
// console.log(obj.foo); // 4
export { forEach, map, reduce, upperProps, createProxy };
