// create object protot
const bookProto = {
  getSummary: function () {
    this.title = title;
    this.author = author;
    this.year = year;
  },
  getAge: function () {
    const old = new Date().getFullYear() - this.year;
    return old;
  },
};

// create object
const book1 = Object.create(bookProto, {
  title: { value: "Book title" },
  author: { value: "Author" },
  year: { value: 2018 },
});

// book1.title = "Book title";
// book1.author = "Author";
// book1.year = 2020;

console.log(book1);
