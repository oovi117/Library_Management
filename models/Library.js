// models/Library.js
const Book = require("./Book");
const User = require("./User");

class Library {
  constructor() {
    this.books = [];
    this.members = [];
  }

  addNewBook(book) {
    this.books.push(book);
    console.log(`Book added: ${book.title}`);
  }

  registerMember(user) {
    this.members.push(user);
    console.log(`Member registered: ${user.name}`);
  }

  borrowBook(userId, isbn) {
    const user = this.members.find((member) => member.id === userId);
    const book = this.books.find((bk) => bk.isbn === isbn);
    if (user && book) {
      return user.borrowBook(book);
    } else {
      console.log("User or Book not found");
      return false;
    }
  }

  returnBook(userId, isbn) {
    const user = this.members.find((member) => member.id === userId);
    if (user) {
      user.returnBook(isbn);
    } else {
      console.log("User not found");
    }
  }
}

module.exports = Library;
