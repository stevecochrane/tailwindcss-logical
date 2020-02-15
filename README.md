# tailwindcss-logical

[CSS Logical Properties and Values](https://www.w3.org/TR/css-logical/) plugin for
[Tailwind CSS](https://tailwindcss.com).

Warning: still a work in progress, not yet production ready.

## Usage

Install [tailwindcss-logical](https://www.npmjs.com/package/tailwindcss-logical)
as a dependency of your project:

```bash
npm install tailwindcss-logical --save-dev
```

Register the plugin in the `plugins` section of your Tailwind config file:

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwindcss-logical')
  ]
}
```

## Configuration

tailwindcss-logical does not yet accept configuration options, but if you would
like the ability to configure this plugin further, please file an
[issue](https://github.com/stevecochrane/tailwindcss-logical/issues) and let me know!

## Roadmap

To do for v1.0.0 (subject to change):

- [x] Add margin utilities
- [x] Add padding utilities
- [x] Add inset utilities
- [x] Add border width utilities
- [x] ~~Add border style utilities~~
- [x] ~~Add border color utilities~~
- [x] Add border radius utilities
- [x] Add logical height and logical width (block-size, inline-size) utilities
- [x] Add min/max block-size/inline-size utilities
- [x] ~~Add flow-relative values for caption-side~~
- [x] Add flow-relative values for float and clear
- [x] Add flow-relative values for text-align
- [x] Add flow-relative values for resize
- [x] Move from anonymous function in Tailwind config to external plugin
- [x] Ensure compatibility with custom spacing configs
- [x] Ensure compatibility with custom inset configs
- [x] ~~Ensure compatibility with custom color configs~~
- [x] Ensure compatibility with values that need to be escaped (e.g. '1/2')
- [x] Ensure compatibility with negative values
- [x] Allow customization of variants
- [x] Add test page demonstrating all new utility categories
- [ ] Final pass on class naming for consistency and to avoid collisions
- [x] Update for Tailwind v1.2.0 plugin improvements
- [ ] Allow for custom options
- [ ] Documentation
- [ ] Remove code repetition (make more DRY)
