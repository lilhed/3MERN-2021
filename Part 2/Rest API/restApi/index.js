import express from 'express'
import routes from './src/routes/todoRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
const app  = express()
const PORT = 4000;
// connection bdd
mongoose.Promise = global.Promise 
mongoose.connect('mongodb://localhost/db',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
 // setup du body parser (ancienne version)
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json());
routes(app);
app.get('/', (req,res )=>
res.send(`Node and express server runnong on port ${PORT}`)
);

app.listen(PORT, () => {
    console.log(`server running on  http://localhost:${PORT}`)
  })