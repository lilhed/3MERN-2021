const mongoose = require('mongoose');
const list = require('./list.js');

/*****************************************************
 * Mongoose schemes
 *****************************************************/

const TodoSchema = new mongoose.Schema({
    list:           { type: mongoose.Types.ObjectId, default: null },
    title:          { type: String, default: "" },
    description:    { type: String, default: "" },
    priority:       { type: Number, default: 0 },
    done:           { type: Boolean, default: false },
    creation:       { type: Date, default: new Date() },
    deadline:       { type: Date, default: null }
});

const todos = mongoose.model('Todo', TodoSchema, 'todos');

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
        const cleanedProps = removeEmptyProperties(properties);
        const todo = new todos(cleanedProps);

        if (cleanedProps.list) {
            return todo.save()
                .then(result => {
                    return list.get(cleanedProps.list)
                        .then(list => {
                            list.tasks.push(todo);
                            list.save();
                            return todo;
                        });
                })
        } else {
            return todo.save();
        }
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