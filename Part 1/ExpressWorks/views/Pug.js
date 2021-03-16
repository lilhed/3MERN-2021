app.get('/home', (req, res, next) => {
    return res.render(
        'index', 
        {
            date: new Date().toDateString()
        }
    );
});

app.set('view engine', 'pug');