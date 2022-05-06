'use strict';

let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let country = 'India'
let continent = 'Asia'
let population = '1 Billion'

console.log("Country:", country)
console.log("Continent:", continent)
console.log("Population:", population)

console.log(typeof true)
console.log(typeof "string")
console.log(typeof 3243) // integer
console.log(typeof { 1 : 'hello'}) // object

//////////////////////////////////////////////

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log("BIT result" + ": "+ BMIMark, BMIJohn, markHigherBMI);

BMIMark = Math.floor(BMIMark * 100) / 100;
BMIJohn = Math.floor(BMIJohn * 100) / 100;


////////////////////////////////////////////////////////////////////


if (BMIMark > BMIJohn){
  console.log(`Mark's BMI is higher than John's`);
} else{
  console.log(`John's BMI (${BMIJohn.toFixed(2)}) is  higher than Mark's BMI (${BMIMark.toFixed(2)})!`);
}

////////////////////////////////////////////////////////////////////////

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if(scoreDolphins > scoreKoalas ){
//   console.log("Dolphins is winner!");
// }else if(scoreDolphins === scoreKoalas ){
//   console.log("score is same for both team!");
// }else{
//   console.log("Kolas is winner!");
// }

// bonus 1
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
  console.log("Dolphins is winner! 🏆");
}else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
     console.log("Kolas is winner! 🏆");
 }else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100 ){
  console.log("Both win the trophy !");
 }
 else{
  console.log("No one wins the trophy 😭");
 }


 ////////////////////////////////////////////////////////////////////////

 let bill = 20 ;


// if (bill <= 300 && bill >= 50 ){ 
//   console.log('The bill was ' + bill + " the tip was " +  bill * 0.15);
// }else{
//   console.log('The bill was ' + bill + " the tip was " + bill * 0.20);
//}

// template litrel syntax
let tip = bill <= 300 && bill >= 50 ? `The bill was ${bill} and the tip was  ${bill * 0.15}` : `The bill was ${bill} and the tip was  ${bill * 0.20}`;

console.log(tip);

