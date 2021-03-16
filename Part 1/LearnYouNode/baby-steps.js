const [_node, _path, ...numbers] = process.argv;

console.log(numbers.reduce((total, number) => {
    return total + +number;
}, 0))