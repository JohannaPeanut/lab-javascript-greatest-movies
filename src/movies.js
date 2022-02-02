// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(filmArray) {
  let directorArray = filmArray.map((film) => film.director);
  let cleanDirectorArray = [];
  for (let director of directorArray) {
    if (!cleanDirectorArray.includes(director)) cleanDirectorArray.push(director);
  }
  return cleanDirectorArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(filmArray) {
  let stevenFilms = filmArray.filter(
    (film) =>
      film.genre.includes('Drama') && film.director === 'Steven Spielberg'
  );
  return stevenFilms.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(filmArray) {
  if (filmArray.length === 0) return 0;
  let filmsWithScore = filmArray.filter(
    (film) => typeof film.score === 'number'
  );
  let averageRating =
    filmsWithScore.reduce((accumulator, film) => {
      return accumulator + film.score;
    }, 0) / filmArray.length;
  return Number(averageRating.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(filmArray) {
  if (filmArray.length === 0) return 0;
  let dramaFilms = filmArray.filter((film) => film.genre.includes('Drama'));
  if (dramaFilms.length === 0) return 0;
  let averageRating =
    dramaFilms.reduce((accumulator, film) => {
      return accumulator + film.score;
    }, 0) / dramaFilms.length;
  return Number(averageRating.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(filmArray) {
  let filmOrdered = filmArray.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  return [...filmOrdered];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(filmArray) {
  let filmOrdered = [...filmArray];
  filmOrdered.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  });
  let first20FilmOrdered = filmOrdered.map((film) => film.title);
  first20FilmOrdered = first20FilmOrdered.filter((film, index) => index < 20);
  return first20FilmOrdered;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
