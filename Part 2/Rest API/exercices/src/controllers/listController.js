import mongoose from "mongoose";
import { ListSchema } from "../models/listModel";
import { TodoSchema} from "../models/todoModel";

const List = mongoose.model('List', ListSchema)
const Todo = mongoose.model('Todo', TodoSchema)

export const addNewList = (req, res) => {
    let newList = new List(req.body);

    newList.save((err, list) => {
        if (err) {
            res.send(err);
        }
        res.json(list);
    });
};