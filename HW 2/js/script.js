// Домашнє завдання

// 1

// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3

// let num;
// num = 1; //true
// num = 0; //false
// num = -3; //false

// if (num > 0) {
//   console.log('true');// В задачі не уточнено що має виводити - текст true, або бульове значення, тому я вказав бульове значення, щоб було привязано саме до нього
// } else {
//   console.log('false');
// }

// 2
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test',"qwerty",true

// let a;
// a = 'test';
// a = 'qwerty';
// a = true;

// a === 'test' ? console.log(true) : console.log(false);

//3

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// let num;
// num = 1;
// num = 10;
// num = 13;

// num > 10 ? console.log(num - 5) : console.log(num + 5);

//4
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let num = prompt('Введіть число від 1 до 12');
// let month;
// switch (num) {
//   case '1':
//     month = 'Січень';
//     alert(month);
//     break;

//   case '2':
//     month = 'Лютий';
//     alert(month);
//     break;

//   case '3':
//     month = 'Березень';
//     alert(month);
//     break;

//   case '4':
//     month = 'Квітень';
//     alert(month);
//     break;

//   case '5':
//     month = 'Травень';
//     alert(month);
//     break;

//   case '6':
//     month = 'Червень';
//     alert(month);
//     break;

//   case '7':
//     month = 'Липень';
//     alert(month);
//     break;

//   case '8':
//     month = 'Серпень';
//     alert(month);
//     break;

//   case '9':
//     month = 'Вересень';
//     alert(month);
//     break;

//   case '10':
//     month = 'Жовтень';
//     alert(month);
//     break;

//   case '11':
//     month = 'Листопад';
//     alert(month);
//     break;

//   case '12':
//     month = 'Грудень';
//     alert(month);
//     break;

//   default:
//     alert(`Число ${num} не входить до переліку`);
// }

//5

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let num = prompt('Введіть тризначне число');

// num.length === 3
//   ? alert(
//       Number.parseInt(num[0]) +
//         Number.parseInt(num[1]) +
//         Number.parseInt(num[2]),
//     )
//   : alert(`${num} не є тризначним числом`);
