// EXPORT CONTROLLERS HERE

const fs = require('fs');

exports.RequestToJSON = (req, res, next) => {
    return res.json(req.query);
}

exports.ReadFile = async(req, res, next) => {
    try {
        const file = await fs.readFileSync(process.argv[3]);
        return res.status(200).send(JSON.parse(file));
    } catch (err) {
        return res.status(500).send(`Internal server error: ${JSON.stringify(err)}`);
    }
}