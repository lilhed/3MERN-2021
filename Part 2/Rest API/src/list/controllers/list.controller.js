const boom = require('@hapi/boom');
const ListService = require('../service/list.service');


exports.getAll = async(req, res, next) => {
    try {
        const lists = await ListService.findAll();
        return (lists) ?
            res.status(200).json(lists) :
            next(boom.badRequest("Fail to load lists."));
    } catch (err) {
        return next(err.isBoom ? err : boom.internal(err.name));
    }
}

exports.getById = async(req, res, next) => {
    try {
        const list = await ListService.findById(req.query.id);
        return (list) ?
            res.status(200).json(list) :
            next(boom.badRequest("This list does not exist."));
    } catch (err) {
        return next(err.isBoom ? err : boom.internal(err.name));
    }
}

exports.create = async(req, res, next) => {
    try {
        const list = await ListService.create(req.body);
        return (list) ? 
            res.status(201).json(list) :
            next(boom.badRequest("Fail to create list."));
    } catch (err) {
        return next(err.isBoom ? err : boom.internal(err.name));
    }
}

exports.update = async(req, res, next) => {
    try {
        const list = await ListService.update(req.query.id, req.body);
        return (list) ? 
            res.status(204).json(list) :
            next(boom.badRequest("Fail to update list."));
    } catch (err) {
        return next(err.isBoom ? err : boom.internal(err.name));
    }
}

exports.delete = async(req, res, next) => {
    try {
        const deleted = await ListService.remove(req.query.id);
        return (deleted) ?
            res.status(204).json({ deleted: true }) : 
            next(boom.badRequest("Fail to delete list."));
    } catch (err) {
        return next(err.isBoom ? err : boom.internal(err.name));
    }
}
