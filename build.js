
const runAll = require("npm-run-all");
const Path = require('path');
//compilador sasss
const compileSass = require('compile-sass');

module.exports = {
	compilar: async () => {
		try {
			await compileSass.compileSassAndSaveMultiple({
				sassPath: Path.join(__dirname, './public/sass/'),
				cssPath: Path.join(__dirname, './public/css/'),
				files: ['style.scss']
			});
			console.log("sass compile done!");

			await runAll(["build","babel"], { parallel: false })
			console.log("webpack and babel compile done!");


		} catch (error) {
			throw error
		}
	}

}







