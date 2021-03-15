const http = require('http');
const bl = require('bl');

let results = []

for(let i = 2; i < process.argv.length; i++){
    const url = process.argv[i];
    http.get(url, function(response){
        response.pipe(bl(function(err, data){
            results[i - 2] = data.toString()

            if(results.length === process.argv.length - 2){
                for(let j = 0; j < results.length; j++){
                    console.log(results[j]);
                }
            }
        }))
    })
}


