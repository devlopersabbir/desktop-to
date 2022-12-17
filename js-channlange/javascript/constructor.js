function Book() {
  console.log("book is initilazed..!");
}
const book1 = new Book();

function Book2(title, category, price) {
  this.title = title;
  this.category = category;
  this.price = price;
}
const book2 = new Book2("Apple watch", "Device", 1240);
