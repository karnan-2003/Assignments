let rollNumbers = [7, 45, 123, 9];

let formattedRollNumbers = rollNumbers.map(num => num.toString().padStart(4, '0'));

console.log(formattedRollNumbers);
