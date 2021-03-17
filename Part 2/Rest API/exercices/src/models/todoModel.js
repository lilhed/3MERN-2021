import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const TodoSchema = new Schema({
    Title: {
        type: String,
        required: 'Entrez le titre de votre todo'
    },
    Description: {
        type: String,
        required: 'Entrez la description de votre todo'
    },
    Priority: {
        type: Number,
        required: 'Entrez la priorité de votre todo'
    },
    Done: {
        type: Boolean
    },
    Creation: {
        type: Date,
        default: Date.now
    },
    Deadline: {
        type: Date,
        default: null
    }
});