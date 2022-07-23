const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./app/components/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#5D3DF7"
			},
			transitionTimingFunction: {
				DEFAULT: "ease-in-out"
			},
			transitionDuration: {
				DEFAULT: "350ms"
			}
		}
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				".flex-center-between": {
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between"
				},
				".flex-center": {
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				}
			});
		})
	]
};
