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

			const paddingBlockStartUtilities = spacing.map(([key, value]) => (
				{
					[`.pbs-${key}`]: {
						paddingBlockStart: value
					}
				}
			));

			const paddingBlockEndUtilities = spacing.map(([key, value]) => (
				{
					[`.pbe-${key}`]: {
						paddingBlockEnd: value
					}
				}
			));

			const paddingInlineStartUtilities = spacing.map(([key, value]) => (
				{
					[`.pis-${key}`]: {
						paddingInlineStart: value
					}
				}
			));

			const paddingInlineEndUtilities = spacing.map(([key, value]) => (
				{
					[`.pie-${key}`]: {
						paddingInlineEnd: value
					}
				}
			));

			addUtilities(marginBlockStartUtilities);
			addUtilities(marginBlockEndUtilities);
			addUtilities(marginInlineStartUtilities);
			addUtilities(marginInlineEndUtilities);

			addUtilities(paddingBlockStartUtilities);
			addUtilities(paddingBlockEndUtilities);
			addUtilities(paddingInlineStartUtilities);
			addUtilities(paddingInlineEndUtilities);
		}
	]
}
