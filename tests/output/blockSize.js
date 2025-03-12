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
    .bs-0 {
      block-size: calc(var(--spacing) * 0);
    }
    .bs-0\\.5 {
      block-size: calc(var(--spacing) * 0.5);
    }
    .bs-1 {
      block-size: calc(var(--spacing) * 1);
    }
    .bs-1\\.5 {
      block-size: calc(var(--spacing) * 1.5);
    }
    .bs-1\\/2 {
      block-size: calc(1/2 * 100%);
    }
    .bs-1\\/3 {
      block-size: calc(1/3 * 100%);
    }
    .bs-1\\/4 {
      block-size: calc(1/4 * 100%);
    }
    .bs-1\\/5 {
      block-size: calc(1/5 * 100%);
    }
    .bs-1\\/6 {
      block-size: calc(1/6 * 100%);
    }
    .bs-2 {
      block-size: calc(var(--spacing) * 2);
    }
    .bs-2\\.5 {
      block-size: calc(var(--spacing) * 2.5);
    }
    .bs-2\\/3 {
      block-size: calc(2/3 * 100%);
    }
    .bs-2\\/4 {
      block-size: calc(2/4 * 100%);
    }
    .bs-2\\/5 {
      block-size: calc(2/5 * 100%);
    }
    .bs-2\\/6 {
      block-size: calc(2/6 * 100%);
    }
    .bs-3 {
      block-size: calc(var(--spacing) * 3);
    }
    .bs-3\\.5 {
      block-size: calc(var(--spacing) * 3.5);
    }
    .bs-3\\/4 {
      block-size: calc(3/4 * 100%);
    }
    .bs-3\\/5 {
      block-size: calc(3/5 * 100%);
    }
    .bs-3\\/6 {
      block-size: calc(3/6 * 100%);
    }
    .bs-4 {
      block-size: calc(var(--spacing) * 4);
    }
    .bs-4\\/5 {
      block-size: calc(4/5 * 100%);
    }
    .bs-4\\/6 {
      block-size: calc(4/6 * 100%);
    }
    .bs-5 {
      block-size: calc(var(--spacing) * 5);
    }
    .bs-5\\/6 {
      block-size: calc(5/6 * 100%);
    }
    .bs-6 {
      block-size: calc(var(--spacing) * 6);
    }
    .bs-7 {
      block-size: calc(var(--spacing) * 7);
    }
    .bs-8 {
      block-size: calc(var(--spacing) * 8);
    }
    .bs-9 {
      block-size: calc(var(--spacing) * 9);
    }
    .bs-10 {
      block-size: calc(var(--spacing) * 10);
    }
    .bs-11 {
      block-size: calc(var(--spacing) * 11);
    }
    .bs-12 {
      block-size: calc(var(--spacing) * 12);
    }
    .bs-14 {
      block-size: calc(var(--spacing) * 14);
    }
    .bs-16 {
      block-size: calc(var(--spacing) * 16);
    }
    .bs-20 {
      block-size: calc(var(--spacing) * 20);
    }
    .bs-24 {
      block-size: calc(var(--spacing) * 24);
    }
    .bs-28 {
      block-size: calc(var(--spacing) * 28);
    }
    .bs-32 {
      block-size: calc(var(--spacing) * 32);
    }
    .bs-36 {
      block-size: calc(var(--spacing) * 36);
    }
    .bs-40 {
      block-size: calc(var(--spacing) * 40);
    }
    .bs-44 {
      block-size: calc(var(--spacing) * 44);
    }
    .bs-48 {
      block-size: calc(var(--spacing) * 48);
    }
    .bs-52 {
      block-size: calc(var(--spacing) * 52);
    }
    .bs-56 {
      block-size: calc(var(--spacing) * 56);
    }
    .bs-60 {
      block-size: calc(var(--spacing) * 60);
    }
    .bs-64 {
      block-size: calc(var(--spacing) * 64);
    }
    .bs-72 {
      block-size: calc(var(--spacing) * 72);
    }
    .bs-80 {
      block-size: calc(var(--spacing) * 80);
    }
    .bs-96 {
      block-size: calc(var(--spacing) * 96);
    }
    .bs-auto {
      block-size: auto;
    }
    .bs-dvh {
      block-size: 100dvh;
    }
    .bs-fit {
      block-size: fit-content;
    }
    .bs-full {
      block-size: 100%;
    }
    .bs-lvh {
      block-size: 100lvh;
    }
    .bs-max {
      block-size: max-content;
    }
    .bs-min {
      block-size: min-content;
    }
    .bs-px {
      block-size: 1px;
    }
    .bs-screen {
      block-size: 100vh;
    }
    .bs-svh {
      block-size: 100svh;
    }
  }
`;
