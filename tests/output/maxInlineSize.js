module.exports = `
  /*! tailwindcss v4.0.9 | MIT License | https://tailwindcss.com */
  @layer theme, base, components, utilities;
  @layer theme {
    :root, :host {
      --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", "Courier New", monospace;
      --spacing: 0.25rem;
      --container-xs: 20rem;
      --container-sm: 24rem;
      --container-md: 28rem;
      --container-lg: 32rem;
      --container-xl: 36rem;
      --container-2xl: 42rem;
      --container-3xl: 48rem;
      --container-4xl: 56rem;
      --container-5xl: 64rem;
      --container-6xl: 72rem;
      --container-7xl: 80rem;
      --default-font-family: var(--font-sans);
      --default-font-feature-settings: var(--font-sans--font-feature-settings);
      --default-font-variation-settings: var(
        --font-sans--font-variation-settings
      );
      --default-mono-font-family: var(--font-mono);
      --default-mono-font-feature-settings: var(
        --font-mono--font-feature-settings
      );
      --default-mono-font-variation-settings: var(
        --font-mono--font-variation-settings
      );
    }
  }
  @layer base {
    *,
    ::after,
    ::before,
    ::backdrop,
    ::file-selector-button {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border: 0 solid;
    }
    html,
    :host {
      line-height: 1.5;
      -webkit-text-size-adjust: 100%;
      tab-size: 4;
      font-family: var(
        --default-font-family,
        ui-sans-serif,
        system-ui,
        sans-serif,
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji"
      );
      font-feature-settings: var(--default-font-feature-settings, normal);
      font-variation-settings: var(
        --default-font-variation-settings,
        normal
      );
      -webkit-tap-highlight-color: transparent;
    }
    body {
      line-height: inherit;
    }
    hr {
      height: 0;
      color: inherit;
      border-top-width: 1px;
    }
    abbr:where([title]) {
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }
    a {
      color: inherit;
      -webkit-text-decoration: inherit;
      text-decoration: inherit;
    }
    b,
    strong {
      font-weight: bolder;
    }
    code,
    kbd,
    samp,
    pre {
      font-family: var(
        --default-mono-font-family,
        ui-monospace,
        SFMono-Regular,
        Menlo,
        Monaco,
        Consolas,
        "Liberation Mono",
        "Courier New",
        monospace
      );
      font-feature-settings: var(
        --default-mono-font-feature-settings,
        normal
      );
      font-variation-settings: var(
        --default-mono-font-variation-settings,
        normal
      );
      font-size: 1em;
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    table {
      text-indent: 0;
      border-color: inherit;
      border-collapse: collapse;
    }
    :-moz-focusring {
      outline: auto;
    }
    progress {
      vertical-align: baseline;
    }
    summary {
      display: list-item;
    }
    ol,
    ul,
    menu {
      list-style: none;
    }
    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
      display: block;
      vertical-align: middle;
    }
    img,
    video {
      max-width: 100%;
      height: auto;
    }
    button,
    input,
    select,
    optgroup,
    textarea,
    ::file-selector-button {
      font: inherit;
      font-feature-settings: inherit;
      font-variation-settings: inherit;
      letter-spacing: inherit;
      color: inherit;
      border-radius: 0;
      background-color: transparent;
      opacity: 1;
    }
    :where(select:is([multiple], [size])) optgroup {
      font-weight: bolder;
    }
    :where(select:is([multiple], [size])) optgroup option {
      padding-inline-start: 20px;
    }
    ::file-selector-button {
      margin-inline-end: 4px;
    }
    ::placeholder {
      opacity: 1;
      color: color-mix(in oklab, currentColor 50%, transparent);
    }
    textarea {
      resize: vertical;
    }
    ::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    ::-webkit-date-and-time-value {
      min-height: 1lh;
      text-align: inherit;
    }
    ::-webkit-datetime-edit {
      display: inline-flex;
    }
    ::-webkit-datetime-edit-fields-wrapper {
      padding: 0;
    }
    ::-webkit-datetime-edit,
    ::-webkit-datetime-edit-year-field,
    ::-webkit-datetime-edit-month-field,
    ::-webkit-datetime-edit-day-field,
    ::-webkit-datetime-edit-hour-field,
    ::-webkit-datetime-edit-minute-field,
    ::-webkit-datetime-edit-second-field,
    ::-webkit-datetime-edit-millisecond-field,
    ::-webkit-datetime-edit-meridiem-field {
      padding-block: 0;
    }
    :-moz-ui-invalid {
      box-shadow: none;
    }
    button,
    input:where([type="button"], [type="reset"], [type="submit"]),
    ::file-selector-button {
      appearance: button;
    }
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      height: auto;
    }
    [hidden]:where(:not([hidden="until-found"])) {
      display: none !important;
    }
  }
  @layer utilities {
    .max-is-0\\.5 {
      max-inline-size: calc(var(--spacing) * 0.5);
    }
    .max-is-1 {
      max-inline-size: calc(var(--spacing) * 1);
    }
    .max-is-1\\.5 {
      max-inline-size: calc(var(--spacing) * 1.5);
    }
    .max-is-2 {
      max-inline-size: calc(var(--spacing) * 2);
    }
    .max-is-2\\.5 {
      max-inline-size: calc(var(--spacing) * 2.5);
    }
    .max-is-2xl {
      max-inline-size: var(--container-2xl);
    }
    .max-is-3 {
      max-inline-size: calc(var(--spacing) * 3);
    }
    .max-is-3\\.5 {
      max-inline-size: calc(var(--spacing) * 3.5);
    }
    .max-is-3xl {
      max-inline-size: var(--container-3xl);
    }
    .max-is-4 {
      max-inline-size: calc(var(--spacing) * 4);
    }
    .max-is-4xl {
      max-inline-size: var(--container-4xl);
    }
    .max-is-5 {
      max-inline-size: calc(var(--spacing) * 5);
    }
    .max-is-5xl {
      max-inline-size: var(--container-5xl);
    }
    .max-is-6 {
      max-inline-size: calc(var(--spacing) * 6);
    }
    .max-is-6xl {
      max-inline-size: var(--container-6xl);
    }
    .max-is-7 {
      max-inline-size: calc(var(--spacing) * 7);
    }
    .max-is-7xl {
      max-inline-size: var(--container-7xl);
    }
    .max-is-8 {
      max-inline-size: calc(var(--spacing) * 8);
    }
    .max-is-9 {
      max-inline-size: calc(var(--spacing) * 9);
    }
    .max-is-10 {
      max-inline-size: calc(var(--spacing) * 10);
    }
    .max-is-11 {
      max-inline-size: calc(var(--spacing) * 11);
    }
    .max-is-12 {
      max-inline-size: calc(var(--spacing) * 12);
    }
    .max-is-14 {
      max-inline-size: calc(var(--spacing) * 14);
    }
    .max-is-16 {
      max-inline-size: calc(var(--spacing) * 16);
    }
    .max-is-20 {
      max-inline-size: calc(var(--spacing) * 20);
    }
    .max-is-24 {
      max-inline-size: calc(var(--spacing) * 24);
    }
    .max-is-28 {
      max-inline-size: calc(var(--spacing) * 28);
    }
    .max-is-32 {
      max-inline-size: calc(var(--spacing) * 32);
    }
    .max-is-36 {
      max-inline-size: calc(var(--spacing) * 36);
    }
    .max-is-40 {
      max-inline-size: calc(var(--spacing) * 40);
    }
    .max-is-44 {
      max-inline-size: calc(var(--spacing) * 44);
    }
    .max-is-48 {
      max-inline-size: calc(var(--spacing) * 48);
    }
    .max-is-52 {
      max-inline-size: calc(var(--spacing) * 52);
    }
    .max-is-56 {
      max-inline-size: calc(var(--spacing) * 56);
    }
    .max-is-60 {
      max-inline-size: calc(var(--spacing) * 60);
    }
    .max-is-64 {
      max-inline-size: calc(var(--spacing) * 64);
    }
    .max-is-72 {
      max-inline-size: calc(var(--spacing) * 72);
    }
    .max-is-80 {
      max-inline-size: calc(var(--spacing) * 80);
    }
    .max-is-96 {
      max-inline-size: calc(var(--spacing) * 96);
    }
    .max-is-fit {
      max-inline-size: fit-content;
    }
    .max-is-full {
      max-inline-size: 100%;
    }
    .max-is-lg {
      max-inline-size: var(--container-lg);
    }
    .max-is-max {
      max-inline-size: max-content;
    }
    .max-is-md {
      max-inline-size: var(--container-md);
    }
    .max-is-min {
      max-inline-size: min-content;
    }
    .max-is-none {
      max-inline-size: none;
    }
    .max-is-px {
      max-inline-size: 1px;
    }
    .max-is-sm {
      max-inline-size: var(--container-sm);
    }
    .max-is-xl {
      max-inline-size: var(--container-xl);
    }
    .max-is-xs {
      max-inline-size: var(--container-xs);
    }
  }
`;
