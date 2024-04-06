// console.log('Hello World from Nodejs');

//----------------------------------------------------------------

// const tutorial = require('./tutorial');

// console.log(tutorial);

// console.log(tutorial.sum(1, 1));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeObject());

// ----------------------------------------------------------------

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', (num1, num2) => {
//   console.log(num1 + num2);
// });

// eventEmitter.emit('tutorial', 1, 2);

// class Person extends EventEmitter {
//   constructor(name) {
//     super();
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }
// }

// let olexii = new Person('Olexii');
// let anna = new Person('Anna');
// anna.on('name', () => {
//   console.log('my name is ' + anna.name);
// });
// olexii.on('name', () => {
//   console.log('my name is ' + olexii.name);
// });

// olexii.emit('name');
// anna.emit('name');
