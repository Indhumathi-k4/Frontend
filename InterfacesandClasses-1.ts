interface Person {
    name: string;
    age: number;
}

class Employee implements Person {
    name: string;
    age: number;
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }

    getEmployeeDetails(): string {
        return `Employee ID: ${this.employeeId}, Name: ${this.name}, Age: ${this.age}`;
    }
}

let emp = new Employee("John Doe", 35, 12345);
console.log(emp.getEmployeeDetails());