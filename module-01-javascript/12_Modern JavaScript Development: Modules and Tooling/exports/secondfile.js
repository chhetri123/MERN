import Person from "./firstfile.js";

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentInfo() {
    return `${this.getDetails()}, Student ID: ${this.studentId}`;
  }
}

export default Student;
