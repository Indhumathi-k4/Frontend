function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Cannot divide by zero");
    }
    return numerator / denominator;
}
try {
    console.log(divideNumbers(10, 2));
    console.log(divideNumbers(15, 0));
}
catch (error) {
    console.error(error.message);
}
