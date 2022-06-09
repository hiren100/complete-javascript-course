'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

const [players1,players2] = game.players;

const [gk, ...fieldPlayers] = players1;

console.log(gk,...fieldPlayers)

const allPlayers = [...players1, ...players2]

console.log(allPlayers)

const {odds: {team1, x: draw, team2}} = game;

//6.

const printGoals = function (...players){
    console.log(`${players.length} golas were socred`)
}

/* printGoals("Davies","Muller", "Lewandowski","Kimmich")
printGoals("Davies","Muller",) */
printGoals(...game.players)

// 7.

team1 > team2 && console.log('Team 2 is likely to win')

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

console.log(restaurant.order?.(0,1) ?? "Method doesn't exist")