const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['./assets/*.{jpg,png,jfif,jpeg}'], {
	destination: './assets/webp/',
	plugins: [
		imageminWebp({
			quality: 90,
		}),
	],
}).then(() => {
	console.log('Images Converted Successfully!!!');
});
