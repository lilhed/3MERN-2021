'use strict'

const fs = require('fs')
const validFileName = ['routes.config.js'];
const path = require('path')

const requireFiles = function(directory, app) {
    fs.readdirSync(directory).forEach(function(fileName) {
        // Recurse if directory
        if (fs.lstatSync(`${directory}/${fileName}`).isDirectory()) {
            requireFiles(`${directory}/${fileName}`, app)
        } else {
            // Skip this file
            if (fileName === 'index.js' && directory === __dirname) return;
            // Skip this file
            if (!validFileName.includes(fileName)) return
            require(`${directory}/${fileName}`)(app)
        }
    })
}

module.exports = function(app) {
    requireFiles(path.normalize(`${__dirname}/../src`), app)
}