'use strict';


function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// console.log(fruitProcessor(20, 50))
// console.log(fruitProcessor(35, 6))

// function calcAge(birthyear){
//   return 2022- birthyear;
// }

// const age = calcAge(1985);



// const calcAge2 = function(birthYeah){
//   return 2022- birthYeah;
// }

// const age2 = calcAge2(2005);

// console.log(age + "," + age2)

// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);


///////////////////////////////////////////////////


// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

/// Arrow function
// const calcHeight = (height, firstname) => {
//   const calcheight = `${firstname}'s height is ${height}`;
//   return calcheight;
// }

// console.log(calcHeight(5.65, "Hiren"));


////// code challange #1

// const calcAverage = (a,b,c) => a+b+c/3;
// const calcAverage = (a,b,c) => {
//   return a+b+c /3;
// }

// let scoreDolphins = calcAverage(85, 54, 41);
// let scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins,scoreKoalas);

// const checkWinner = function(avgDolhins,avgKoalas) {
//   if(avgDolhins >=2 * avgKoalas){
//     console.log(`Dolphins win 🏆 (${avgDolhins} vs. ${avgKoalas})`);
//   }else if(avgKoalas >=2 * avgDolhins){
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolhins})`);
//   }else{
//     console.log('No team wins...');
//   }
// }

// checkWinner(scoreDolphins,scoreKoalas);

// Introduction to Arrays

// const friends = ['ketan', 'milan', 'pragnesh', 'savan', 'hiren', 'amit', 2010-2090];

// friends[2] = "Rahul"; 

// console.log(friends)



// const years = new Array(1990, 1991, 2000, 2010, 2022, friends);

// console.log(years)

// const calcAge2 = function(birthYeah){
//   return 2022- birthYeah;
// }

// const years = new Array(1990, 1991, 2000, 2010, 2018);

// const age1 = calcAge2(years[0]);
// const age2 = calcAge2(years[4]);
// const age3 = calcAge2(years[years.length -1]);

// console.log(age1,age2,age3)


// const ages = [calcAge2(years[2]),calcAge2(years[4])];

// console.log(ages);
// ages.push(23);

// const newLength = ages.includes(23);

// if(ages.includes(23)){
//   console.log('efwef')
// }


// code challenge 2#

// const calcTip = (tipValue)=>{
//   if(tipValue >=50 && tipValue<= 300){
//     const tipCount = tipValue * 0.15; 
//     return tipCount;
//   }else {
//     const tipCount = tipValue * 0.2; 
//     return tipCount;
//   }
// }

// const calcTip = (tipValue)=>{
//   return tipValue >=50 && tipValue<= 300 ? tipValue * 0.15 :  tipValue * 0.2;
// }

//const calcTip = tipValue => tipValue >=50 && tipValue<= 300 ? tipValue * 0.15 :  tipValue * 0.2;

// const bills = new Array(125,555,44);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// console.log(tips);

// const total = [tips[0] + bills[0],tips[1] + bills[1],tips[2] + bills[2]]
// console.log(`Actual bill is: ${bills} \ 
// and The Tip is: ${tips} \ 
// and Total bill is: ${total}`);

// Onject code

// const jonas = {
//   firstName : "jonas",
//   lastName : "moody",
//   age: 2022 - 1998,
//   friends: ['peter', 'steven','micheal']
// } 

// console.log(jonas.friends)
// console.log(jonas['age'])

// jonas.location = 'Dallas'

// console.log(jonas['location'])

// challenge

//console.log(`${jonas.firstName} has ${jonas.friends.length} friends and, his best friend is called ${jonas.friends[2]}`)

const jonas = {
  firstName : "jonas",
  lastName : "moody",
  birthYear: 1998,
  friends: ['peter', 'steven','micheal'],
  hasDriversLicense : true,

  // calcAge:  function (birthYear){
  //   return 2022 - birthYear;
  // }
  
  // calcAge:  function (){
  //   return 2022 - this.birthYear;
  // }

  calcAge:  function (){
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary : function(){
    return  `${this.firstName} is ${this.calcAge()}-year old and , he has ${this.hasDriversLicense ? 'driving licence' : 'not driving licence' }`;
  }

} 

// console.log(jonas.calcAge())
// console.log(jonas.age)
// console.log(jonas.age)


//console.log(jonas.getSummary())

// coding challenge#3


// const mark = {
//   fullName : "Mark Miller",
//   mass : "78",
//   height: '1.69',
//   calcBMI: function(){
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }

// }

// const john = {
//   fullName : "John Smith",
//   mass : "92",
//   height: '1.95',
//   calcBMI: function(){
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// }

// mark.calcBMI()
// john.calcBMI()

// if(mark.bmi > john.bmi){
//   console.log(`Mark's BMI (${mark.bmi.toFixed(2)}) is higher than John's (${john.bmi.toFixed(2)})!`)
// }else{
//   console.log(`John's BMI (${john.bmi.toFixed(2)}) is higher than Mark's (${mark.bmi.toFixed(2)})!`)
// }


// Loops 

// for(let rep = 1; rep <= 10; rep++){
//   console.log(`Lifting weights repetition ${rep} 🏆`)
// }

// const friends = ['ketan', 'milan', 'pragnesh', 'savan', 'hiren', 'amit', 2010-2090, true];

// const types = [];

// for( let i=0; i<friends.length; i++){
  
//   console.log(friends[i], typeof friends[i])

//  types[i] = typeof friends[i];

  // types.push(typeof friends[i])
//}

// console.log(types)


// const years = [1991,2000,1992,1995,2004];

// const ages = [];

// for(let i=0; i<years.length; i++){
//   ages.push(2022-years[i]);
// }
// console.log(ages)


// const chris = [
//   'chris',
//   'evans',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
// ];

// for(let i=chris.length - 1; i>=0; i--){
//   console.log(i, chris[i])
// }

// let dice = Math.trunc(Math.random() * 6) + 1;


// while (dice !== 6) {
//   console.log(dice);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...');
// }


// coding challenge 4#


const bills = [22,295,176, 440, 37, 105, 10, 1100, 86,52];

const tips =[];
const totals =[];


const calcTip = (bill)=>{
  return bill >=50 && bill<= 300 ? bill * 0.15 :  bill * 0.2;
}


for(let i=0 ; i<bills.length; i++ ){
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
  
  // console.log(`${bills[i]} : The tip is ${tips[i]} and total bill after tip is ${totals[i]}`);
}

console.log(bills, tips, totals)


const calcAverage = (arr) => {
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    sum += arr[i]
  }
  return sum / arr.length;
}


console.log(calcAverage([2, 5, 10 , 20]))

// console.log(calcAverage(tips));
