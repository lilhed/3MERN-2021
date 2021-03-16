const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function(response){
    let count = 0;

    response.on('data', function(data){
        count += data.toString().length
    })

    response.pipe(bl(function(err, data){
        console.log(count)
        console.log(data.toString())
    }))
})
