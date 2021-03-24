/*
    J'avoue
    J'ai fait compliqué pour rien.

    La solution officielle est plus simple.
 */

const http = require('http');
const bl = require('bl');
const urls = process.argv.slice(2);
let responses = [];

function getReceptor(err, data, url) {
    if (err) {
        return console.error(err);
    }

    responses.push({url: url, data: data.toString()});

    if (responses.length === urls.length) {
        printResponses();
    }
}

function printResponses() {
    responses.sort(function (a, b) {
        return urls.indexOf(a.url) - urls.indexOf(b.url);
    });

    responses.forEach(res => console.log(res.data));
}

urls.forEach(url => {
    http.get(url, function (res) {
        res.pipe(bl((err, data) => getReceptor(err, data, url)));
    });
});