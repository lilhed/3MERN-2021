import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const ListSchema = new Schema({
    Title: {
        type: String,
        required: 'Entrez le titre de votre liste'
    },
    Description: {
        type: String,
        required: 'Entrez la description de votre liste'
    }
});