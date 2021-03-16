const http = require('http');
const bl = require('bl');

const urls = process.argv.slice(2);
const nbURLs = urls.length
let results = [];

function doHttpGet(url, index) {
    http.get(url, function(response){
        response.pipe(bl(function (err, data){
            if(err){
                return console.log(err)
            }
            results[index] = data.toString()
            if (results.length === nbURLs){
                for (let i=0; i < nbURLs; i++){
                    console.log(results[i])
                }
            }
        }));
    });
}

for (let i=0; i < nbURLs; i++){
    doHttpGet(urls[i], i)
}