const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// * Destructuring & spread Operator
/*
const book = getBook(3);

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);
// const primaryGenre = genres[0]
// const secondaryGenre = genres[1]

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = ["epic fantasy", ...genres];
newGenres;

const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",

  // overwriting an existing property
  pages: 1210,
};
updatedBook;

// * Arrow Functions
//function declaration
// function getYear(str) {
//   return str.split("-")[0];
// }

// function expression
const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

// * Template literal
const summary = `${title}, a ${pages}-page long book was written by ${author} and published in ${getYear(
  publicationDate
)} the book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

// * Ternary Operator
const pagesRange = pages > 1000 ? "over a thousand" : "less than one thousand ";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

// * short circuiting
console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

// flasy: 0, '', null, undefined
console.log("jonas" && "Some string");
console.log(0 && "Some string");

// OR
console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATE";
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// Nullish coalesce Operator; return value when first is null or undefined but not when it is 0 or empty string
// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// * Optional chaining
function getTotalReviewCount(book) {
  const goodReads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything
  return goodReads + librarything;
}

console.log(getTotalReviewCount(book))
*/

// * Map

/*function getTotalReviewCount(book) {
  const goodReads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodReads + librarything;
}

const books = getBooks();
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const title = books.map((el) => el.title);
title;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialData;

// * Filter
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books.filter((book) =>
  book.genres.includes("adventure")
).map(book => book.title);
adventureBooks;

// * Reduce
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0)
pagesAllBooks;


// * sort
const arr = [3, 7, 1, 9, 6]
const sorted = arr.slice().sort((a, b) => a - b)
sorted;
arr; // arr has been mutated without slice, with slice, it is not sorted

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages)
sortedByPages;

// * Immutable array
// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K . Rowling"
}

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete a book object from array
const booksAfterDelete = booksAfterAdd.filter(book => book.id !== 6)
booksAfterDelete;

// 3) Update the book object in the array
const booksAfterUpdate = booksAfterDelete.map(book => book.id === 1 ? {}: book)
booksAfterUpdate;
*/

// * Asynchronous Javascript Promises
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// console.log("jonas");


// * Async Javascript with async await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data = await res.json()
  console.log(data)
  return data
}

const todo = getTodos()
console.log(todo);
console.log("jonas");