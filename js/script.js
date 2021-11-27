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
 const qest1 = prompt('Один из последних просмотренных фильмов?', '');
 const qest2 = prompt('На сколько оцените его?', '');
 const answer1 = prompt('Titanik','');
 const answer2 = prompt('На сколько оцените его?','');
 
 personalMovieDb.movies[qest1] = answer1;
 personalMovieDb.movies[qest2] = answer2;
 console.log(personalMovieDb);






