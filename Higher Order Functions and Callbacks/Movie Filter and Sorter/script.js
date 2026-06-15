const movies = [
    { title: "The Matrix", year: 1999, rating: 8.7 },
    { title: "Inception", year: 2010, rating: 8.8 },
    { title: "The Godfather", year: 1972, rating: 9.2 },
    { title: "Back to the Future", year: 1985, rating: 8.5 },
    { title: "The Room", year: 2003, rating: 3.7 }
];

function sortByRating(movie1, movie2){
    if(movie1.rating == movie2.rating){
        return 0;
    }
    return movie1.rating < movie2.rating ? -1 : 1;
}

let classicMovies = movies.filter(movie => movie.year >= 2000);

classicMovies.sort(sortByRating);
console.log(classicMovies);

let areAllClassicsGood = classicMovies.every(movie => movie.rating > 5);
console.log(areAllClassicsGood);