// TODO: Write code to define and export the Employee class

class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    // printInfo() {
    //   console.log(`Area: ${this.area}`);
    //   console.log(`Perimeter: ${this.perimeter}`);
    // }

    getName() {
        console.log("name", this.name)
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }
  }

  module.exports = Employee

