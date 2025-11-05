class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}
  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}.`);
  }
}
const s1 = new Student("Arun", 25, "A");
const s2 = new Student("Karnan", 21, "B");
const s3 = new Student("Kalai", 20, "A");
s1.display();
s2.display();
s3.display();