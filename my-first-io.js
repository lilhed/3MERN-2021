const fs = require('fs');
const fichier = fs.readFileSync(process.argv[2]);
const str = fichier.toString();
const ligne = str.split('\n');
const nombreDeLigne = ligne.length - 1;
console.log(nombreDeLigne);