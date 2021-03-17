import mongoose from "mongoose";
import { ListSchema } from "../models/listModel";

const List = mongoose.model('List', ListSchema)

export const addNewList = (req, res) => {
    let newList = new List(req.body);

    newList.save((err, list) => {
        if (err) {
            res.send(err);
        }
        res.json(list);
    });
};

export const getLists = (req, res) => {
    List.find({}, (err, list) => {
        if (err) {
            res.send(err);
        }
        res.json(list);
    });
};