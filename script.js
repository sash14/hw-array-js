// ЗАДАНИЕ 0.
// Массив, со значениями от -100 до 100.

var array1 = [];

// Создает рандомное число
function rand(max, min) {
  c = Math.floor(Math.random() * (max - min + 1)) + min;
  return c;
}

for (var i = 0; i < 100; i++) {
  array1[i] = rand(100, -100);
}

console.log("Массив от -100 до 100");
console.log(array1);

// ЗАДАНИЕ 1. (расскоментировать с 26 по 86 строки)
// Массив, с рандомными числами от -100 до 100.
// Вывести все положительные и отрицательные числа в отдельные массивы.
// Найти минимальное и максимальное значение.
// Найти сумму всех значений в массиве.

// var poloj = [],
//   otric = [];

// // Распределяет значения по массивам
// for (var n = 0; n < array1.length; n++) {
//   if (Math.sign(array1[n]) == "1") {
//     poloj[poloj.length] = array1[n];
//   } else if (Math.sign(array1[n]) == "-1") {
//     otric[otric.length] = array1[n];
//   }
// }

// // Функция ищет минимальное значение в массиве
// function findMin(arr) {
//   var minValue = arr[0];
//   for (m = 0; m < arr.length; m++) {
//     if (arr[m] < minValue) {
//       minValue = arr[m];
//     }
//   }
//   return minValue;
// }

// // Функция ищет максимальное значение в массиве
// function findMax(arr) {
//   var maxValue = arr[0];
//   for (m = 0; m < arr.length; m++) {
//     if (arr[m] > maxValue) {
//       maxValue = arr[m];
//     }
//   }
//   return maxValue;
// }

// Сумма всех чисел в массиве
// function sum(arr) {
//   var sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(
//   "Положительные. Минимальное значение: " +
//     findMin(poloj) +
//     ". Максимальное значение " +
//     findMax(poloj) +
//     ". Сумма всех отрицательных: " +
//     sum(otric)
// );
// console.log(poloj);

// console.log(
//   "Отрицательные.  Минимальное значение: " +
//     findMin(otric) +
//     ". Максимальное значение " +
//     findMax(otric) +
//     ". Сумма всех положительных: " +
//     sum(poloj)
// );
// console.log(otric);

// // КОНЕЦ ПЕРВОГО ЗАДАНИЯ

// // ЗАДАНИЕ 2 (расскоментировать с 93 по 103)
// // Посчитать, сколько в массиве чисел, кратных тому, которое вводит пользователь.

// var userNum = +prompt("Введите число");
// var arrayKrat = [];

// for (i = 0; i < array1.length; i++) {
//   if (array1[i] % userNum == 0) {
//     arrayKrat[arrayKrat.length] = array1[i];
//   }
// }

// console.log(arrayKrat);
// console.log("Количество чисел крастные " + userNum + ": " + arrayKrat.length);

// // Конец второго задания.

// ЗАДАНИЕ 3. (раскоментировать с 108 по 123)
// Пользователь вводит диапазон.
// Создать массив без чисел, которые входят в этот диапазон.

// var userNumMin = +prompt("Введите число 1");
// var userNumMax = +prompt("Введите число 2");
// var newArr = [];

// for (i = 0; i < array1.length; i++) {
//   if (array1[i] > userNumMin && array1[i] < userNumMax) {
//   } else {
//     newArr[newArr.length] = array1[i];
//   }
// }

// console.log("Массив без значений в диапазоне от " + userNumMin + " - " + userNumMax);
// console.log(newArr);

// ЗАДАНИЕ 4.
// Пользователь вводит npm, git.
// Вывести команды.

// ЗАДАНИЕ 5.
// Найти в документации, модуль date, как получить текущий час и в зависимости какое время
// Браузер пользователя должен изменять цвет

// var h = new Date().getHours();
// // var h = 22;
// var body = document.getElementsByTagName("body");
// var style = body[0].style;

// console.log(h);

// if (h > 21) {
//   style.color = "white";
//   style.backgroundColor = "black";
// }

// // Конец пятого задания.
