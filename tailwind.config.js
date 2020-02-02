module.exports = {
	corePlugins: [],
	plugins: [
		function({ addUtilities, theme, e }) {
			const height = Object.entries(theme('height'));
			const inset = Object.entries(theme('inset'));
			const spacing = Object.entries(theme('spacing'));
			const width = Object.entries(theme('width'));

			const blockSizeUtilities = width.map(([key, value]) => (
				{
					[`.${e(`bs-${key}`)}`]: {
						blockSize: value
					}
				}
			));

			const inlineSizeUtilities = height.map(([key, value]) => (
				{
					[`.${e(`is-${key}`)}`]: {
						inlineSize: value
					}
				}
			));

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

			const insetBlockStartUtilities = inset.map(([key, value]) => (
				{
					[`.inset-block-start-${key}`]: {
						insetBlockStart: value
					}
				}
			));

			const insetBlockEndUtilities = inset.map(([key, value]) => (
				{
					[`.inset-block-end-${key}`]: {
						insetBlockEnd: value
					}
				}
			));

			const insetInlineStartUtilities = inset.map(([key, value]) => (
				{
					[`.inset-inline-start-${key}`]: {
						insetInlineStart: value
					}
				}
			));

			const insetInlineEndUtilities = inset.map(([key, value]) => (
				{
					[`.inset-inline-end-${key}`]: {
						insetInlineEnd: value
					}
				}
			));

			addUtilities(blockSizeUtilities);
			addUtilities(inlineSizeUtilities);

			addUtilities(marginBlockStartUtilities);
			addUtilities(marginBlockEndUtilities);
			addUtilities(marginInlineStartUtilities);
			addUtilities(marginInlineEndUtilities);

			addUtilities(paddingBlockStartUtilities);
			addUtilities(paddingBlockEndUtilities);
			addUtilities(paddingInlineStartUtilities);
			addUtilities(paddingInlineEndUtilities);

			addUtilities(insetBlockStartUtilities);
			addUtilities(insetBlockEndUtilities);
			addUtilities(insetInlineStartUtilities);
			addUtilities(insetInlineEndUtilities);
		}
	]
}
