// models/User.js
class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.borrowedBooks = [];
  }

  borrowBook(book) {
    if (this.borrowedBooks.length >= 3) {
      console.log("Cannot borrow more than 3 books");
      return false;
    }
    if (book.isBorrowed()) {
      console.log("Book is already borrowed");
      return false;
    }
    this.borrowedBooks.push(book);
    book.borrowed = true;
    console.log(`Book borrowed: ${book.title}`);
    return true;
  }

  returnBook(isbn) {
    const index = this.borrowedBooks.findIndex((book) => book.isbn === isbn);
    if (index !== -1) {
      const returnedBook = this.borrowedBooks.splice(index, 1)[0];
      returnedBook.borrowed = false;
      console.log(`Book returned: ${returnedBook.title}`);
    } else {
      console.log("Book not found in borrowed list");
    }
  }

  peekBook(isbn) {
    const book = this.borrowedBooks.find((book) => book.isbn === isbn);
    if (book) {
      console.log(`Book found: ${book.title}`);
      return book;
    } else {
      console.log("Book not found in borrowed list");
      return null;
    }
  }
}

module.exports = User;
