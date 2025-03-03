function getUserInfo(age: number, isActive: boolean): string {
    return `User is ${age} years old and is currently ${isActive ? "active" : "inactive"}.`;
}

// Example usage
let age: number = 30;
let isActive: boolean = false;
console.log(getUserInfo(age, isActive));