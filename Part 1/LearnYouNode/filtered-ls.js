const fs = require('fs')
fs.readdir(process.argv[2], function(err, list){
    for(i = 0; i < list.length; i++){
        const item = list[i]
        const split = item.split('.')
        if(split[1] && split[1] == 'md'){
            console.log(item)
        }
    }
})
