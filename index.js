// index.js
const Book = require("./models/Book");
const User = require("./models/User");
const Library = require("./models/Library");

// Example Usage
const library = new Library();

const book1 = new Book("Book Title 1", "Author 1", "ISBN1");
const book2 = new Book("Book Title 2", "Author 2", "ISBN2");
const book3 = new Book("Book Title 3", "Author 3", "ISBN3");
const book4 = new Book("Book Title 4", "Author 4", "ISBN4");

library.addNewBook(book1);
library.addNewBook(book2);
library.addNewBook(book3);
library.addNewBook(book4);

const user1 = new User("John Doe", "USER1");
const user2 = new User("Jane Smith", "USER2");

library.registerMember(user1);
library.registerMember(user2);

library.borrowBook("USER1", "ISBN1");
library.borrowBook("USER1", "ISBN2");
library.borrowBook("USER1", "ISBN3");
library.borrowBook("USER1", "ISBN4"); // Should fail

user1.returnBook("ISBN2");
library.borrowBook("USER1", "ISBN4"); // Should succeed

user1.peekBook("ISBN1"); // Should find the book
user1.peekBook("ISBN2"); // Should not find the book

library.returnBook("USER1", "ISBN1"); // User returns the book
