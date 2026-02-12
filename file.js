// Array of book objects
// Each book has a title, author name, and release year
let books = [
  {
    title: "Eloquent JavaScript",
    authorName: "Marijn Haverbeke",
    releaseYear: 2018
  },
  {
    title: "You Don't Know JS",
    authorName: "Kyle Simpson",
    releaseYear: 2015
  },
  {
    title: "JavaScript: The Good Parts",
    authorName: "Douglas Crockford",
    releaseYear: 2008
  }
];


// Function used to compare two books by release year
// This will help JavaScript decide how to sort the books
let sortByYear = (book1, book2) => {

  // If book1 was released earlier than book2
  // return -1 → book1 comes first
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  }

  // If both books have the same release year
  // return 0 → order stays the same
  else if (book1.releaseYear === book2.releaseYear) {
    return 0;
  }

  // If book1 was released later than book2
  // return 1 → book1 comes after book2
  else {
    return 1;
  }
};


// Specify a year limit
// Only books released in this year or earlier will be kept
let Year = 2012;


// Create a new array by filtering books
// .filter() checks each book and keeps only those
// whose releaseYear is less than or equal to 2012
let filteredBooks = books.filter(book => book.releaseYear <= Year);


// Sort the filtered books using the sortByYear function
// .sort() will compare books using your comparison logic
filteredBooks.sort(sortByYear);
