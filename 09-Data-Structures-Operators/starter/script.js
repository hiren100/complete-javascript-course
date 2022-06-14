'use strict';

// Data needed for a later exercise

// Data needed for first part of the section

const time = {
  test :2,
  test2 :3
}

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order : function(startIndex, mainINdex){
    return this.starterMenu[startIndex], this.mainMenu[mainINdex];
  },
  time,
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

let [main, fourth] = restaurant.categories;
// console.log( [main, fourth] )
// const temp = main;
// main = fourth;
// fourth = temp;

// [main, fourth] = [fourth, main]

// console.log(main, fourth)

console.log(restaurant.order(2,0))

const nested = [2,4, [ 1,3]]

const [i, , [j,k]] = nested;
console.log(i,j,k)

const arr = [1,2,3,4]
const newArray = [5,6, ...arr]
console.log(...newArray)

const newMenu = [...restaurant.mainMenu, "maxican"]

console.log(...newMenu)

// copy array
const newMenuCopy = [...restaurant.mainMenu]

// merge two array

/* const mergeArray = [...restaurant.starterMenu, ...restaurant.mainMenu]

console.log(mergeArray)

const [a,b, ...otherarrr] = [4,5,7,8,3,];

console.log(a,b, otherarrr)


const rest1 = {
  name :"Carpi",
  numGuests: 20
};

const rest2 = {
  name :"La pizza",
  owner: "john tide"
};

rest1.numGuests = rest1.numGuests || 10
rest2.numGuests = rest2.numGuests || 10

rest1.owner ??= "loca"
rest2.owner ??= "loca"

console.log(rest1)
console.log(rest2) */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* const [players1,players2] = game.players;

const [gk, ...fieldPlayers] = players1;

console.log(gk,...fieldPlayers)

const allPlayers = [...players1, ...players2]

console.log(allPlayers)

const {odds: {team1, x: draw, team2}} = game;

//6.

const printGoals = function (...players){
    console.log(`${players.length} golas were socred`)
} */

/* printGoals("Davies","Muller", "Lewandowski","Kimmich")
printGoals("Davies","Muller",) */
//printGoals(...game.players)

// 7.

/* team1 > team2 && console.log('Team 2 is likely to win')

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

for (const item of menu) 
console.log(item)
for (const [i,el] of menu.entries()) 
console.log([i+1,el])

// with optional chaining




const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

console.log(restaurant.order?.(0,1) ?? "Method doesn't exist") */

// challenge 2 

//1.
/* for (const [i,player] of game.scored.entries()){
  console.log(`Goal ${i+1}: ${player}`)
}

//2

const oddsValue = Object.values(game.odds);
console.log(oddsValue)
let average = 0;
for (const odd of oddsValue) average += odd; average = average / oddsValue.length
 console.log(average)


 // 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
} */


//sets

/* const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet)
  
  for(const order of ordersSet)  console.log(order)

  //example of set

  const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
  //const staffUnique = [...new Set(staff)];
  const staffUnique = Array.from(new Set(staff));
  console.log(staffUnique);


  // Map
  const rest = new Map();
  rest.set('name', 'Classico Italiano');
  rest.set(1, 'Firenze, Italy');
  console.log(rest.set(2, 'Lisbon, Portugal'));
  
  rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');
  
  console.log(rest.get('name'));
  console.log(rest.get(true));
  console.log(rest.get(1));

  rest.set(document.querySelector('h1', 'Heading'))




  const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
  ]);

  question.set(34, 'Score')

  console.log(question); */

  // for (const [key,value] of question) 
  // if(typeof key === "number"){
  //   console.log(`Answer is ${key}: ${value}`)
  // }

  /* const answer =Number(prompt('Your answer Number'))
  
  console.log(question.get(question.get('correct') === answer)); */

  // Convert map to array
/* console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]); */



/* const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
  ]);

  //1.

  
  const gameEventsArr = [...gameEvents.values()]

  const events = Array.from(new Set(gameEventsArr))

  //const events = [...new Set(gameEvents.values())];

  console.log(events)

  gameEvents.delete(64);

  console.log(
    `An event happened, on average, every ${90 / gameEvents.size} minutes`
  );

  const time2 = [...gameEvents.keys()].pop();
console.log(time2);
console.log(
  `An event happened, on average, every ${time2 / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
} */

// Strings tuts

const airline = 'TAP Air Portugal';
const plane = 'A320';

/* console.log(airline.indexOf('l'))

console.log(airline.slice(4));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); */

/* const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
 console.log(announcement.replaceAll('door', 'gate'));

 console.log('a+very+nice+string'.split('+'));
 console.log('Jonas Schmedtmann'.split(' '));

 const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)} and ${'😎'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12); */

document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

const b = document.createElement('button');

b.textContent = 'Click';
document.body.append(b);

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {

    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
      )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  const h = flights.split('+');
 

  for (const flight of flights.split('+')){
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} from ${from.slice(0,3).toUpperCase()} ${to.replaceAll(to, 'to')} ${time}`
    console.log(output.padStart(28))
  }