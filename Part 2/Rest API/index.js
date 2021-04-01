const express = require("express") 
const app = express();
const DataStore = require("nedb")


const port = process.env.PORT || "8000";

const db = new DataStore({filename: 'perso'})


db.loadDatabase()

app.use(express.json())

//API CRUD

//Create
app.post('/api/perso', (req, res) => {
    console.log(req.body)
    db.inset(req.body)
    res.send(req.body)
})

//Read all
app.get('/api/perso', (req, res) => {
    db.find({}, (err, docs) => {
        if (err) console.log(err)

        res.send(docs)
    })
})

//Read One
app.get('/api/perso/:id', (req, res) => {
    db.find({_id: req.params.id }, (err, docs) => {
        if (err) console.log(err)

        res.send(docs)
    })
})

app.listen(port, () => {
    console.log('listening on : ${port}');
});