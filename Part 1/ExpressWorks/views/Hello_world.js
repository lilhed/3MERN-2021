const express = require('express');

const app = express();

app.get('/home', function(req, res) {
    res.end('Hello World!');
})

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
app.set('view engine', 'html')

app.listen(process.argv[2]);

app.get('/home', (req, res, next) => {
    return res.render('index');
});