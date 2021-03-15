var result = 0;

for (var i = 2; process.argv.length; i++){
    result += Number(process.argv[i]);
}
console.log(result)