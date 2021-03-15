var fs = require("fs");
var file = fs.readFileSync(process.argv[2]);
var fileContent = file.toString();
var nbrLine = fileContent.split("\n")


console.log(nbrLine.length -1)