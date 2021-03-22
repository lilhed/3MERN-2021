const mongoose = require('mongoose')

const { Schema } = mongoose;

const ListSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    // user_id: {
    //     type: Schema.ObjectId
    // },
    todos: [
        {
            type: Schema.ObjectId,
            ref: 'Todo'
        }
    ]
})

module.exports = mongoose.model('List', ListSchema)
