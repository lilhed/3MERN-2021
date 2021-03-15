const mymodule = require('./mymodule.js')

mymodule(process.argv[2], process.argv[3], (error, array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }}
)
