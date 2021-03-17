const MongoDBService = require('../../../services/mongoDB');


exports.findById = async(id) => {
    return await MongoDBService.findOne("todo", {
        _id: id
    });
}

exports.findAll = async(where = {}, options = {}) => {
    return await MongoDBService.findMany(
        "todo",
        where, 
        options
    );
}

exports.create = async(data) => {
    return await MongoDBService.insertOne(
        "todo",
        data
    );
}

exports.update = async(id, data, options = {}) => {
    return await MongoDBService.updateOne(
        "todo",
        {
            _id: id
        },
        data,
        options
    );
}

exports.remove = async(id) => {
    return await MongoDBService.deleteOne("todo", {
        _id: id
    });
}

exports.count = async(where = {}) => {
    return await MongoDBService.count("todo", where);
}

