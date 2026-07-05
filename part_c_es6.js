const movies = [
    { id: 1, title: "Interstellar", genre: "Sci-Fi", year: 2014, rating: 8.7 },
    { id: 2, title: "Inception", genre: "Sci-Fi", year: 2010, rating: 8.8 }
];

const newMovie = {
    id: 3,
    title: "Dune",
    genre: "Sci-Fi",
    year: 2021,
    rating: 8.2
};

// Add new movie using spread operator
const updatedMovies = [...movies, newMovie];

// Movies with rating >= 8
const highRatedMovies = updatedMovies.filter(movie => movie.rating >= 8);

// Template literal
console.log(`${movies[0].title} (${movies[0].year}) - Rating: ${movies[0].rating}`);

console.log(updatedMovies);
console.log(highRatedMovies);