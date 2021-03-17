//var mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
//mongoose.connect('mongodb+srv://3merncluster.h4gai.mongodb.net/myFirstDatabase');
MongoClient.connect('mongodb+srv://3merncluster.h4gai.mongodb.net/myFirstDatabase', {useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('Connected to AWS:3merncluster.h4gai.mongodb.net'));