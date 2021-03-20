const boom = require('@hapi/boom');


const checkType = (data, type) => {
    switch (type) {
        case "integer":
            return (typeof data === "number" && 
                Number.isInteger(Number(data)) &&
                Math.floor(Number(data)) === Number(data) &&
                Number(data) > 0
            );
        case "number":
            return (typeof data === "number");    
        case "string":
            return (typeof data === "string"); 
        case "array":
            return (typeof data === "object" && Array.isArray(data));
        case "object":
            return (typeof data === "object");
        case "boolean":    
            return (typeof data === "boolean");
        case "date":
            console.log(new Date(data))
            return (typeof data === "string" && (
                new Date(data) != "Invalid Date"
            ));
        default:
            return true;
    }
}


exports.queryParametersNeeded = (params, type = "any") => {
    return (req, res, next) => {
        try {
            if(typeof params === "string") {
                return (req.query[params]) ?
                    (checkType((["number", "integer"].includes(type)) ? parseFloat(req.query[params]) : req.query[params], type)) ?
                    next() : 
                    next(boom.badRequest(`Argument ${params} should be ${type}`)) : 
                    next(boom.badRequest(`Missing argument ${params} in the query!`));
            } else if(typeof params === "object" && Array.isArray(params)) {
                for (let i = 0; i < params.length; i++) {
                    const param = params[i];
                    if(!req.query[param]) {
                        return next(boom.badRequest(`Missing argument ${param} in the query!`));
                    } else if(!checkType((["number", "integer"].includes(type)) ? parseFloat(req.query[param]) : req.query[param], type)) {
                        return next(boom.badRequest(`Argument ${param} should be ${type}`)); 
                    }  
                }
                next();
            } else {
                return next(boom.badGateway("Server Error: Query params should be type String or Array[String]."));
            }
        } catch (err) {
            console.error(err);
            return next(err.isBoom ? err : boom.internal(err.name)); 
        }
    }
}



exports.paramParametersNeeded = (params, type = "any") => {
    return (req, res, next) => {
        try {
            if(typeof params === "string") {
                return (req.params[params]) ?
                    (checkType((["number", "integer"].includes(type)) ? parseFloat(req.params[params]) : req.params[params], type)) ?
                    next() : 
                    next(boom.badRequest(`Argument ${params} should be ${type}`)) : 
                    next(boom.badRequest(`Missing argument ${params} in the param!`));
            } else if(typeof params === "object" && Array.isArray(params)) {
                for (let i = 0; i < params.length; i++) {
                    const param = params[i];
                    if(!req.params[param]) {
                        return next(boom.badRequest(`Missing argument ${param} in the param!`));
                    } else if(!checkType((["number", "integer"].includes(type)) ? parseFloat(req.params[param]) : req.params[param], type)) {
                        return next(boom.badRequest(`Argument ${param} should be ${type}`)); 
                    }  
                }
                next();
            } else {
                return next(boom.badGateway("Server Error: Param params should be type String or Array[String]."));
            }
        } catch (err) {
            console.error(err);
            return next(err.isBoom ? err : boom.internal(err.name)); 
        }
    }
}


exports.bodyParametersNeeded = (params, type) => {
    return (req, res, next) => {
        try {
            if(typeof params === "string") {
                return (req.body[params] || [false, 0].includes(req.body[params])) ?
                    (checkType(req.body[params], type)) ?
                    next() : 
                    next(boom.badRequest(`Argument ${params} should be ${type}`)) : 
                    next(boom.badRequest(`Missing argument ${params} in the body!`));
            } else if(typeof params === "object" && Array.isArray(params)) {
                for (let i = 0; i < params.length; i++) {
                    const param = params[i];
                    if(!req.body[param] && ![false, 0].includes(req.body[param])) {
                        return next(boom.badRequest(`Missing argument ${param} in the body!`));
                    } else if(!checkType(req.body[param], type) && ![false, 0].includes(req.body[param])) {
                        return next(boom.badRequest(`Argument ${param} should be ${type}`)); 
                    }  
                }
                next();
            } else {
                return next(boom.badGateway("Server Error: Body params should be type String or Array[String]."));
            }
        } catch (err) {
            console.error(err);
            return next(err.isBoom ? err : boom.internal(err.name)); 
        }
    }
}


exports.parseDate = (reqType, param) => {
    return (req, res, next) => {
        try {
            if(req[reqType][param]) {
                if(typeof req[reqType][param] === "string" && new Date(req[reqType][param]) != "Invalid Date") {
                    req[reqType][param] = new Date(req[reqType][param]);
                    next();
                } else {
                    return next(boom.badRequest(`Argument ${param} should be a date.`)); 
                }
            } else {
                return next(boom.badRequest(`Missing argument ${params} in the ${reqType}!`));
            }
        } catch (err) {
            console.error(err);
            return next(err.isBoom ? err : boom.internal(err.name)); 
        }
    }
}