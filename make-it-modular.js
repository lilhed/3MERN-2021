const mymodule = require('./mymodule');

var directory = process.argv[2];
var extension = process.argv[3];

mymodule(directory, extension, function(err,files){
    if(err){}
    else{
        files.forEach(function(file){
            console.log(file);
        });
    }
});