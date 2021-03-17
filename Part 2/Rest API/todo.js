const mongoose = require('mongoose');

/*****************************************************
 * Mongoose schemes
 *****************************************************/

const TodoSchema = new mongoose.Schema({
    title:          { type: String, default: "" },
    description:    { type: String, default: "" },
    priority:       { type: Number, default: 0 },
    done:           { type: Boolean, default: false },
    creation:       { type: Date, default: new Date() },
    deadline:       { type: Date, default: null }
});

const todos = mongoose.model('Todo', TodoSchema);

/*****************************************************
 * Module
 *****************************************************/

module.exports = {
    get: (id) => {
        return todos.findById(id).exec();
    },

    getAll: () => {
        return todos.find({}).exec();
    },

    add: (properties) => {
        const todo = new todos(removeEmptyProperties(properties));

        return todo.save();
    },

    update: (id, properties) => {
        const cleanedProps = removeEmptyProperties(properties);

        return todos.updateOne({ _id: id }, cleanedProps).exec();
    },

    delete(id) {
        return todos.deleteOne({ _id: id }).exec();
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