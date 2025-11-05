// Create a class Employee with name and salary — add a method to display info:

class employee {
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }

    showDetail(){
        console.log(`employee name:${this.name} , employee salary:${this.salary}. `);
        
    }
}

let emp1 = new employee("Karnan",120000);

let emp2 = new employee("Priya",300000);

emp1.showDetail();
emp2.showDetail();