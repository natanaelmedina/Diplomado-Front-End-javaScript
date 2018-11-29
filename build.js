
/*temp code for commpile file  
const runAll = require("npm-run-all");

runAll(["build","babel"], { parallel: false })
	.then(() => {
		console.log("done!");
	})
	.catch(err => {
		console.log(err);
	});

//compilador sasss
const compileSass = require('compile-sass');
compileSass.compileSassAndSaveMultiple({
	sassPath: Path.join(__dirname, '../public/sass/'),
	cssPath: Path.join(__dirname, '../public/css/'),
	files: ['style.scss']
}).then(() => {
	console.log("done!");
})
	.catch(err => {
		console.log(err);
	});

*/