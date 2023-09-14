// Make class
class User {
  // pritvate property
  #name;
  #password;

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

  // setter
  setName(newName) {
    this.#name = newName;
  }
  setPassword(newPassword) {
    this.#password = newPassword;
  }

  // getter
  getName() {
    return this.#name;
  }
  getPassword() {
    return this.#password;
  }
}

// Make object
const user1 = new User("mong", 123);
user1.setName("deenaa");
user1.setPassword(7899)
console.log(user1.getName());
console.log(user1.getPassword());
