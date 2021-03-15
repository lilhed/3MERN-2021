
var somme = 0;

for (var i = 2; i < process.argv.length; i++) {
    
    somme += Number(process.argv[i]);
}

console.log(somme);

