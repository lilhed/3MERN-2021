const express = require('express');
const bp = require('body-parser');
const dbConfig = require('./config/database_config.js');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bp.urlencoded({ extended: true }));

app.use(bp.json());

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {useNewUrlParser: true})
    .then(() => {console.log("Connected to database");})
    .catch(err => {
        console.log("Not connected to database due to ", err);
        process.exit();
    })

app.get('/', (request, response) => {
    response.json({ message: "Test is ok" });
});

require('./routes/todo_routes')(app);
require('./routes/list_routes')(app);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})