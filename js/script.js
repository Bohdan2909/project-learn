"use strict";
//1

//2
const personalMovieDb = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start:function () {
    personalMovieDb.count = +prompt('Скільки фільмів ви вже подивились?', '');
    while(personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)){
      personalMovieDb.count = +prompt('Скільки фільмів ви вже подивились?', '');
   
    }
   
   },
   rememberMyFilms:function() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', '').trim();
      const b = prompt('На сколько оцените его?', '');
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDb.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
    
      }
    
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDb.count < 10) {
      console.log('Prosmotreno malo filmov');
    } else if (10 <= personalMovieDb.count && personalMovieDb.count < 30) {
      console.log('Vy klasichwskyj zritel');
    } else if (personalMovieDb.count >= 30) {
      console.log('Vy kinoman');
    } else {
      console.log('Error');
    }
  },
  showMyDb:function () {
    if(personalMovieDb.privat === false){
      console.log(personalMovieDb);
    }
  },
  toggleVisibleMyDb: function () {
    if(personalMovieDb.privat){
      personalMovieDb.privat = false;
    } else {
      personalMovieDb.privat = true;

    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++){
      let genre = prompt(`Ваш любимий жанр під номером ${i}`); 
      if(genre === '' || genre == null){
        console.log('Vy ne vvely dani');
        i--;
      }else {

        personalMovieDb.genres[i - 1] = genre;
      }
    }
    personalMovieDb.genres.forEach((item, i) => {
      console.log(`Lubymy zanr ${i + 1} - eto ${item}`);
    });
  }
};


 







console.log( NaN || 2 || undefined ); //2
console.log( NaN && 2 && undefined ); //Nan
console.log( 1 && 2 && 3 ); //3
console.log( !1 && 2 || !3 ); //false
console.log( 25 || null && !3 ); //25
 
console.log( NaN || null || !3 || undefined || 5); //5
 
console.log( NaN || null && !3 && undefined || 5); //5
console.log( 5 === 5 && 3 > 1 || 5); //true

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!');
}

let result = '';
let long = 5;

for (let i = 1; i < long; i++){
   for(let j = 0; j < i; j++) {
    result += '*';
   }
  result += '\n';
}
console.log(result);

for (let i = 20; i >= 10; i--){
  if (i === 13) {
    break;
  }
  console.log(i);
}

for (let i = 2; i <= 10; i++){
  if (i % 2 === 0){
      console.log(i);
  }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;
while (i <= 16) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
const arrayOfNumbers = [];
for (let i = 5; i < 11; i++){
  arrayOfNumbers[i - 5] = i;
}
console.log(arrayOfNumbers);

const arr = [3, 5, 8, 16, 20, 23, 50];
const resultt = [];

// Пишем решение вот тут
for (let i = 0; i < arr.length; i++){
    resultt[i] = arr[i];
}
console.log(resultt);

const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < data.length; i++){
 if (typeof(data[i]) === 'number'){

   data[i] *= 2;
} 
  
  else if(typeof(data[i]) === 'string'){
    data[i] = `${data[i]} - done`;
  }
}
console.log(data);

const dataa = [5, 10, 'Shopping', 20, 'Homework'];
const resulttt = [];

for (let i = 1; i < dataa.length; i++){
  resulttt[i - 1] = dataa[dataa.length - i];
}
console.log(resulttt);

const lines = 5;
let res = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        res += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        res += "*";
    }
    res += "\n";
}
console.log(res);

function show (b,a) {
let c = a * b;
  console.log(c);
}
show(2,4);

function sayHello(name) {
  return 'Привет,' + name;
}
console.log(sayHello('Aнтон!'));

function returnNumber(num) {
  let arr = [];
  arr[0] = num - 1;
  arr[1] = num;
  arr[2] = num + 1;
  return arr;
}
console.log(returnNumber(5));


function getCoupeNumber(seatNumber) {
  if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
      return "Ошибка. Проверьте правильность введенного номера места";
  }

  if (seatNumber === 0 || seatNumber > 36) {
      return "Таких мест в вагоне не существует";
  }

  for (let i = 4; i <= 36; i = i + 4) {
      if (seatNumber <= i) {
          return Math.ceil(i / 4); 
      }
  }
  // тут очень много вариантов решения, но выбрал один из элегантных :)
}

console.log(getCoupeNumber(25));

function fib(num) {
  if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
      return "";
  }

  let result = '';
  let first = 0;
  let second = 1;

  for (let i = 0; i < num; i++) {
      if (i + 1 === num) {
          result += `${first}`;
          // Без пробела в конце
      } else {
          result += `${first} `;
      }

      let third = first + second;
      first = second;
      second = third;
  }

  return result;
}

fib(5);

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  }
};

function showExperience(plan) {
const {exp} = plan.skills;
return exp;
}

const shoppingMallData = {
  shops: [
      {
          width: 10,
          length: 5
      },
      {
          width: 15,
          length: 7
      },
      {
          width: 20,
          length: 5
      },
      {
          width: 8,
          length: 10
      }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
};

function isBudgetEnough(data) {
  let square = 0;
  let volume = 0;

  data.shops.forEach(shop => {
      square += shop.width * shop.length;
  });

  volume = data.height * square;

  if (data.budget - (volume * data.moneyPer1m3) >= 0) {
      return 'Бюджета достаточно';
  } else {
      return 'Бюджета недостаточно';
  }
}

isBudgetEnough(shoppingMallData);

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}

sortStudentsByGroups(students);



const arrayOf = [33, 55, 3, 4,5,9];
const sort = arrayOf.sort((a,b) => a - b);
console.log(sort);



let number = 5;

function logNumber() {
  let number = 4;
  console.log(number);
}

number = 6;
logNumber();

function createCounter() {
  let counter = 0;
  const myFunction = function(){
    counter = counter + 1;
    return counter;
  };
  return myFunction();
}
const decr = createCounter();
const c1 = decr();
const c2 = decr();
const c3 = decr();

console.log(c1,c2,c3);// Output: 1 2 3


const restorantData = {
  menu: [
      {
          name: 'Salad Caesar',
          price: '14$'
      },
      {
          name: 'Pizza Diavola',
          price: '9$'
      },
      {
          name: 'Beefsteak',
          price: '17$'
      },
      {
          name: 'Napoleon',
          price: '7$'
      }
  ],
  waitors: [
      {name: 'Alice', age: 22}, {name: 'John', age: 24}
  ],
  averageLunchPrice: '20$',
  openNow: true
};

function isOpen(prop) {
  let answer = '';
  prop ?  answer ='Закрыто' : answer = 'Открыто';

  return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (+fDish.price.slice(0,-1) + (+sDish.price.slice(0,-1)) < +average.slice(0,-1)) {
      return 'Цена ниже средней';
  } else {
      return 'Цена выше средней';
  }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
  const copy = Object.assign({}, data);

  copy.waitors[0] = {name: 'Mike', age: 32};
  return copy;
}

transferWaitors(restorantData);

