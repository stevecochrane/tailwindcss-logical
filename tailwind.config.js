module.exports = {
	corePlugins: [],
	plugins: [
		function({ addUtilities, theme }) {
			const spacing = Object.entries(theme('spacing'));

			const marginBlockStartUtilities = spacing.map(([key, value]) => {
				return {
					[`.mbs-${key}`]: {
						marginBlockStart: value
					}
				};
			});

			addUtilities(marginBlockStartUtilities);
		}
	]
}
