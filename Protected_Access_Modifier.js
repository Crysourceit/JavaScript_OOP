// Make class
class User {
  // protected property
  _name;
  #password;

  // parameter constructor
  constructor(name, password) {
    this._name = name;
    this.#password = password;
    // // call method in class
    // this.showDetail();
  }

  //method
  showDetail() {
    console.log(`userName ${this._name}, userPassword ${this.#password}`);
  }

  // Accessor setter
  set Name(newName) {
    this._name = newName;
  }
  set Password(newPassword) {
    this.#password = newPassword;
  }

  // Accessor getter
  get Name() {
    return this._name;
  }
  get Password() {
    return this.#password;
  }
}

class Teacher extends User {
  #course;
  constructor(name, password, course) {
    // Mother constructor
    super(name, password);
    this.#course = course;
  }
  // Overriding Method
  showDetail() {
    console.log(`Teacher @ ${this._name} | Teached => ${this.#course}`);
  }
}

class Student extends User {
  #score;
  constructor(name, password, score) {
    super(name, password);
    this.#score = score;
  }
  // overriding Method
  showDetail() {
    console.log(`Student @ ${this._name} | MyScore => ${this.#score} Score`);
  }
}

// Make object
const user1 = new Teacher("hoho", 12345, "Learning Program");
user1.showDetail();
const user2 = new Teacher("popo", 12345, "English");
user2.showDetail();

const user3 = new Student("kum", 556678, 90);
user3.showDetail();
const user4 = new Student("bck", 556678, 50);
user4.showDetail();
