let books = [
    { title: "Whispers in the Fog", authorName: "Jared Brooks", releaseYear: 2012 },
    { title: "The Forgotten Code", authorName: "Amira Chen", releaseYear: 2020 },
    { title: "Stars Beyond Reach", authorName: "Lena Cruz", releaseYear: 2017 },
    { title: "Beneath Crimson Skies", authorName: "Theo Grant", releaseYear: 1995 },
    { title: "Fragments of Dawn", authorName: "Isla Morgan", releaseYear: 2023 }
];

function sortByYear(book1, book2){
    if(book2.releaseYear == book1.releaseYear){
        return 0;
    }
    return book2.releaseYear > book1.releaseYear ? -1 : 1;
}

let filteredBooks = books.filter(book => book.releaseYear >= 2012);
filteredBooks.sort(sortByYear);

console.log(filteredBooks);