// Make class
class User {
  // pritvate property
  #name;
  #password;
  static dataBase = [];

  // parameter constructor
  constructor(name, password) {
    this.#name = name;
    this.#password = password;
    // // call method in class
    // this.showDetail();
  }

  //method
  showDetail() {
    console.log(`userName ${this.#name}, userPassword ${this.#password}`);
  }

  // Accessor setter
  set Name(newName) {
    this.#name = newName;
  }
  set Password(newPassword) {
    this.#password = newPassword;
  }

  // Accessor getter
  get Name() {
    return this.#name;
  }
  get Password() {
    return this.#password;
  }

  static addUsers(newUsers) {
    this.dataBase.push(newUsers);
  }
}

// Make object
// // Make Users
// const user1 = new User("mong", 123);
// const user2 = new User("hofire", 23356);
// const user3 = new User("Nam", 29908);
// // Save UsersData
// User.addUsers(user1);
// User.addUsers(user2);
// User.addUsers(user3);

// Make Users Shorthand
User.addUsers(new User("mong", 123));
User.addUsers(new User("hofire", 23356));
User.addUsers(new User("Nam", 29908));

// // forEach
// User.dataBase.forEach((users) => {
//   users.showDetail();
// });

// // for of
// for (user of User.dataBase) {
//   user.showDetail();
// }

// Exp Math of Javascript standard static
// console.log(Math.PI);
// console.log(Math.random());
// console.log(Math.max(10, 20, 30, 50));
