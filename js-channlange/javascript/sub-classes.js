class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getAllData = () => {
    console.log(
      `Name: ${this.name}; Email: ${this.email}; Password: ${this.passwrod}`
    );
  };
}

class Users extends User {
  constructor(name, email, password, username) {
    super(name, email, password);
    this.username = username;
  }
}

const user = new Users(
  "Sabbir Hossain",
  "sabbir@gmail.com",
  "sabbir2020",
  "sabbir"
);
console.log(user);
// console.log(user.getAllData());
