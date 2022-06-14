'use strict';

const flight = "LH234"
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function(flightNum,passenger){
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  // if (passenger.passport === 24739479284) {
  //   alert('Checked in');
  // } else {
  //   alert('Wrong passport!');
  // }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Functions Accepting Callback Functions
/* const oneWord = function (str) {
  return str.replaceAll(/ /g,'').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};


const high5 = function () {
  console.log('👋');
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);



const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey')
greeterHey('Hiren')
greeterHey('Amit')

greet('hi')('jonas')


const greetArrow = (greeting) => {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

greetArrow('hi')('jonas')


const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};


const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);



const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

lufthansa.planes = 300;
lufthansa.buyPlanes = function(){
  this.planes++;
  console.log(this.planes)
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes.bind(lufthansa))


// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

// Functions Returning Functions
const addTaxCalc = function (rate) {
  return function (value) {
    return value + value * rate;
  };
}

const addTaxVat = addTaxCalc(0.23);

console.log(addTaxVat(34)) */


//challenge 1


const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer : function(){
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    // Register answer

    if(typeof answer === 'number' && answer < this.answers.length){
      this.answers[answer]++;
    }
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};



//poll.registerNewAnswer()


document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });


//invoked function

const runOnce = function(){
  console.log('This is never run agian!')
}
runOnce();

// IIFE
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();


// (() => console.log('This will ALSO never run again'))();

///////////////////////////////////////
// Closures

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope from an inner function.

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g()
f()
h()
f()

const boardPassengers = function(n,wait){
  const perGroup = n/3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000)

  console.log(`Will start boarding in ${wait} seconds`);
}

const perGroup = 1000;
boardPassengers(21,2)


// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();