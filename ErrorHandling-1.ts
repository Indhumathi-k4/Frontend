function parseJson(jsonString: string): any | null {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Error parsing JSON:", error.message);
        return null;
    }
}


console.log(parseJson('{"name": "Alice", "age": 25}')); 
console.log(parseJson("invalid json")); 