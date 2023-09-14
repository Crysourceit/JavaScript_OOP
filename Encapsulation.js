// Make class
class User {
  // pritvate property
  #name;
  #password;

  // parameter constructor
  constructor(name, password) {
    this.#name = name;
    this.#password = password;
    // call method in class
    // this.showDetail();
  }

  //method
  showDetail() {
    console.log(`userName ${this.#name}, userPassword ${this.#password}`);
  }
}

// Make object
const user1 = new User("mong", 123);
user1.name = "hhh";
user1.password = 999;
user1.showDetail();
