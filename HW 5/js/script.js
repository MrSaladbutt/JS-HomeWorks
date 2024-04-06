// --1--

// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити значення за допомогою call apply bind

// Загальний об`єкт

// const studentInfo = {
//   name: 'name',
//   specialty: 'specialty',
//   gpa: 'gpa',
//   missedСlasses: 'missed',
//   showInfo: function () {
//     alert(
//       `Студент ${this.name} має спеціальність ${this.specialty}, середній бал ${this.gpa} та ${this.missedСlasses} пропущених занять. `,
//     );
//   },
// };

// Поіменні об`єкти

// const igorInfo = {
//   name: 'Ігор',
//   specialty: 'фармацевт',
//   gpa: '4.1',
//   missedСlasses: '2',
// };

// studentInfo.showInfo.bind(igorInfo)();
// studentInfo.showInfo.call(igorInfo);
// studentInfo.showInfo.apply(igorInfo);

// const annaInfo = {
//   name: 'Анна',
//   specialty: 'механік',
//   gpa: '3.4',
//   missedСlasses: '10',
// };

// studentInfo.showInfo.bind(annaInfo)();
// studentInfo.showInfo.call(annaInfo);
// studentInfo.showInfo.apply(annaInfo);

// const tarasInfo = {
//   name: 'Тарас',
//   specialty: 'кухар',
//   gpa: '3.9',
//   missedСlasses: '7',
// };

// studentInfo.showInfo.bind(tarasInfo)();
// studentInfo.showInfo.call(tarasInfo);
// studentInfo.showInfo.apply(tarasInfo);

// А цей приклад для додавання параметрів у функцію

// const studentInfo = {
//   name: 'name',
//   specialty: 'specialty',
//   gpa: 'gpa',
//   missedСlasses: 'missed',
//   showInfo: function (gpa, missedСlasses) {
//     alert(
//       `Студент ${this.name} має спеціальність ${this.specialty}, середній бал ${gpa} та ${missedСlasses} пропущених занять. `,
//     );
//   },
// };

// const igorInfo = {
//   name: 'Ігор',
//   specialty: 'фармацевт',
// };

// studentInfo.showInfo.bind(igorInfo, '4.1', '2')();
// studentInfo.showInfo.call(igorInfo, '4.1', '2');
// studentInfo.showInfo.apply(igorInfo, ['4.1', '2']);

// const annaInfo = {
//   name: 'Анна',
//   specialty: 'механік',
// };

// studentInfo.showInfo.bind(annaInfo, '3.4', '10')();
// studentInfo.showInfo.call(annaInfo, '3.4', '10');
// studentInfo.showInfo.apply(annaInfo, ['3.4', '10']);

// const tarasInfo = {
//   name: 'Тарас',
//   specialty: 'кухар',
// };

// studentInfo.showInfo.bind(tarasInfo, '3.9', '7')();
// studentInfo.showInfo.call(tarasInfo, '3.9', '7');
// studentInfo.showInfo.apply(tarasInfo, ['3.9', '7']);

// --2--

// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const buttonInfo = {
//   showInfo() {
//     alert(`${this.name} - це ${this.info}`);
//   },
// };

// const html = {
//   name: 'HTML',
//   info: 'мова розмітки документів для перегляду вебсторінок у браузері.',
// };

// const css = {
//   name: 'CSS',
//   info: 'мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду.',
// };

// document
//   .querySelector('.buttons__html')
//   .addEventListener('click', buttonInfo.showInfo.bind(html));

// document
//   .querySelector('.buttons__css')
//   .addEventListener('click', buttonInfo.showInfo.bind(css));

// --3--

// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// const shop = function () {
//   alert(
//     `${this.name} коштує ${
//       Math.round(this.price * this.quantity * 100) / 100
//     } за ${this.quantity} кг`,
//   );
// };

// const banana = {
//   name: 'Banana',
//   price: 30,
//   quantity: 4.5,
// };

// const cherry = {
//   name: 'Cherry',
//   price: 58,
//   quantity: 1.3,
// };

// const orange = {
//   name: 'Orange',
//   price: 89,
//   quantity: 3.4,
// };

// shop.bind(banana)();
// shop.bind(cherry)();
// shop.bind(orange)();
