// constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// prototype
Book.prototype.getSummary = function (page, numberOfPage) {
  if (!page || !numberOfPage)
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
  return `book page have?=> ${page}, book page count is ${numberOfPage}`;
};

Book.prototype.getBookAge = function () {
  const year = new Date().getFullYear() - this.year;
  return `book is ${year} old`;
};

Book.prototype.changeYear = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

const book1 = new Book("title", "sabbir", 2013);
const book2 = new Book("book 2 title", "hasib", 2020);
// console.log(book1);
// console.log(book1.getSummary());
// console.log(book1.getBookAge());
console.log(book2);

book2.changeYear(2022);

console.log(book2);
