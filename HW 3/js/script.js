// Домашнє завдання

// -- 1 --

// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: 'Apple' },
//   { id: 1, name: 'Tomat' },
//   { id: 2, name: 'Cherry' },
//   { id: 3, name: 'Orange' },
// ];

// let newArray = fruts.map(item => item.name);
// console.log(newArray);

// -- 2 --

//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 1) continue;
//   console.log(i);
// }

// -- 3 --

//Замініть цикл "for" на "while"

// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }

// let i = 0;
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// };

// -- 4 --

//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let numb;

// do {
//   numb = Number.parseInt(prompt('Введіть число більше за 100'));
// } while (numb <= 100 && numb);

// -- 5 --

// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: 'Оля' },
//   { age: 29, name: 'Аня' },
//   { age: 10, name: 'Юля' },
//   { age: 20, name: 'Катя' },
// ];

// let middleAge = girls.reduce((summ, item) => summ + item.age, 0) / girls.length;
// console.log(middleAge);
