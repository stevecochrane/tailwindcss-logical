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
    .min-bs-0 {
      min-block-size: calc(var(--spacing) * 0);
    }
    .min-bs-0\\.5 {
      min-block-size: calc(var(--spacing) * 0.5);
    }
    .min-bs-1 {
      min-block-size: calc(var(--spacing) * 1);
    }
    .min-bs-1\\.5 {
      min-block-size: calc(var(--spacing) * 1.5);
    }
    .min-bs-2 {
      min-block-size: calc(var(--spacing) * 2);
    }
    .min-bs-2\\.5 {
      min-block-size: calc(var(--spacing) * 2.5);
    }
    .min-bs-3 {
      min-block-size: calc(var(--spacing) * 3);
    }
    .min-bs-3\\.5 {
      min-block-size: calc(var(--spacing) * 3.5);
    }
    .min-bs-4 {
      min-block-size: calc(var(--spacing) * 4);
    }
    .min-bs-5 {
      min-block-size: calc(var(--spacing) * 5);
    }
    .min-bs-6 {
      min-block-size: calc(var(--spacing) * 6);
    }
    .min-bs-7 {
      min-block-size: calc(var(--spacing) * 7);
    }
    .min-bs-8 {
      min-block-size: calc(var(--spacing) * 8);
    }
    .min-bs-9 {
      min-block-size: calc(var(--spacing) * 9);
    }
    .min-bs-10 {
      min-block-size: calc(var(--spacing) * 10);
    }
    .min-bs-11 {
      min-block-size: calc(var(--spacing) * 11);
    }
    .min-bs-12 {
      min-block-size: calc(var(--spacing) * 12);
    }
    .min-bs-14 {
      min-block-size: calc(var(--spacing) * 14);
    }
    .min-bs-16 {
      min-block-size: calc(var(--spacing) * 16);
    }
    .min-bs-20 {
      min-block-size: calc(var(--spacing) * 20);
    }
    .min-bs-24 {
      min-block-size: calc(var(--spacing) * 24);
    }
    .min-bs-28 {
      min-block-size: calc(var(--spacing) * 28);
    }
    .min-bs-32 {
      min-block-size: calc(var(--spacing) * 32);
    }
    .min-bs-36 {
      min-block-size: calc(var(--spacing) * 36);
    }
    .min-bs-40 {
      min-block-size: calc(var(--spacing) * 40);
    }
    .min-bs-44 {
      min-block-size: calc(var(--spacing) * 44);
    }
    .min-bs-48 {
      min-block-size: calc(var(--spacing) * 48);
    }
    .min-bs-52 {
      min-block-size: calc(var(--spacing) * 52);
    }
    .min-bs-56 {
      min-block-size: calc(var(--spacing) * 56);
    }
    .min-bs-60 {
      min-block-size: calc(var(--spacing) * 60);
    }
    .min-bs-64 {
      min-block-size: calc(var(--spacing) * 64);
    }
    .min-bs-72 {
      min-block-size: calc(var(--spacing) * 72);
    }
    .min-bs-80 {
      min-block-size: calc(var(--spacing) * 80);
    }
    .min-bs-96 {
      min-block-size: calc(var(--spacing) * 96);
    }
    .min-bs-dvh {
      min-block-size: 100dvh;
    }
    .min-bs-fit {
      min-block-size: fit-content;
    }
    .min-bs-full {
      min-block-size: 100%;
    }
    .min-bs-lvh {
      min-block-size: 100lvh;
    }
    .min-bs-max {
      min-block-size: max-content;
    }
    .min-bs-min {
      min-block-size: min-content;
    }
    .min-bs-px {
      min-block-size: 1px;
    }
    .min-bs-screen {
      min-block-size: 100vh;
    }
    .min-bs-svh {
      min-block-size: 100svh;
    }
  }
`;
