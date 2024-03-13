/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/**/*.{html,js}"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: ["light"],
	},
	plugins: [require("daisyui")],
};
