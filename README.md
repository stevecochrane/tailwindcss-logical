# tailwindcss-logical

[CSS Logical Properties and Values](https://drafts.csswg.org/css-logical/) plugin for
[Tailwind CSS](https://tailwindcss.com).

Warning: still a work in progress, not yet production ready.

## Usage

Install [tailwindcss-logical](https://www.npmjs.com/package/tailwindcss-logical) as a dependency of your project:

```bash
npm install tailwindcss-logical --save-dev
```

Register tailwindcss-logical in the `plugins` section of your Tailwind config file:

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwindcss-logical')
  ]
}
```

## What are CSS Logical Properties and Values?

## What's Included

### Flow-relative Values for `float` and `clear`

```css
.float-block { float: block; }
.float-inline { float: inline; }
```

### Flow-relative Values for `text-align`

```css
.text-start { text-align: inline-start; }
.text-end { text-align: inline-end; }
```

### Flow-relative Values for `resize`

```css
.resize-block { resize: block; }
.resize-inline { resize: inline; }
```

### Logical Height and Logical Width

Utilities are generated for the `block-size`, `inline-size`, `min-block-size`, `min-inline-size`, `max-block-size`, and
`max-inline-size` properties. These match the values in your `height`, `width`, `min-height`, `min-width`,
`max-height`, and `max-width` config objects, respectively.

```css
.bs-1 { block-size: 0.25rem; }
.is-1 { inline-size: 0.25rem; }
.min-bs-0 { min-block-size: 0; }
.min-is-0 { min-inline-size: 0; }
.max-bs-full { max-block-size: 100%; }
.max-is-full { max-inline-size: 100%; }
```

### Flow-relative Margins

Utilities are generated for the `margin-block-start`, `margin-block-end`, `margin-inline-start`, and
`margin-inline-end` properties, as well as for the shorthand properties `margin-block` and `margin-inline`. These match
the values in your `margin` config object.

```css
.mb-1 { margin-block: 0.25rem; }
.mi-1 { margin-inline: 0.25rem; }

.mbs-1 {
  -webkit-margin-before: 0.25rem;
  margin-block-start: 0.25rem;
}

.mbe-1 {
  -webkit-margin-after: 0.25rem;
  margin-block-end: 0.25rem;
}

.mis-1 {
  -webkit-margin-start: 0.25rem;
  margin-inline-start: 0.25rem;
}

.mie-1 {
  -webkit-margin-end: 0.25rem;
  margin-inline-end: 0.25rem;
}
```

### Flow-relative Padding

Utilities are generated for the `padding-block-start`, `padding-block-end`, `padding-inline-start`, and
`padding-inline-end` properties, as well as for the shorthand properties `padding-block` and `padding-end`. These match
the values in your `padding` config object.

```css
.pb-1 { padding-block: 0.25rem; }
.pi-1 { padding-inline: 0.25rem; }

.pbs-1 {
  -webkit-padding-before: 0.25rem;
  padding-block-start: 0.25rem;
}

.pbe-1 {
  -webkit-padding-after: 0.25rem;
  padding-block-end: 0.25rem;
}

.pis-1 {
  -webkit-padding-start: 0.25rem;
  padding-inline-start: 0.25rem;
}

.pie-1 {
  -webkit-padding-end: 0.25rem;
  padding-inline-end: 0.25rem;
}
```

### Flow-relative Offsets

Utilities are generated for the `inset-block-start`, `inset-block-end`, `inset-inline-start`, and
`inset-inline-end` properties, as well as for the shorthand properties `inset-block` and `inset-inline`. These match
the values in your `inset` config object.

```css
.inset-block-0 { inset-block: 0; }
.inset-inline-0 { inset-inline: 0; }
.block-start-0 { inset-block-start: 0; }
.block-end-0 { inset-block-end: 0; }
.inline-start-0 { inset-inline-start: 0; }
.inline-end-0 { inset-inline-end: 0; }
```

### Flow-relative Border Widths

Utilities are generated for the `border-block-start-width`, `border-block-end-width`,
`border-inline-start-width`, and `border-inline-end-width` properties. These match the values in your `borderWidth`
config object.

```css
.border-bs-2 { border-block-start-width: 2px; }
.border-be-2 { border-block-end-width: 2px; }
.border-is-2 { border-inline-start-width: 2px; }
.border-ie-2 { border-inline-end-width: 2px; }
```

### Flow-relative Corner Rounding

Utility classes are generated for the `border-start-start-radius`, `border-start-end-radius`,
`border-end-start-radius`, and `border-end-end-radius` properties for rounding individual corners. There are also
shorthand utilities for rounding a side of an element. These match the values in your `borderRadius` config object.

```css
.rounded-bs-md {
  border-start-start-radius: 0.375rem;
  border-end-start-radius: 0.375rem;
}

.rounded-be-md {
  border-end-end-radius: 0.375rem;
  border-start-end-radius: 0.375rem;
}

.rounded-is-md {
  border-start-end-radius: 0.375rem;
  border-start-start-radius: 0.375rem;
}

.rounded-ie-md {
  border-end-start-radius: 0.375rem;
  border-end-end-radius: 0.375rem;
}

.rounded-ss-md { border-start-start-radius: 0.375rem; }
.rounded-es-md { border-end-start-radius: 0.375rem; }
.rounded-ee-md { border-end-end-radius: 0.375rem; }
.rounded-se-md { border-start-end-radius: 0.375rem; }
```

## What's Not Included

This plugin does not generate utilities for everything in the
[CSS Logical Properties and Values Level 1](https://drafts.csswg.org/css-logical/) specification. If something is not
already represented in Tailwind's defaults, it is not represented in this plugin.

* Logical Values for the `caption-side` property: Tailwind does not have `caption-side` utilities.
* Flow-relative Border Width shorthand properties `border-block-width` and `border-block-height`: Tailwind does not
  have `border-width` controls for the X or Y axis.
* Flow-relative Border Styles: Tailwind only has `border-style` utilities for all sides of an element at once.
* Flow-relative Border Colors: Same as for Border Styles.

Any logical properties and values not represented in the specification, such as `overscroll-behavior-block` and
`overscroll-behavior-inline`, are also not represented in this plugin.

If there are any notable omissions that you think should belong in this plugin, please file an
[issue](https://github.com/stevecochrane/tailwindcss-logical/issues) and let me know.

## Browser Compatibility

CSS Logical Properties and Values is a fairly new (and still evolving) specification, so browser support varies.
None of the logical properties and values are currently supported in Internet Explorer 11 or Edge (including Edge
Chromium as of February 2020), and some, such as Flow-relative Offsets, are currently only supported in Firefox.

If some utilities don't seem to work correctly, be sure to check [Can I use...](https://caniuse.com/) to see if that
property or value is supported by your browser. Relevant Can I use... links for each set of utilities are included in
the [test page](https://github.com/stevecochrane/tailwindcss-logical/blob/master/test-page.html).

If better browser support is desired, you may be able to utilize polyfills or post-processing to fill the gaps,
such as running the resulting styles through [postcss-logical](https://github.com/csstools/postcss-logical). (This has
not been tested yet but I will do so shortly.)

## Configuration

To configure the generated values for a logical property, configure the non-logical equivalent. (e.g. use the `width`
config to configure the values for `inline-size`.) See the What's Included section above for more details on each
property.

tailwindcss-logical does not yet accept configuration options, but if you would like the ability to configure this
plugin further, please file an [issue](https://github.com/stevecochrane/tailwindcss-logical/issues) and let me know.

## Roadmap

* Test with postcss-logical
* Allow for custom options to be passed to the plugin
* Iterate on the test page

## Contributing

## Contact
