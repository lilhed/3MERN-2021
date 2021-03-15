const mymodule = require('./mymodule.js')

let callback = function(error, array){
    for(i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

mymodule(process.argv[2], process.argv[3], callback)
