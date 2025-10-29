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
      --container-3xs: 16rem;
      --container-2xs: 18rem;
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
    .min-is-0 {
      min-inline-size: calc(var(--spacing) * 0);
    }
    .min-is-0\\.5 {
      min-inline-size: calc(var(--spacing) * 0.5);
    }
    .min-is-1 {
      min-inline-size: calc(var(--spacing) * 1);
    }
    .min-is-1\\.5 {
      min-inline-size: calc(var(--spacing) * 1.5);
    }
    .min-is-2 {
      min-inline-size: calc(var(--spacing) * 2);
    }
    .min-is-2\\.5 {
      min-inline-size: calc(var(--spacing) * 2.5);
    }
    .min-is-2xl {
      min-inline-size: var(--container-2xl);
    }
    .min-is-2xs {
      min-inline-size: var(--container-2xs);
    }
    .min-is-3 {
      min-inline-size: calc(var(--spacing) * 3);
    }
    .min-is-3\\.5 {
      min-inline-size: calc(var(--spacing) * 3.5);
    }
    .min-is-3xl {
      min-inline-size: var(--container-3xl);
    }
    .min-is-3xs {
      min-inline-size: var(--container-3xs);
    }
    .min-is-4 {
      min-inline-size: calc(var(--spacing) * 4);
    }
    .min-is-4xl {
      min-inline-size: var(--container-4xl);
    }
    .min-is-5 {
      min-inline-size: calc(var(--spacing) * 5);
    }
    .min-is-5xl {
      min-inline-size: var(--container-5xl);
    }
    .min-is-6 {
      min-inline-size: calc(var(--spacing) * 6);
    }
    .min-is-6xl {
      min-inline-size: var(--container-6xl);
    }
    .min-is-7 {
      min-inline-size: calc(var(--spacing) * 7);
    }
    .min-is-7xl {
      min-inline-size: var(--container-7xl);
    }
    .min-is-8 {
      min-inline-size: calc(var(--spacing) * 8);
    }
    .min-is-9 {
      min-inline-size: calc(var(--spacing) * 9);
    }
    .min-is-10 {
      min-inline-size: calc(var(--spacing) * 10);
    }
    .min-is-11 {
      min-inline-size: calc(var(--spacing) * 11);
    }
    .min-is-12 {
      min-inline-size: calc(var(--spacing) * 12);
    }
    .min-is-14 {
      min-inline-size: calc(var(--spacing) * 14);
    }
    .min-is-16 {
      min-inline-size: calc(var(--spacing) * 16);
    }
    .min-is-20 {
      min-inline-size: calc(var(--spacing) * 20);
    }
    .min-is-24 {
      min-inline-size: calc(var(--spacing) * 24);
    }
    .min-is-28 {
      min-inline-size: calc(var(--spacing) * 28);
    }
    .min-is-32 {
      min-inline-size: calc(var(--spacing) * 32);
    }
    .min-is-36 {
      min-inline-size: calc(var(--spacing) * 36);
    }
    .min-is-40 {
      min-inline-size: calc(var(--spacing) * 40);
    }
    .min-is-44 {
      min-inline-size: calc(var(--spacing) * 44);
    }
    .min-is-48 {
      min-inline-size: calc(var(--spacing) * 48);
    }
    .min-is-52 {
      min-inline-size: calc(var(--spacing) * 52);
    }
    .min-is-56 {
      min-inline-size: calc(var(--spacing) * 56);
    }
    .min-is-60 {
      min-inline-size: calc(var(--spacing) * 60);
    }
    .min-is-64 {
      min-inline-size: calc(var(--spacing) * 64);
    }
    .min-is-72 {
      min-inline-size: calc(var(--spacing) * 72);
    }
    .min-is-80 {
      min-inline-size: calc(var(--spacing) * 80);
    }
    .min-is-96 {
      min-inline-size: calc(var(--spacing) * 96);
    }
    .min-is-fit {
      min-inline-size: fit-content;
    }
    .min-is-full {
      min-inline-size: 100%;
    }
    .min-is-lg {
      min-inline-size: var(--container-lg);
    }
    .min-is-max {
      min-inline-size: max-content;
    }
    .min-is-md {
      min-inline-size: var(--container-md);
    }
    .min-is-min {
      min-inline-size: min-content;
    }
    .min-is-px {
      min-inline-size: 1px;
    }
    .min-is-sm {
      min-inline-size: var(--container-sm);
    }
    .min-is-theme-variable {
      min-inline-size: calc(var(--spacing) * 35);
    }
    .min-is-xl {
      min-inline-size: var(--container-xl);
    }
    .min-is-xs {
      min-inline-size: var(--container-xs);
    }
  }
`;
