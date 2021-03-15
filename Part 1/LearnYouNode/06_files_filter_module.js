const { promises: fs } = require('fs');
const path = require('path');

module.exports = async function (dirPath, ext, callback) {
    if (ext.charAt(0) !== '.') { ext = `.${ext}`; }

    try {
        const files = await fs.readdir(dirPath);
        let matchingFiles = files.filter(name => path.extname(name).toLowerCase() === ext);

        return callback(null, [...matchingFiles]);
    } catch (err) {
        return callback(err, null);
    }
}