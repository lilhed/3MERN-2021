import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import routes from './src/routes/exRoutes';

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/todoListDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`Le serveur Node et Express est fonctionnel sur le port : ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Le serveur est fonctionnel sur le port : ${PORT}`)
);