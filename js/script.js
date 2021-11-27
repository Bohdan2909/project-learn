"use strict";
//1
const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

//2
const personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
/*  const a = prompt('Один из последних просмотренных фильмов?', '');
 const b = prompt('На сколько оцените его?', '');
 const c = prompt('Один из последних просмотренных фильмов?','');
 const d = prompt('На сколько оцените его?','');
 
 personalMovieDb.movies[a] = b;
 personalMovieDb.movies[c] = d; */


for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', '');
  const b = prompt('На сколько оцените его?', '');
  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDb.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;

  }

}

if (personalMovieDb.count < 10) {
  console.log('Prosmotreno malo filmov');
} else if (10 <= personalMovieDb.count && personalMovieDb.count < 30) {
  console.log('Vy klasichwskyj zritel');
} else if (personalMovieDb.count >= 30) {
  console.log('Vy kinoman');
} else {
  console.log('Error');
}
console.log(personalMovieDb.count);