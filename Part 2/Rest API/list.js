const mongoose = require('mongoose');

/*****************************************************
 * Mongoose schemes
 *****************************************************/

const ListSchema = new mongoose.Schema({
    title: String,
    description: String
});

const lists = mongoose.model('List', ListSchema);

/*****************************************************
 * Module
 *****************************************************/

module.exports = {
    get: (id) => {
        return lists.findById(id).exec();
    },

    getAll: () => {
        return lists.find({}).exec();
    },

    add: (title, description) => {
        const list = new lists({
            title: title ?? "",
            description: description ?? ""
        });

        return list.save();
    },

    update: (id, properties) => {
        const cleanedProps = removeEmptyProperties(properties);

        return lists.updateOne({ _id: id }, cleanedProps).exec();
    },

    delete(id) {
        return lists.deleteOne({ _id: id }).exec();
    }
}

/*****************************************************
 * Functions
 *****************************************************/

const removeEmptyProperties = (obj) => {
    const newObj = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (value) newObj[key] = value;
        }
    }

    return newObj;
}