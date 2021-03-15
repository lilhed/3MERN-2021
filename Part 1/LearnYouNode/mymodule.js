const fs = require('fs')
const path = require('path')

module.exports = function (selected_path, selected_ext) {
	fs.readdir(selected_path, (err, data) => {
		for (var i = 0; i < data.length; i++) {
			if (path.extname(data[i]) == ("." + selected_ext)) {
				console.log(data[i])
			}
		}
	});
}