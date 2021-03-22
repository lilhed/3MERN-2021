import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const TodoSchema = new Schema ({
    author: String,
    title: String,
    todo_body: String,
    importance: Number,
    created_date : {
        type: Date,
        default: Date
    }
 

})