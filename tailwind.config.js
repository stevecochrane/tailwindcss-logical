module.exports = {
	corePlugins: [],
	plugins: [
		function({ addUtilities, theme }) {
			const spacing = Object.entries(theme('spacing'));

			const marginBlockStartUtilities = spacing.map(([key, value]) => (
				{
					[`.mbs-${key}`]: {
						marginBlockStart: value
					}
				}
			));

			const marginBlockEndUtilities = spacing.map(([key, value]) => (
				{
					[`.mbe-${key}`]: {
						marginBlockEnd: value
					}
				}
			));

			const marginInlineStartUtilities = spacing.map(([key, value]) => (
				{
					[`.mis-${key}`]: {
						marginInlineStart: value
					}
				}
			));

			const marginInlineEndUtilities = spacing.map(([key, value]) => (
				{
					[`.mie-${key}`]: {
						marginInlineEnd: value
					}
				}
			));

			addUtilities(marginBlockStartUtilities);
			addUtilities(marginBlockEndUtilities);
			addUtilities(marginInlineStartUtilities);
			addUtilities(marginInlineEndUtilities);
		}
	]
}
