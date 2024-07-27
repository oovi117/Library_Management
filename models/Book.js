// models/Book.js
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.borrowed = false;
  }

  isBorrowed() {
    return this.borrowed;
  }
}

module.exports = Book;
