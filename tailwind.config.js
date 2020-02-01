module.exports = {
	corePlugins: [],
	plugins: [
		function({ addUtilities, theme }) {
			const spacing = Object.entries(theme('spacing', {}));

			const newUtilities = spacing.map((value, key) => {
				return {
					[`.mbs-${key}`]: {
						marginBlockStart: value
					}
				};
			});

			addUtilities(newUtilities);
		}
	]
}
