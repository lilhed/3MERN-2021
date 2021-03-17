const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

/*****************************************************
 * Mongoose schemes
 *****************************************************/

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    priority: Number,
    done: Boolean,
    creation: Date,
    deadline: Date
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

    add: (title, description, priority, done, creation, deadline) => {
        const todo = new todos({
            title: title ?? "",
            description: description ?? "",
            priority: Number(priority ?? 0),
            done: (done === "true"),
            creation: creation ? new Date(creation) : "",
            deadline: deadline ? new Date(deadline) : ""
        });

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