var fs = require('fs');
var data = require('js-yaml').safeLoad(fs.readFileSync(process.argv[2], 'utf-8'));
data.header = data.header.replace(/{DATE}/g, process.argv[3]);
var path = require('path');
require('glob').sync('./generators/*.js').forEach(function (file) {
	var generator = require(file);
	fs.writeFileSync(path.join(process.argv[4], generator.file_name), generator.generate(data));
});
