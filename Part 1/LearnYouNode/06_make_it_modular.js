const theModule = require('./06_module');

const dir = process.argv[2];
const ext = process.argv[3];

theModule(dir, ext, function (err, files) {
    if(err){
        return console.log(err)
    }
    for (let i=0; i < files.length; i++){
        console.log(files[i]);
    }
});