const Mongo = require('mongodb');
const MongoClient = Mongo.MongoClient;
const CONFIG = require(process.env.config);
const DATABASE = require(process.env.database)[CONFIG.env];

const dbName = DATABASE.database;
const uri = DATABASE.uri;

const client = new MongoClient(
    uri, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
);

const queryParser = where => {
    Object.keys(where).forEach(key => {
        if(key === "_id") {
            where[key] = new Mongo.ObjectID(where[key]);
        }
    });
    return where;
}

exports.insertOne = async(collectionName, data = {}) => {
    return await new Promise( async(resolve, reject) => {
        try {
            await client.connect();
            const database = client.db(dbName);
            const collection = database.collection(collectionName);
            const result = await collection.insertOne(data);
            resolve(result);
        } catch (err) {
            reject(err);
        } 
    }).catch(
        (err) => {
            console.error(err);
            return null;
        }
    );
}


exports.insertMany = async(collectionName, datas = [], options = {}) => {
    return await new Promise( async(resolve, reject) => {
        try { 
            await client.connect();
            const database = client.db(dbName);
            const collection = database.collection(collectionName);
            const result = await collection.insertMany(datas, options);
            resolve(result);
        } catch (err) {
            reject(err);
        } 
    }).catch(
        (err) => {
            console.error(err);
            return null;
        }
    );
}


exports.findMany = async(collectionName, where = {}, options = {}) => {
    return await new Promise( async(resolve, reject) => {
        try {
            const query = queryParser(where);
            await client.connect();
            const database = client.db(dbName);
            const collection = database.collection(collectionName);
            const result = await collection.find(query, options).toArray();
            resolve(result);
        } catch (err) {
            reject(err);
        } 
    }).catch(
        (err) => {
            console.error(err);
            return null;
        }
    );
}


exports.findOne = async(collectionName, where = {}, options = {}) => {
    return await new Promise( async(resolve, reject) => {
        try {
            const query = queryParser(where);
            await client.connect();
            const database = client.db(dbName);
            const collection = database.collection(collectionName);
            const result = await collection.findOne(query, options);
            resolve(result);
        } catch (err) {
            reject(err);
        } 
    }).catch(
        (err) => {
            console.error(err);
            return null;
        }
    );
}


exports.updateOne = async(collectionName, where = {}, data = {}, options = {}) => {
    return await new Promise( async(resolve, reject) => {
        try {
            const query = queryParser(where);
            await client.connect();
            const database = client.db(dbName);
            const collection = database.collection(collectionName);
            const result = await collection.updateOne(query, data, options);
            resolve(result);
        } catch (err) {
            reject(err);
        } 
    }).catch(
        (err) => {
            console.error(err);
            return null;
        }
    );
}


exports.updateMany = async(collectionName, where = {}, data = {}, options = {}) => {
    return await new Promise( async(resolve, reject) => {
        try {
            const query = queryParser(where);
            await client.connect();
            const database = client.db(dbName);
            const collection = database.collection(collectionName);
            const result = await collection.updateMany(query, data, options);
            resolve(result);
        } catch (err) {
            reject(err);
        } 
    }).catch(
        (err) => {
            console.error(err);
            return null;
        }
    );
}


exports.deleteOne = async(collectionName, where = {}) => {
    return await new Promise( async(resolve, reject) => {
        try {
            const query = queryParser(where);
            await client.connect();
            const database = client.db(dbName);
            const collection = database.collection(collectionName);
            const result = await collection.deleteOne(query);
            (result.deletedCount === 1) ?
                resolve(result) : reject('Not found.');
        } catch (err) {
            reject(err);
        } 
    }).catch(
        (err) => {
            console.error(err);
            return null;
        }
    );
}


exports.deleteMany = async(collectionName, where = {}) => {
    return await new Promise( async(resolve, reject) => {
        try {
            const query = queryParser(where);
            await client.connect();
            const database = client.db(dbName);
            const collection = database.collection(collectionName);
            const result = await collection.deleteMany(query);
            (result.deletedCount > 0) ?
                resolve(result) : reject('Not found.');
            resolve(result);
        } catch (err) {
            reject(err);
        } 
    }).catch(
        (err) => {
            console.error(err);
            return null;
        }
    );
}


exports.count = async(collectionName, where = {}) => {
    return await new Promise( async(resolve, reject) => {
        try {
            const query = queryParser(where);
            await client.connect();
            const database = client.db(dbName);
            const collection = database.collection(collectionName);
            const result = await collection.countDocuments(query);
            resolve(result);
        } catch (err) {
            reject(err);
        } 
    }).catch(
        (err) => {
            console.error(err);
            return null;
        }
    );
}


exports.client = client