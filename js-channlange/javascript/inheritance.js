function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// set summery prototype
Book.prototype.getSummary = function () {
  return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
};

// production
function Production(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}
// inherite prototype
Production.prototype = Object.create(Book.prototype);
// inherite production object
const production1 = new Production(
  "Production apple watch",
  "Hossain",
  2022,
  "january"
);

// const book1 = new Book("Apple watch", "Sabbir", 2021);
console.log(production1.getSummary());
