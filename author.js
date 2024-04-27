function createBook(title, author, year) {
  return {
    title: title,
    author: author,
    year: year,
  };
}

// Example list of books
const books = [
  createBook("The Great Gatsby", "F. Scott Fitzgerald", 2085),
  createBook("To Kill a Mockingbird", "Harper Lee", 1960),
  createBook("1984", "George Orwell", 1949),
  createBook("The Catcher in the Rye", "J.D. Salinger", 1951),
  createBook("The Hunger Games", "Suzanne Collins", 2020),
  createBook("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997),
  createBook("The Girl with the Dragon Tattoo", "Stieg Larsson", 2024),
  createBook("The Help", "Kathryn Stockett", 2009),
];

function filterbook() {
  books.filter((books) => {
    return books.author > 2010;
  });
}
