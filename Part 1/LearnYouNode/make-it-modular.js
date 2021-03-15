const filtring_module = require('./mymodule.js')

var path = process.argv[2]
var ext = process.argv[3]

filtring_module(path, ext)