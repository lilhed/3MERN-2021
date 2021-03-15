const fs = require('fs');
const fichier = process.argv[2];

fs.readFile(fichier, function callback (err, contents){
    var str = contents.toString()
    var ligne = str.split('\n')
    var nombreDeLigne = ligne.length - 1
    console.log(nombreDeLigne);
})