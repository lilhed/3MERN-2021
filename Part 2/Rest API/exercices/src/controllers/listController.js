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

export const getListWithID = (req, res) => {
    List.findById(req.params.listId, (err, list) => {
        if (err) {
            res.send(err);
        }
        res.json(list);
    });
};

export const UpdateList = (req, res) => {
  List.findByIdAndUpdate({ _id: req.params.listId }, req.body, { new: true }, (err, list) => {
      if (err) {
          res.send(err);
      }
      res.json(list);
  });
};

export const DeleteList = (req, res) => {
    List.remove({ _id: req.params.listId }, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Supression de la liste réussie'});
    });
};