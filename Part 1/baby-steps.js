let result = 0;
for (const arg of process.argv.slice(2)) {
    result += Number(arg);
}
console.log(result);
