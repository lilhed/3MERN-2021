const filterByExt = require('./06_files_filter_module.js');
const [ dirPath, ext ] = process.argv.slice(2);

filterByExt(dirPath, ext, function (err, files) {
    if (err) {
        console.error(err);
    }

    files.forEach(file => console.log(file));
});