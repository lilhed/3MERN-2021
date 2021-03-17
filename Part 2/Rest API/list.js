const mongoose = require('mongoose');

/*****************************************************
 * Mongoose schemes
 *****************************************************/

const ListSchema = new mongoose.Schema({
    title:          { type: String, default: "" },
    description:    { type: String, default: "" },
    tasks:          [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }]
});

const lists = mongoose.model('List', ListSchema, 'lists');

/*****************************************************
 * Module
 *****************************************************/

module.exports = {
    get: (id) => {
        return lists.findById(id).populate({ path:'tasks', model:'Todo' }).exec();
    },

    getAll: () => {
        return lists.find({}).populate({ path:'tasks', model:'Todo' }).exec();
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