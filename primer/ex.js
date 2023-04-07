// TODO: define addFavoriteBook(..) function
function addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
        favoriteBooks.push(bookName);
    }
}
// expected output: "Favorite Books: 3"

// TODO: define printFavoriteBooks() function
function printFavoriteBooks() {
    console.log(`Favorite Books: ${favoriteBooks.length}`);
    for (let bookName of favoriteBooks) {
        console.log(bookName);
    }
}
// expected output: "A Song of Ice and Fire"
var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks();
// expected output: "Favorite Books: 3"