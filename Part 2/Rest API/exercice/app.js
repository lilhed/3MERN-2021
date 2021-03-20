const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv/config')


app.use(bodyParser.json())


//import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

//Routes

app.get('/', (req,res) => {
    res.send('Bonsoir !');
})



app.get('/posts', (req,res) => {
    res.send('Voici les posts !');
})

//DB Connect
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
() => console.log("connected to db")
);






app.listen(3000);