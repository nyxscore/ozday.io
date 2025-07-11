let movies = [];

const defaultGenre = "Unknown";

const movie1 = {
  title: "Taken",
  director: "Pierre Morel",
  year: 2008,
  genre: "Action",
};

const movie2 = {
  title: "Interstellar",
  director: "Christopher Nolan",
  year: 2014,
  genre: "Sci-Fi",
};

const movie3 = {
  title: "Catch Me If You Can",
  director: "Steven Spielberg",
  year: 2002,
  genre: "Biography",
};

movies.push(movie1, movie2, movie3);

function printMovies(moviesArray = []) {
  console.log("Movie Collection:");

  for (let i = 0; i < moviesArray.length; i++) {
    let movie = moviesArray[i];

    if (!movie.title) movie.title = "Unknown";
    if (!movie.director) movie.director = "Unknown";
    if (!movie.year) movie.year = 0;
    if (!movie.genre) movie.genre = defaultGenre;

    console.log(
      `${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${
        movie.year
      }, Genre: ${movie.genre}`
    );
  }

  var count = moviesArray.length;
  console.log(`Total Movies: ${count}`);
}

printMovies(movies);
