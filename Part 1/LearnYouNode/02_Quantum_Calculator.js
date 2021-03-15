const numbers = process.argv.slice(2);
let sum = 0;

for (let index = 0; index < numbers.length; index++) {
    const number = Number(numbers[index]);

    if (index != 0) { process.stdout.write(` + `); }

    sum += number;
    process.stdout.write(`${number}`);
}

process.stdout.write(` = ${sum}\n`);