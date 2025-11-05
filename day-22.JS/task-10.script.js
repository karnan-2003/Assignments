//Use prototypes to add a new method to all Student objects dynamically.
function Student(name, age) {
  this.name = name;
  this.age = age;
}
Student.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
const s1 = new Student("Karnan", 21);
const s2 = new Student("Sabari",25 );
s1.greet();
s2.greet();