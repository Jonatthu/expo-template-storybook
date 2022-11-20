const nativewind = require('nativewind/tailwind');

// Uncomment important and required statement when compiling outputs for web
/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
	darkMode: 'media',
	content: [
		'App.tsx',
	],
	presets: [nativewind],
	plugins: [],
};
