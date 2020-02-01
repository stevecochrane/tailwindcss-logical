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

			const marginBlockEndUtilities = spacing.map(([key, value]) => {
				return {
					[`.mbe-${key}`]: {
						marginBlockEnd: value
					}
				};
			});

			const marginInlineStartUtilities = spacing.map(([key, value]) => {
				return {
					[`.mis-${key}`]: {
						marginInlineStart: value
					}
				};
			});

			const marginInlineEndUtilities = spacing.map(([key, value]) => {
				return {
					[`.mie-${key}`]: {
						marginInlineEnd: value
					}
				};
			});

			addUtilities(marginBlockStartUtilities);
			addUtilities(marginBlockEndUtilities);
			addUtilities(marginInlineStartUtilities);
			addUtilities(marginInlineEndUtilities);
		}
	]
}
