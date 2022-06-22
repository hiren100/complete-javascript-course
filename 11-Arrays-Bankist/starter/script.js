'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = (function(movements, sort = false){
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function(mov, i){


  const type = mov > 0 ? 'deposit' : 'withdrawal'

  const html =`
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
  `
  containerMovements.insertAdjacentHTML('beforeend', html)
  })
})






const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce(function(sum,cur){
      return sum + cur
    },0)

  labelBalance.textContent = `${acc.balance}€`;
};


const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);



const calcDisplaySummary = function(acc){
  const incomes = acc.movements
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outIncome = acc.movements
  .filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outIncome)}€`;

  const interest = acc.movements
  .filter(mov => mov > 0)
  .map(deposit => (deposit * acc.interestRate) / 100)
  .filter((int, i, arr) => {
    // console.log(arr);
    return int >= 1;
  })
  .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
}

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

let currentAccount;

btnLogin.addEventListener('click', function(e){
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)

  if(currentAccount?.pin ===Number(inputLoginPin.value) ){
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity=100;

    inputLoginUsername.value = '';
    inputLoginPin.value = '';

    updateUI(currentAccount);
  }
})

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount =Number(inputTransferAmount.value)
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value) 

  if(amount > 0 && currentAccount.balance >= amount && receiverAcc &&  receiverAcc?.username !== currentAccount.username){
    currentAccount.movements.push(-amount)
    receiverAcc.movements.push(amount)
  }
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
  inputTransferTo.blur();
  updateUI(currentAccount);
})

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {

    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';

})

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if(inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin){
      const index = accounts.findIndex(
        acc => acc.username === currentAccount.username
      );
      console.log(index);

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
      
    }
    inputCloseUsername.value = inputClosePin.value = '';
})

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


/* let arr = ['a','b','c','d','e']

console.log(arr.slice(3,5))
console.log(arr.slice(1,-3))
console.log(...arr)

//splice

console.log(arr.splice(2))
console.log(arr)
console.log(arr.splice(-1))


let arr2 = ['j','i','h','g','f']

console.log(arr2.reverse())

const letters = arr.concat(arr2)
console.log(letters)

console.log([...arr, ...arr2])

console.log(letters.join(' - ')); */

/* const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(2));

console.log(arr[arr.length-1]);

console.log(arr.at(-1)); */

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

movements.forEach(function (mov, i) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
}); */

//map
/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value,key,map){
  console.log(`${key}: ${value}`)
})

//set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 100]);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
}); */

//challenge
/* const checkDogs = (function(dogsJulia,dogsKate){
  console.log(dogsJulia)
  console.log(dogsKate)
  console.log('--------------------original array above------------------')
  const dogsJuliaCorrected = dogsJulia.slice(1,3);
  //const dogsJuliaCorrected = dogsJulia.splice(1, 2);
  // dogsJuliaCorrected.splice(0, 1);
  // dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected)

  const dogs = dogsJuliaCorrected.concat(dogsKate);

  console.log(dogs)

  dogs.forEach(function(dog,i){
    if(dog >= 3){
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    }
    else{
      console.log(`Dog number ${i + 1} is still a puppy 🐶`)
    }
  })

})

//checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3])
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

*/

//challenge 2 

/* const calcAverageHumanAge = function(ages){
  //const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  const humanAges = ages.map(function(ag){
    if(ag<=2){
      return 2 * ag
    }
    else{
      return 16 + ag * 4
    }
  })
  const adults = humanAges.filter(function(age){
    return age >= 18
  })
  console.log(humanAges);
  console.log(adults);

  const averageHumanAge = adults.reduce(function(first,cur,i,arr){
     return first + cur / arr.length
  },0)

  console.log(averageHumanAge);

}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]) */
//calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])


//challenge 3

/* const calcAverageHumanAge = function(ages){
    const averageHumanAge2 = 
    ages.map(ag => (ag <= 2 ? 2 * ag : 16 + ag * 4))
        .filter(age => age >= 18)
        .reduce((first,cur,i,arr) => first + cur / arr.length,0)

    console.log(averageHumanAge2);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]) 
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]) */




// Array Methods

/* const eurToUsd = 1.1;

const movmentUsd = movements.map(function(mov){
  return Math.floor(mov * eurToUsd);
})


console.log(movements)
console.log(...movmentUsd)

const deposits = movements.filter(function(mov){
  return mov > 0;
})
console.log(deposits)

const depositArr = []
for(const mov1 of movements){
  if (mov1 > 0){
   depositArr.push(mov1)
  }
}
console.log(depositArr)


console.log(movements)
const balance = movements.reduce(function(acc,cur,i , arr){
  return acc + cur
},0)
console.log(balance)

const max = movements.reduce(function(acc,mov){
  if (acc > mov){
    return acc
  }else{
    return mov
  }
}, movements[0])

console.log(max) */


const firstWidthdrawal =  movements.find(mov => mov > 0) 
console.log(firstWidthdrawal)

const account = accounts.find(acc => acc.owner === 'Jonas Schmedtmann')
console.log(account.owner)

for(const acc of accounts){
  if(acc.owner === 'Jonas Schmedtmann'){
    console.log(acc.owner)
  }
}

/* //1.
const bankDepositSum = accounts.map(mov => mov.movements).flat().filter(mov => mov>0).reduce((acc, cur) => acc + cur)

console.log('Bank deposit sum: ' + bankDepositSum)

//2.

//const numDeposits1000 = accounts.flatMap(mov => mov.movements).filter(mov => mov>1000).length
const numDeposits1000 = accounts.flatMap(mov => mov.movements).reduce((count,cur) => cur >= 1000 ? count+1 : count , 0 )



console.log(numDeposits1000)

//3. create object through reduce

const sums = accounts.flatMap(mov => mov.movements).reduce((sums,cur) => {
  cur > 0 ? (sums.deposit += cur) : (sums.widthdrawal += cur)
  return sums
},{ deposit:0 , widthdrawal: 0 } )

console.log(sums)

//4.

const convertTitleCase = function (title) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const arr = title
  .toLowerCase()
  .split(' ')
  .map(mov => exceptions.includes(mov) ? mov : capitzalize(mov)).join(' ');
  

  console.log(arr)

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(' ');

  return capitzalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE')); */


//challenge 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
  ];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

console.log(dogs)


//2.

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(dogSarah)
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  } `
);

//3.


const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch)

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle)

//4.

const splitarr = ownersEatTooLittle.map(a => a)
console.log(...splitarr )

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`)
console.log(`${splitarr.join(' and ')}'s dogs eat too much!`)

//5.

const sameEat = dogs.some(dog => dog.curFood === dog.recFood)
console.log(sameEat)

//6.
// current > (recommended * 0.90) && current < (recommended * 1.10)

const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

  console.log(dogs.some(checkEatingOkay));

  //7.

const okayEatsDogs = dogs.filter(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1)

console.log(okayEatsDogs)

// sort it by recommended food portion in an ascending order [1,2,3]
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);


