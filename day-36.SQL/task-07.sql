
function formatText(text) {
    // Trim the string to remove spaces at start and end
    let trimmed = text.trim();

    // Capitalize the first letter
    if (trimmed.length === 0) return ""; // handle empty string
    let formatted = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);

    return formatted;
}

// Example usage
let input1 = "   hello world   ";
let input2 = "   javascript is fun";

console.log(formatText(input1)); // "Hello world"
console.log(formatText(input2)); // "Javascript is fun"
