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
    .is-0 {
      inline-size: calc(var(--spacing) * 0);
    }
    .is-0\\.5 {
      inline-size: calc(var(--spacing) * 0.5);
    }
    .is-1 {
      inline-size: calc(var(--spacing) * 1);
    }
    .is-1\\.5 {
      inline-size: calc(var(--spacing) * 1.5);
    }
    .is-1\\/2 {
      inline-size: calc(var(--spacing) * 1/2);
    }
    .is-1\\/3 {
      inline-size: calc(var(--spacing) * 1/3);
    }
    .is-1\\/4 {
      inline-size: calc(var(--spacing) * 1/4);
    }
    .is-1\\/5 {
      inline-size: calc(var(--spacing) * 1/5);
    }
    .is-1\\/6 {
      inline-size: calc(var(--spacing) * 1/6);
    }
    .is-1\\/12 {
      inline-size: calc(var(--spacing) * 1/12);
    }
    .is-2 {
      inline-size: calc(var(--spacing) * 2);
    }
    .is-2\\.5 {
      inline-size: calc(var(--spacing) * 2.5);
    }
    .is-2\\/3 {
      inline-size: calc(var(--spacing) * 2/3);
    }
    .is-2\\/4 {
      inline-size: calc(var(--spacing) * 2/4);
    }
    .is-2\\/5 {
      inline-size: calc(var(--spacing) * 2/5);
    }
    .is-2\\/6 {
      inline-size: calc(var(--spacing) * 2/6);
    }
    .is-2\\/12 {
      inline-size: calc(var(--spacing) * 2/12);
    }
    .is-2xl {
      inline-size: var(--container-2xl);
    }
    .is-2xs {
      inline-size: var(--container-2xs);
    }
    .is-3 {
      inline-size: calc(var(--spacing) * 3);
    }
    .is-3\\.5 {
      inline-size: calc(var(--spacing) * 3.5);
    }
    .is-3\\/4 {
      inline-size: calc(var(--spacing) * 3/4);
    }
    .is-3\\/5 {
      inline-size: calc(var(--spacing) * 3/5);
    }
    .is-3\\/6 {
      inline-size: calc(var(--spacing) * 3/6);
    }
    .is-3\\/12 {
      inline-size: calc(var(--spacing) * 3/12);
    }
    .is-3xl {
      inline-size: var(--container-3xl);
    }
    .is-3xs {
      inline-size: var(--container-3xs);
    }
    .is-4 {
      inline-size: calc(var(--spacing) * 4);
    }
    .is-4\\/5 {
      inline-size: calc(var(--spacing) * 4/5);
    }
    .is-4\\/6 {
      inline-size: calc(var(--spacing) * 4/6);
    }
    .is-4\\/12 {
      inline-size: calc(var(--spacing) * 4/12);
    }
    .is-4xl {
      inline-size: var(--container-4xl);
    }
    .is-5 {
      inline-size: calc(var(--spacing) * 5);
    }
    .is-5\\/6 {
      inline-size: calc(var(--spacing) * 5/6);
    }
    .is-5\\/12 {
      inline-size: calc(var(--spacing) * 5/12);
    }
    .is-5xl {
      inline-size: var(--container-5xl);
    }
    .is-6 {
      inline-size: calc(var(--spacing) * 6);
    }
    .is-6\\/12 {
      inline-size: calc(var(--spacing) * 6/12);
    }
    .is-6xl {
      inline-size: var(--container-6xl);
    }
    .is-7 {
      inline-size: calc(var(--spacing) * 7);
    }
    .is-7\\/12 {
      inline-size: calc(var(--spacing) * 7/12);
    }
    .is-7xl {
      inline-size: var(--container-7xl);
    }
    .is-8 {
      inline-size: calc(var(--spacing) * 8);
    }
    .is-8\\/12 {
      inline-size: calc(var(--spacing) * 8/12);
    }
    .is-9 {
      inline-size: calc(var(--spacing) * 9);
    }
    .is-9\\/12 {
      inline-size: calc(var(--spacing) * 9/12);
    }
    .is-10 {
      inline-size: calc(var(--spacing) * 10);
    }
    .is-10\\/12 {
      inline-size: calc(var(--spacing) * 10/12);
    }
    .is-11 {
      inline-size: calc(var(--spacing) * 11);
    }
    .is-11\\/12 {
      inline-size: calc(var(--spacing) * 11/12);
    }
    .is-12 {
      inline-size: calc(var(--spacing) * 12);
    }
    .is-14 {
      inline-size: calc(var(--spacing) * 14);
    }
    .is-16 {
      inline-size: calc(var(--spacing) * 16);
    }
    .is-20 {
      inline-size: calc(var(--spacing) * 20);
    }
    .is-24 {
      inline-size: calc(var(--spacing) * 24);
    }
    .is-28 {
      inline-size: calc(var(--spacing) * 28);
    }
    .is-32 {
      inline-size: calc(var(--spacing) * 32);
    }
    .is-36 {
      inline-size: calc(var(--spacing) * 36);
    }
    .is-40 {
      inline-size: calc(var(--spacing) * 40);
    }
    .is-44 {
      inline-size: calc(var(--spacing) * 44);
    }
    .is-48 {
      inline-size: calc(var(--spacing) * 48);
    }
    .is-52 {
      inline-size: calc(var(--spacing) * 52);
    }
    .is-56 {
      inline-size: calc(var(--spacing) * 56);
    }
    .is-60 {
      inline-size: calc(var(--spacing) * 60);
    }
    .is-64 {
      inline-size: calc(var(--spacing) * 64);
    }
    .is-72 {
      inline-size: calc(var(--spacing) * 72);
    }
    .is-80 {
      inline-size: calc(var(--spacing) * 80);
    }
    .is-96 {
      inline-size: calc(var(--spacing) * 96);
    }
    .is-auto {
      inline-size: auto;
    }
    .is-dvw {
      inline-size: 100dvw;
    }
    .is-fit {
      inline-size: fit-content;
    }
    .is-full {
      inline-size: 100%;
    }
    .is-lg {
      inline-size: var(--container-lg);
    }
    .is-lvw {
      inline-size: 100lvw;
    }
    .is-max {
      inline-size: max-content;
    }
    .is-md {
      inline-size: var(--container-md);
    }
    .is-min {
      inline-size: min-content;
    }
    .is-px {
      inline-size: 1px;
    }
    .is-screen {
      inline-size: 100vw;
    }
    .is-sm {
      inline-size: var(--container-sm);
    }
    .is-svw {
      inline-size: 100svw;
    }
    .is-xl {
      inline-size: var(--container-xl);
    }
    .is-xs {
      inline-size: var(--container-xs);
    }
  }
`;
