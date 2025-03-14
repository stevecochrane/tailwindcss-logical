module.exports = `
  /*! tailwindcss v4.0.9 | MIT License | https://tailwindcss.com */
  @layer theme, base, components, utilities;
  @layer theme {
    :root, :host {
      --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", "Courier New", monospace;
      --radius-sm: 0.25rem;
      --radius-md: 0.375rem;
      --radius-lg: 0.5rem;
      --radius-xl: 0.75rem;
      --radius-2xl: 1rem;
      --radius-3xl: 1.5rem;
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
    .rounded-bs-2xl {
      border-start-start-radius: var(--radius-2xl);
      border-start-end-radius: var(--radius-2xl);
    }
    .rounded-bs-3xl {
      border-start-start-radius: var(--radius-3xl);
      border-start-end-radius: var(--radius-3xl);
    }
    .rounded-bs-full {
      border-start-start-radius: calc(infinity * 1px);
      border-start-end-radius: calc(infinity * 1px);
    }
    .rounded-bs-lg {
      border-start-start-radius: var(--radius-lg);
      border-start-end-radius: var(--radius-lg);
    }
    .rounded-bs-md {
      border-start-start-radius: var(--radius-md);
      border-start-end-radius: var(--radius-md);
    }
    .rounded-bs-none {
      border-start-start-radius: 0px;
      border-start-end-radius: 0px;
    }
    .rounded-bs-sm {
      border-start-start-radius: var(--radius-sm);
      border-start-end-radius: var(--radius-sm);
    }
    .rounded-bs-xl {
      border-start-start-radius: var(--radius-xl);
      border-start-end-radius: var(--radius-xl);
    }
    .rounded-is-2xl {
      border-start-start-radius: var(--radius-2xl);
      border-end-start-radius: var(--radius-2xl);
    }
    .rounded-is-3xl {
      border-start-start-radius: var(--radius-3xl);
      border-end-start-radius: var(--radius-3xl);
    }
    .rounded-is-full {
      border-start-start-radius: calc(infinity * 1px);
      border-end-start-radius: calc(infinity * 1px);
    }
    .rounded-is-lg {
      border-start-start-radius: var(--radius-lg);
      border-end-start-radius: var(--radius-lg);
    }
    .rounded-is-md {
      border-start-start-radius: var(--radius-md);
      border-end-start-radius: var(--radius-md);
    }
    .rounded-is-none {
      border-start-start-radius: 0px;
      border-end-start-radius: 0px;
    }
    .rounded-is-sm {
      border-start-start-radius: var(--radius-sm);
      border-end-start-radius: var(--radius-sm);
    }
    .rounded-is-xl {
      border-start-start-radius: var(--radius-xl);
      border-end-start-radius: var(--radius-xl);
    }
    .rounded-ie-2xl {
      border-start-end-radius: var(--radius-2xl);
      border-end-end-radius: var(--radius-2xl);
    }
    .rounded-ie-3xl {
      border-start-end-radius: var(--radius-3xl);
      border-end-end-radius: var(--radius-3xl);
    }
    .rounded-ie-full {
      border-start-end-radius: calc(infinity * 1px);
      border-end-end-radius: calc(infinity * 1px);
    }
    .rounded-ie-lg {
      border-start-end-radius: var(--radius-lg);
      border-end-end-radius: var(--radius-lg);
    }
    .rounded-ie-md {
      border-start-end-radius: var(--radius-md);
      border-end-end-radius: var(--radius-md);
    }
    .rounded-ie-none {
      border-start-end-radius: 0px;
      border-end-end-radius: 0px;
    }
    .rounded-ie-sm {
      border-start-end-radius: var(--radius-sm);
      border-end-end-radius: var(--radius-sm);
    }
    .rounded-ie-xl {
      border-start-end-radius: var(--radius-xl);
      border-end-end-radius: var(--radius-xl);
    }
    .rounded-be-2xl {
      border-end-start-radius: var(--radius-2xl);
      border-end-end-radius: var(--radius-2xl);
    }
    .rounded-be-3xl {
      border-end-start-radius: var(--radius-3xl);
      border-end-end-radius: var(--radius-3xl);
    }
    .rounded-be-full {
      border-end-start-radius: calc(infinity * 1px);
      border-end-end-radius: calc(infinity * 1px);
    }
    .rounded-be-lg {
      border-end-start-radius: var(--radius-lg);
      border-end-end-radius: var(--radius-lg);
    }
    .rounded-be-md {
      border-end-start-radius: var(--radius-md);
      border-end-end-radius: var(--radius-md);
    }
    .rounded-be-none {
      border-end-start-radius: 0px;
      border-end-end-radius: 0px;
    }
    .rounded-be-sm {
      border-end-start-radius: var(--radius-sm);
      border-end-end-radius: var(--radius-sm);
    }
    .rounded-be-xl {
      border-end-start-radius: var(--radius-xl);
      border-end-end-radius: var(--radius-xl);
    }
  }
`;
