const MongoDBService = require('../../../services/mongoDB');


exports.findById = async(id) => {
    return await MongoDBService.findOne("list", {
        _id: id
    });
}

exports.findAll = async(where = {}, options = {}) => {
    return await MongoDBService.findMany(
        "list",
        where, 
        options
    );
}

exports.create = async(data) => {
    return await MongoDBService.insertOne(
        "list",
        data
    );
}

exports.update = async(id, data, options = {}) => {
    return await MongoDBService.updateOne(
        "list",
        {
            _id: id
        },
        data,
        options
    );
}

exports.remove = async(id) => {
    return await MongoDBService.deleteOne("list", {
        _id: id
    });
}

exports.count = async(where = {}) => {
    return await MongoDBService.count("list", where);
}

