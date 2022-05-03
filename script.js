'use strict';
// // 1. New {} is created
// // 2. Function is called, this = {}
// // 3. {} linked to prototype
// // 4. function autoatically return {}
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 2017);
// console.log(matilda, jack);
// const jay = 'jay';
// console.log(trenton instanceof Person);
// console.log(jay instanceof Person);
// Person.hey = function () {
//   console.log('Hey there');
//   console.log(this);
// };
// Person.hey();
// trenton.hey();
// // Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// trenton.calcAge();
// matilda.calcAge();
// jack.calcAge();
// console.log(trenton.__proto__);
// console.log(trenton.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(trenton));
// console.log(Person.prototype.isPrototypeOf(Person));
// Person.prototype.species = 'Homo speiens';
// console.log(trenton.species, matilda.species);
// console.log(trenton.hasOwnProperty('firstName'));
// console.log(trenton.hasOwnProperty('species'));
// console.log(trenton.__proto__);
// console.log(trenton.__proto__.__proto__);
// console.log(trenton.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor);
// const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
// console.log(arr.__proto__  === Array.prototype);
// console.log(arr.__proto__.__proto__);
// Array.prototype.unique = function() {
//     return [...new Set(this)]
// }
// console.log(arr.unique());
// const h1 = document.querySelector('h1');
///////////////////////////////////////
// Coding Challenge #1
/*
1. Use a constructor function to implement a Car. A car has a make
and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed
 by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5,
and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake'
multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
//     this.accelerate = function () {
//         console.log(10 + this.speed);
//     }
//     this.brake = function () {
//         console.log(this.speed - 5);
//     }
// }
// const car = new Car('BMW', 120);
// console.log(car);
// car.accelerate();
// car.brake();
// car.accelerate();
// car.accelerate();
// car.brake();
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/
// // classExpression
// // const PersonCl = class {};
// // class declartion
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //   Instance methods
//   //   Method will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   //   set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   //   stactic method
//   static hey() {
//     console.log('Hey there');
//     console.log(this);
//   }
// }
// jessica.calcAge();
// console.log(jessica.age);
// // PersonCl.prototype.greet = function() {
// //     console.log(`Hey ${this.firstName}`);
// // };
// jessica.greet();
// // 1. Classes are not hoisted
// // 2. Classes are first-class citizes
// // 3. classes are excuted in strict mode
// const walter = new PersonCl('Walter f', 1965);
// PersonCl.hey();
// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],
//   get lastes() {
//     return this.movements.slice(-1).pop();
//   },
//   set lastes(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.lastes);
// account.lastes = 50;
// console.log(account.movements);
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//       this.firstName = firstName;
//       this.birthYear = birthYear;
//   }
// };
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'steven';
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven.__proto__ === PersonProto);
// const sarah = Object.create(PersonProto)
// sarah.init('Sarah', 1979);
// sarah.calcAge();
///////////////////////////////////////
// Coding Challenge #2
/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed
in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h
(but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods,
 and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     console.log(10 + this.speed);
//   }
//   brake() {
//     console.log(this.speed - 5);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(name) {
//     console.log(this.speed * 1.6);
//   }
// }
// const something = new Car('Ford', 120);
// something.accelerate();
// something.brake();
// console.log(something.speedUS);
// console.log(something.speedUS);
// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
//     this.accelerate = function () {
//         console.log(10 + this.speed);
//     }
//     this.brake = function () {
//         console.log(this.speed - 5);
//     }
// }
// const car = new Car('BMW', 120);
// console.log(car);
// car.accelerate();
// car.brake();
// car.accelerate();
// car.accelerate();
// car.brake();
// // class declartion
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //   Instance methods
//   //   Method will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   get lastes() {
//     return this.movements.slice(-1).pop();
//   },
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
// }
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// Student.prototype = Object.create(Person.prototype)
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study at ${this.course}`);
// };
// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //   Instance methods
//   //   Method will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   //   set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   //   stactic method
//   static hey() {
//     console.log('Hey there');
//   }
// }
// // Object literal
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log('draw');
//   },
// };
// circle.draw();
// // Factories
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log('draw');
//     },
//   };
// }
// const circle = createCircle(1);
// // Constructors function
// function Circle(radius){
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   }
// }
// const another = new Circle(1);
// // Constructors property
// let x = {};
// // let x = new Object();
// function Person(first, last, birthYear, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.birthYear = birthYear;
//   this.eyeColor = eye;
// }
// const myFather = new Person("bob", "dd", 56, "blue")
// console.log(myFather);
// class Person {
//   constructor(firstName, birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   CalcAge() {
//     const age = 2037 - this.birthYear;
//     console.log(age);
//   }
// }
// const person = new Person("joe", 1973);
// console.log(person);
// person.CalcAge();
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //   Instance methods
//   //   Method will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   get lastes() {
//     return this.movements.slice(-1).pop();
//   },
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
// }
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// const Student = Object.create(PersonProto);
// Student.init = function(firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// Student.introduce = function() {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }
// const Jay = Object.create(Student);
// Jay.init('jay', 2010, 'computer science');
// Jay.introduce();
// Jay.calcAge();
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;

// const Person = function (firstName, birthYear) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this, Put a method in a constructor
//   this.calcAge = function () {
//     console.log(2037 - this.birthYear);
//   };
// };

// const trenton = new Person('Trenton', 1991);
// console.log(trenton);

// const btn = document.querySelector('.btn').addEventListener('click', function() {
//   const input = document.querySelector('.input').value
//   const Mycar = new Car("BMW", input, 'Red', 'Rose')
//   Mycar.HowOld();
// })

// const person = {
//   firstName: 'Trenton',
//   lastName: 'Conner',
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     const parts = value.split(' ');
//     this.firstName = parts[0]
//     this.lastName = parts[1]
//   }
// };

// person.fullName = 'John smith';

// // getters => access properties
// // setters => change (mutate) them

// console.log(person);

// class expression
// const PersonCl = class {
// }

// //class declartion
// class Car {
//   constructor(model, year, color) {
//     this.year = year;
//     this.color = color;
//     this.model = model;
//   }
//   calcAge() {
//     console.log(2037 - this.year);
//   }
// }

// const btn = document.querySelector('.btn').addEventListener('click', function() {
//  const input = document.querySelector('.input').value

// const car = new Car('BMW', input, 'Red');
// car.calcAge();
// })

