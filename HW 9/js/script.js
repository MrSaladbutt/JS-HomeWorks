// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

// const button = document.querySelector('.container__btn');
// const text = document.querySelector('.contaiener__text');

// button.addEventListener('click', () => {
//   text.hidden = !text.hidden;
// });

// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// const buttonFirst = document.getElementById('btn');
// const buttonSecond = document.getElementById('btnSecond'); // Тут втрішив додати кнопку яка повертає попередню кнопку для зручності

// buttonFirst.addEventListener('click', () => {
//   buttonFirst.hidden = true;
//   buttonSecond.hidden = false;
// });

// buttonSecond.addEventListener('click', () => {
//   buttonSecond.hidden = true;
//   buttonFirst.hidden = false;
// });

// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

// const list = document.querySelector('.list');

// list.addEventListener('click', event => {
//   const target = event.target;
//   if (target.tagName != 'LI') return;

//   let listChildren = event.target.querySelector('ul');

//   if (!listChildren) return;

//   listChildren.hidden = !listChildren.hidden;
// });
