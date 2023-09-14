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
}

// Make object
const user1 = new User("mong", 123);
user1.Name = "Uondong";
user1.Password = 98900;
console.log(user1.Name);
console.log(user1.Password);
