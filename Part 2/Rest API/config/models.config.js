'use strict'

const fs = require('fs')
const validFileName = ['routes.config.js'];
const path = require('path')

const requireModels = function(directory, client) {
    fs.readdirSync(directory).forEach(function(fileName) {
        // Recurse if directory
        if (fs.lstatSync(`${directory}/${fileName}`).isDirectory()) {
            requireModels(`${directory}/${fileName}`, client)
        } else {
            // Skip this file
            if (fileName.slice(-9) !== '.model.js') return
            
            require(`${directory}/${fileName}`)(client);
        }
    })
}

module.exports = function(client) {
    requireModels(path.normalize(`${__dirname}/../src`), client)
}