const [_, _, ...numbers] = process.argv;

let result = 0;

numbers.map(arg => result += Number(arg));

console.log(result);