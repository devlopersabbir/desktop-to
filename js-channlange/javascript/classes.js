class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getAllDetails = () => {
    const details = `Book title: ${this.title}. Author name: ${this.author}. Created date ${this.year}`;
    console.log(details);
  };
  getAge = (message) => {
    const age = new Date().getFullYear() - this.year;
    console.log(`${message} ${age}`);
  };
  revice = (newYear) => {
    this.year = newYear;
    this.reviced = true;
  };
}

const book = new Book("Apple watch", "Sabbir Hossain", 2020);
console.log(book);
book.getAllDetails();
console.log(book);
book.getAge("Product age");
console.log(book);
book.revice(2019);
console.log(book);
