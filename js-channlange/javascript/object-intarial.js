console.clear();

const books = {
  title: "Bangla grammer",
  author: "Sabbir Hossain",
  year: 2022,
  getSummery: function (fNumber, lNumber) {
    const sum = fNumber + lNumber;
    if (!sum) return console.log("please pass some code");
    return sum;
  },
};

console.log(books);
console.log(books.author);
console.log(books.getSummery(1, 3));
