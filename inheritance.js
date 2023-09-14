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

class Teacher extends User {
  constructor() {
    console.log("I am Teacher");
  }
}

class Student extends User {
  constructor() {
    console.log("I am Student");
  }
}

// Make object
const user1 = new Teacher("Teacher1", 12345);
user1.showDetail();

const user2 = new Student("Student1", 556678);
user2.showDetail();
