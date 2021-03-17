const boom = require('@hapi/boom');
const ListService = require('../service/list.service');


exports.listExist = async(req, res, next) => {
    try {
        const list = await ListService.findById(req.query.id);
        return (list) ?
            next() :
            next(boom.badRequest(`There is no list with ID '${req.query.id}'.`));
    } catch (err) {
        return next(err.isBoom ? err : boom.internal(err.name));
    }
}