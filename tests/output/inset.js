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
    .-inset-inline-0 {
      inset-inline: calc(calc(var(--spacing) * 0) * -1);
    }
    .-inset-inline-0\\.5 {
      inset-inline: calc(calc(var(--spacing) * 0.5) * -1);
    }
    .-inset-inline-1 {
      inset-inline: calc(calc(var(--spacing) * 1) * -1);
    }
    .-inset-inline-1\\.5 {
      inset-inline: calc(calc(var(--spacing) * 1.5) * -1);
    }
    .-inset-inline-1\\/2 {
      inset-inline: calc(calc(1/2 * 100%) * -1);
    }
    .-inset-inline-1\\/3 {
      inset-inline: calc(calc(1/3 * 100%) * -1);
    }
    .-inset-inline-1\\/4 {
      inset-inline: calc(calc(1/4 * 100%) * -1);
    }
    .-inset-inline-2 {
      inset-inline: calc(calc(var(--spacing) * 2) * -1);
    }
    .-inset-inline-2\\.5 {
      inset-inline: calc(calc(var(--spacing) * 2.5) * -1);
    }
    .-inset-inline-2\\/3 {
      inset-inline: calc(calc(2/3 * 100%) * -1);
    }
    .-inset-inline-2\\/4 {
      inset-inline: calc(calc(2/4 * 100%) * -1);
    }
    .-inset-inline-3 {
      inset-inline: calc(calc(var(--spacing) * 3) * -1);
    }
    .-inset-inline-3\\.5 {
      inset-inline: calc(calc(var(--spacing) * 3.5) * -1);
    }
    .-inset-inline-3\\/4 {
      inset-inline: calc(calc(3/4 * 100%) * -1);
    }
    .-inset-inline-4 {
      inset-inline: calc(calc(var(--spacing) * 4) * -1);
    }
    .-inset-inline-5 {
      inset-inline: calc(calc(var(--spacing) * 5) * -1);
    }
    .-inset-inline-6 {
      inset-inline: calc(calc(var(--spacing) * 6) * -1);
    }
    .-inset-inline-7 {
      inset-inline: calc(calc(var(--spacing) * 7) * -1);
    }
    .-inset-inline-8 {
      inset-inline: calc(calc(var(--spacing) * 8) * -1);
    }
    .-inset-inline-9 {
      inset-inline: calc(calc(var(--spacing) * 9) * -1);
    }
    .-inset-inline-10 {
      inset-inline: calc(calc(var(--spacing) * 10) * -1);
    }
    .-inset-inline-11 {
      inset-inline: calc(calc(var(--spacing) * 11) * -1);
    }
    .-inset-inline-12 {
      inset-inline: calc(calc(var(--spacing) * 12) * -1);
    }
    .-inset-inline-14 {
      inset-inline: calc(calc(var(--spacing) * 14) * -1);
    }
    .-inset-inline-16 {
      inset-inline: calc(calc(var(--spacing) * 16) * -1);
    }
    .-inset-inline-20 {
      inset-inline: calc(calc(var(--spacing) * 20) * -1);
    }
    .-inset-inline-24 {
      inset-inline: calc(calc(var(--spacing) * 24) * -1);
    }
    .-inset-inline-28 {
      inset-inline: calc(calc(var(--spacing) * 28) * -1);
    }
    .-inset-inline-32 {
      inset-inline: calc(calc(var(--spacing) * 32) * -1);
    }
    .-inset-inline-36 {
      inset-inline: calc(calc(var(--spacing) * 36) * -1);
    }
    .-inset-inline-40 {
      inset-inline: calc(calc(var(--spacing) * 40) * -1);
    }
    .-inset-inline-44 {
      inset-inline: calc(calc(var(--spacing) * 44) * -1);
    }
    .-inset-inline-48 {
      inset-inline: calc(calc(var(--spacing) * 48) * -1);
    }
    .-inset-inline-52 {
      inset-inline: calc(calc(var(--spacing) * 52) * -1);
    }
    .-inset-inline-56 {
      inset-inline: calc(calc(var(--spacing) * 56) * -1);
    }
    .-inset-inline-60 {
      inset-inline: calc(calc(var(--spacing) * 60) * -1);
    }
    .-inset-inline-64 {
      inset-inline: calc(calc(var(--spacing) * 64) * -1);
    }
    .-inset-inline-72 {
      inset-inline: calc(calc(var(--spacing) * 72) * -1);
    }
    .-inset-inline-80 {
      inset-inline: calc(calc(var(--spacing) * 80) * -1);
    }
    .-inset-inline-96 {
      inset-inline: calc(calc(var(--spacing) * 96) * -1);
    }
    .-inset-inline-full {
      inset-inline: calc(100% * -1);
    }
    .-inset-inline-px {
      inset-inline: calc(1px * -1);
    }
    .inset-inline-0 {
      inset-inline: calc(var(--spacing) * 0);
    }
    .inset-inline-0\\.5 {
      inset-inline: calc(var(--spacing) * 0.5);
    }
    .inset-inline-1 {
      inset-inline: calc(var(--spacing) * 1);
    }
    .inset-inline-1\\.5 {
      inset-inline: calc(var(--spacing) * 1.5);
    }
    .inset-inline-1\\/2 {
      inset-inline: calc(1/2 * 100%);
    }
    .inset-inline-1\\/3 {
      inset-inline: calc(1/3 * 100%);
    }
    .inset-inline-1\\/4 {
      inset-inline: calc(1/4 * 100%);
    }
    .inset-inline-2 {
      inset-inline: calc(var(--spacing) * 2);
    }
    .inset-inline-2\\.5 {
      inset-inline: calc(var(--spacing) * 2.5);
    }
    .inset-inline-2\\/3 {
      inset-inline: calc(2/3 * 100%);
    }
    .inset-inline-2\\/4 {
      inset-inline: calc(2/4 * 100%);
    }
    .inset-inline-3 {
      inset-inline: calc(var(--spacing) * 3);
    }
    .inset-inline-3\\.5 {
      inset-inline: calc(var(--spacing) * 3.5);
    }
    .inset-inline-3\\/4 {
      inset-inline: calc(3/4 * 100%);
    }
    .inset-inline-4 {
      inset-inline: calc(var(--spacing) * 4);
    }
    .inset-inline-5 {
      inset-inline: calc(var(--spacing) * 5);
    }
    .inset-inline-6 {
      inset-inline: calc(var(--spacing) * 6);
    }
    .inset-inline-7 {
      inset-inline: calc(var(--spacing) * 7);
    }
    .inset-inline-8 {
      inset-inline: calc(var(--spacing) * 8);
    }
    .inset-inline-9 {
      inset-inline: calc(var(--spacing) * 9);
    }
    .inset-inline-10 {
      inset-inline: calc(var(--spacing) * 10);
    }
    .inset-inline-11 {
      inset-inline: calc(var(--spacing) * 11);
    }
    .inset-inline-12 {
      inset-inline: calc(var(--spacing) * 12);
    }
    .inset-inline-14 {
      inset-inline: calc(var(--spacing) * 14);
    }
    .inset-inline-16 {
      inset-inline: calc(var(--spacing) * 16);
    }
    .inset-inline-20 {
      inset-inline: calc(var(--spacing) * 20);
    }
    .inset-inline-24 {
      inset-inline: calc(var(--spacing) * 24);
    }
    .inset-inline-28 {
      inset-inline: calc(var(--spacing) * 28);
    }
    .inset-inline-32 {
      inset-inline: calc(var(--spacing) * 32);
    }
    .inset-inline-36 {
      inset-inline: calc(var(--spacing) * 36);
    }
    .inset-inline-40 {
      inset-inline: calc(var(--spacing) * 40);
    }
    .inset-inline-44 {
      inset-inline: calc(var(--spacing) * 44);
    }
    .inset-inline-48 {
      inset-inline: calc(var(--spacing) * 48);
    }
    .inset-inline-52 {
      inset-inline: calc(var(--spacing) * 52);
    }
    .inset-inline-56 {
      inset-inline: calc(var(--spacing) * 56);
    }
    .inset-inline-60 {
      inset-inline: calc(var(--spacing) * 60);
    }
    .inset-inline-64 {
      inset-inline: calc(var(--spacing) * 64);
    }
    .inset-inline-72 {
      inset-inline: calc(var(--spacing) * 72);
    }
    .inset-inline-80 {
      inset-inline: calc(var(--spacing) * 80);
    }
    .inset-inline-96 {
      inset-inline: calc(var(--spacing) * 96);
    }
    .inset-inline-auto {
      inset-inline: auto;
    }
    .inset-inline-full {
      inset-inline: 100%;
    }
    .inset-inline-px {
      inset-inline: 1px;
    }
    .-inset-block-0 {
      inset-block: calc(calc(var(--spacing) * 0) * -1);
    }
    .-inset-block-0\\.5 {
      inset-block: calc(calc(var(--spacing) * 0.5) * -1);
    }
    .-inset-block-1 {
      inset-block: calc(calc(var(--spacing) * 1) * -1);
    }
    .-inset-block-1\\.5 {
      inset-block: calc(calc(var(--spacing) * 1.5) * -1);
    }
    .-inset-block-1\\/2 {
      inset-block: calc(calc(1/2 * 100%) * -1);
    }
    .-inset-block-1\\/3 {
      inset-block: calc(calc(1/3 * 100%) * -1);
    }
    .-inset-block-1\\/4 {
      inset-block: calc(calc(1/4 * 100%) * -1);
    }
    .-inset-block-2 {
      inset-block: calc(calc(var(--spacing) * 2) * -1);
    }
    .-inset-block-2\\.5 {
      inset-block: calc(calc(var(--spacing) * 2.5) * -1);
    }
    .-inset-block-2\\/3 {
      inset-block: calc(calc(2/3 * 100%) * -1);
    }
    .-inset-block-2\\/4 {
      inset-block: calc(calc(2/4 * 100%) * -1);
    }
    .-inset-block-3 {
      inset-block: calc(calc(var(--spacing) * 3) * -1);
    }
    .-inset-block-3\\.5 {
      inset-block: calc(calc(var(--spacing) * 3.5) * -1);
    }
    .-inset-block-3\\/4 {
      inset-block: calc(calc(3/4 * 100%) * -1);
    }
    .-inset-block-4 {
      inset-block: calc(calc(var(--spacing) * 4) * -1);
    }
    .-inset-block-5 {
      inset-block: calc(calc(var(--spacing) * 5) * -1);
    }
    .-inset-block-6 {
      inset-block: calc(calc(var(--spacing) * 6) * -1);
    }
    .-inset-block-7 {
      inset-block: calc(calc(var(--spacing) * 7) * -1);
    }
    .-inset-block-8 {
      inset-block: calc(calc(var(--spacing) * 8) * -1);
    }
    .-inset-block-9 {
      inset-block: calc(calc(var(--spacing) * 9) * -1);
    }
    .-inset-block-10 {
      inset-block: calc(calc(var(--spacing) * 10) * -1);
    }
    .-inset-block-11 {
      inset-block: calc(calc(var(--spacing) * 11) * -1);
    }
    .-inset-block-12 {
      inset-block: calc(calc(var(--spacing) * 12) * -1);
    }
    .-inset-block-14 {
      inset-block: calc(calc(var(--spacing) * 14) * -1);
    }
    .-inset-block-16 {
      inset-block: calc(calc(var(--spacing) * 16) * -1);
    }
    .-inset-block-20 {
      inset-block: calc(calc(var(--spacing) * 20) * -1);
    }
    .-inset-block-24 {
      inset-block: calc(calc(var(--spacing) * 24) * -1);
    }
    .-inset-block-28 {
      inset-block: calc(calc(var(--spacing) * 28) * -1);
    }
    .-inset-block-32 {
      inset-block: calc(calc(var(--spacing) * 32) * -1);
    }
    .-inset-block-36 {
      inset-block: calc(calc(var(--spacing) * 36) * -1);
    }
    .-inset-block-40 {
      inset-block: calc(calc(var(--spacing) * 40) * -1);
    }
    .-inset-block-44 {
      inset-block: calc(calc(var(--spacing) * 44) * -1);
    }
    .-inset-block-48 {
      inset-block: calc(calc(var(--spacing) * 48) * -1);
    }
    .-inset-block-52 {
      inset-block: calc(calc(var(--spacing) * 52) * -1);
    }
    .-inset-block-56 {
      inset-block: calc(calc(var(--spacing) * 56) * -1);
    }
    .-inset-block-60 {
      inset-block: calc(calc(var(--spacing) * 60) * -1);
    }
    .-inset-block-64 {
      inset-block: calc(calc(var(--spacing) * 64) * -1);
    }
    .-inset-block-72 {
      inset-block: calc(calc(var(--spacing) * 72) * -1);
    }
    .-inset-block-80 {
      inset-block: calc(calc(var(--spacing) * 80) * -1);
    }
    .-inset-block-96 {
      inset-block: calc(calc(var(--spacing) * 96) * -1);
    }
    .-inset-block-full {
      inset-block: calc(100% * -1);
    }
    .-inset-block-px {
      inset-block: calc(1px * -1);
    }
    .inset-block-0 {
      inset-block: calc(var(--spacing) * 0);
    }
    .inset-block-0\\.5 {
      inset-block: calc(var(--spacing) * 0.5);
    }
    .inset-block-1 {
      inset-block: calc(var(--spacing) * 1);
    }
    .inset-block-1\\.5 {
      inset-block: calc(var(--spacing) * 1.5);
    }
    .inset-block-1\\/2 {
      inset-block: calc(1/2 * 100%);
    }
    .inset-block-1\\/3 {
      inset-block: calc(1/3 * 100%);
    }
    .inset-block-1\\/4 {
      inset-block: calc(1/4 * 100%);
    }
    .inset-block-2 {
      inset-block: calc(var(--spacing) * 2);
    }
    .inset-block-2\\.5 {
      inset-block: calc(var(--spacing) * 2.5);
    }
    .inset-block-2\\/3 {
      inset-block: calc(2/3 * 100%);
    }
    .inset-block-2\\/4 {
      inset-block: calc(2/4 * 100%);
    }
    .inset-block-3 {
      inset-block: calc(var(--spacing) * 3);
    }
    .inset-block-3\\.5 {
      inset-block: calc(var(--spacing) * 3.5);
    }
    .inset-block-3\\/4 {
      inset-block: calc(3/4 * 100%);
    }
    .inset-block-4 {
      inset-block: calc(var(--spacing) * 4);
    }
    .inset-block-5 {
      inset-block: calc(var(--spacing) * 5);
    }
    .inset-block-6 {
      inset-block: calc(var(--spacing) * 6);
    }
    .inset-block-7 {
      inset-block: calc(var(--spacing) * 7);
    }
    .inset-block-8 {
      inset-block: calc(var(--spacing) * 8);
    }
    .inset-block-9 {
      inset-block: calc(var(--spacing) * 9);
    }
    .inset-block-10 {
      inset-block: calc(var(--spacing) * 10);
    }
    .inset-block-11 {
      inset-block: calc(var(--spacing) * 11);
    }
    .inset-block-12 {
      inset-block: calc(var(--spacing) * 12);
    }
    .inset-block-14 {
      inset-block: calc(var(--spacing) * 14);
    }
    .inset-block-16 {
      inset-block: calc(var(--spacing) * 16);
    }
    .inset-block-20 {
      inset-block: calc(var(--spacing) * 20);
    }
    .inset-block-24 {
      inset-block: calc(var(--spacing) * 24);
    }
    .inset-block-28 {
      inset-block: calc(var(--spacing) * 28);
    }
    .inset-block-32 {
      inset-block: calc(var(--spacing) * 32);
    }
    .inset-block-36 {
      inset-block: calc(var(--spacing) * 36);
    }
    .inset-block-40 {
      inset-block: calc(var(--spacing) * 40);
    }
    .inset-block-44 {
      inset-block: calc(var(--spacing) * 44);
    }
    .inset-block-48 {
      inset-block: calc(var(--spacing) * 48);
    }
    .inset-block-52 {
      inset-block: calc(var(--spacing) * 52);
    }
    .inset-block-56 {
      inset-block: calc(var(--spacing) * 56);
    }
    .inset-block-60 {
      inset-block: calc(var(--spacing) * 60);
    }
    .inset-block-64 {
      inset-block: calc(var(--spacing) * 64);
    }
    .inset-block-72 {
      inset-block: calc(var(--spacing) * 72);
    }
    .inset-block-80 {
      inset-block: calc(var(--spacing) * 80);
    }
    .inset-block-96 {
      inset-block: calc(var(--spacing) * 96);
    }
    .inset-block-auto {
      inset-block: auto;
    }
    .inset-block-full {
      inset-block: 100%;
    }
    .inset-block-px {
      inset-block: 1px;
    }
    .-inline-start-0 {
      inset-inline-start: calc(calc(var(--spacing) * 0) * -1);
    }
    .-inline-start-0\\.5 {
      inset-inline-start: calc(calc(var(--spacing) * 0.5) * -1);
    }
    .-inline-start-1 {
      inset-inline-start: calc(calc(var(--spacing) * 1) * -1);
    }
    .-inline-start-1\\.5 {
      inset-inline-start: calc(calc(var(--spacing) * 1.5) * -1);
    }
    .-inline-start-1\\/2 {
      inset-inline-start: calc(calc(1/2 * 100%) * -1);
    }
    .-inline-start-1\\/3 {
      inset-inline-start: calc(calc(1/3 * 100%) * -1);
    }
    .-inline-start-1\\/4 {
      inset-inline-start: calc(calc(1/4 * 100%) * -1);
    }
    .-inline-start-2 {
      inset-inline-start: calc(calc(var(--spacing) * 2) * -1);
    }
    .-inline-start-2\\.5 {
      inset-inline-start: calc(calc(var(--spacing) * 2.5) * -1);
    }
    .-inline-start-2\\/3 {
      inset-inline-start: calc(calc(2/3 * 100%) * -1);
    }
    .-inline-start-2\\/4 {
      inset-inline-start: calc(calc(2/4 * 100%) * -1);
    }
    .-inline-start-3 {
      inset-inline-start: calc(calc(var(--spacing) * 3) * -1);
    }
    .-inline-start-3\\.5 {
      inset-inline-start: calc(calc(var(--spacing) * 3.5) * -1);
    }
    .-inline-start-3\\/4 {
      inset-inline-start: calc(calc(3/4 * 100%) * -1);
    }
    .-inline-start-4 {
      inset-inline-start: calc(calc(var(--spacing) * 4) * -1);
    }
    .-inline-start-5 {
      inset-inline-start: calc(calc(var(--spacing) * 5) * -1);
    }
    .-inline-start-6 {
      inset-inline-start: calc(calc(var(--spacing) * 6) * -1);
    }
    .-inline-start-7 {
      inset-inline-start: calc(calc(var(--spacing) * 7) * -1);
    }
    .-inline-start-8 {
      inset-inline-start: calc(calc(var(--spacing) * 8) * -1);
    }
    .-inline-start-9 {
      inset-inline-start: calc(calc(var(--spacing) * 9) * -1);
    }
    .-inline-start-10 {
      inset-inline-start: calc(calc(var(--spacing) * 10) * -1);
    }
    .-inline-start-11 {
      inset-inline-start: calc(calc(var(--spacing) * 11) * -1);
    }
    .-inline-start-12 {
      inset-inline-start: calc(calc(var(--spacing) * 12) * -1);
    }
    .-inline-start-14 {
      inset-inline-start: calc(calc(var(--spacing) * 14) * -1);
    }
    .-inline-start-16 {
      inset-inline-start: calc(calc(var(--spacing) * 16) * -1);
    }
    .-inline-start-20 {
      inset-inline-start: calc(calc(var(--spacing) * 20) * -1);
    }
    .-inline-start-24 {
      inset-inline-start: calc(calc(var(--spacing) * 24) * -1);
    }
    .-inline-start-28 {
      inset-inline-start: calc(calc(var(--spacing) * 28) * -1);
    }
    .-inline-start-32 {
      inset-inline-start: calc(calc(var(--spacing) * 32) * -1);
    }
    .-inline-start-36 {
      inset-inline-start: calc(calc(var(--spacing) * 36) * -1);
    }
    .-inline-start-40 {
      inset-inline-start: calc(calc(var(--spacing) * 40) * -1);
    }
    .-inline-start-44 {
      inset-inline-start: calc(calc(var(--spacing) * 44) * -1);
    }
    .-inline-start-48 {
      inset-inline-start: calc(calc(var(--spacing) * 48) * -1);
    }
    .-inline-start-52 {
      inset-inline-start: calc(calc(var(--spacing) * 52) * -1);
    }
    .-inline-start-56 {
      inset-inline-start: calc(calc(var(--spacing) * 56) * -1);
    }
    .-inline-start-60 {
      inset-inline-start: calc(calc(var(--spacing) * 60) * -1);
    }
    .-inline-start-64 {
      inset-inline-start: calc(calc(var(--spacing) * 64) * -1);
    }
    .-inline-start-72 {
      inset-inline-start: calc(calc(var(--spacing) * 72) * -1);
    }
    .-inline-start-80 {
      inset-inline-start: calc(calc(var(--spacing) * 80) * -1);
    }
    .-inline-start-96 {
      inset-inline-start: calc(calc(var(--spacing) * 96) * -1);
    }
    .-inline-start-full {
      inset-inline-start: calc(100% * -1);
    }
    .-inline-start-px {
      inset-inline-start: calc(1px * -1);
    }
    .inline-start-0 {
      inset-inline-start: calc(var(--spacing) * 0);
    }
    .inline-start-0\\.5 {
      inset-inline-start: calc(var(--spacing) * 0.5);
    }
    .inline-start-1 {
      inset-inline-start: calc(var(--spacing) * 1);
    }
    .inline-start-1\\.5 {
      inset-inline-start: calc(var(--spacing) * 1.5);
    }
    .inline-start-1\\/2 {
      inset-inline-start: calc(1/2 * 100%);
    }
    .inline-start-1\\/3 {
      inset-inline-start: calc(1/3 * 100%);
    }
    .inline-start-1\\/4 {
      inset-inline-start: calc(1/4 * 100%);
    }
    .inline-start-2 {
      inset-inline-start: calc(var(--spacing) * 2);
    }
    .inline-start-2\\.5 {
      inset-inline-start: calc(var(--spacing) * 2.5);
    }
    .inline-start-2\\/3 {
      inset-inline-start: calc(2/3 * 100%);
    }
    .inline-start-2\\/4 {
      inset-inline-start: calc(2/4 * 100%);
    }
    .inline-start-3 {
      inset-inline-start: calc(var(--spacing) * 3);
    }
    .inline-start-3\\.5 {
      inset-inline-start: calc(var(--spacing) * 3.5);
    }
    .inline-start-3\\/4 {
      inset-inline-start: calc(3/4 * 100%);
    }
    .inline-start-4 {
      inset-inline-start: calc(var(--spacing) * 4);
    }
    .inline-start-5 {
      inset-inline-start: calc(var(--spacing) * 5);
    }
    .inline-start-6 {
      inset-inline-start: calc(var(--spacing) * 6);
    }
    .inline-start-7 {
      inset-inline-start: calc(var(--spacing) * 7);
    }
    .inline-start-8 {
      inset-inline-start: calc(var(--spacing) * 8);
    }
    .inline-start-9 {
      inset-inline-start: calc(var(--spacing) * 9);
    }
    .inline-start-10 {
      inset-inline-start: calc(var(--spacing) * 10);
    }
    .inline-start-11 {
      inset-inline-start: calc(var(--spacing) * 11);
    }
    .inline-start-12 {
      inset-inline-start: calc(var(--spacing) * 12);
    }
    .inline-start-14 {
      inset-inline-start: calc(var(--spacing) * 14);
    }
    .inline-start-16 {
      inset-inline-start: calc(var(--spacing) * 16);
    }
    .inline-start-20 {
      inset-inline-start: calc(var(--spacing) * 20);
    }
    .inline-start-24 {
      inset-inline-start: calc(var(--spacing) * 24);
    }
    .inline-start-28 {
      inset-inline-start: calc(var(--spacing) * 28);
    }
    .inline-start-32 {
      inset-inline-start: calc(var(--spacing) * 32);
    }
    .inline-start-36 {
      inset-inline-start: calc(var(--spacing) * 36);
    }
    .inline-start-40 {
      inset-inline-start: calc(var(--spacing) * 40);
    }
    .inline-start-44 {
      inset-inline-start: calc(var(--spacing) * 44);
    }
    .inline-start-48 {
      inset-inline-start: calc(var(--spacing) * 48);
    }
    .inline-start-52 {
      inset-inline-start: calc(var(--spacing) * 52);
    }
    .inline-start-56 {
      inset-inline-start: calc(var(--spacing) * 56);
    }
    .inline-start-60 {
      inset-inline-start: calc(var(--spacing) * 60);
    }
    .inline-start-64 {
      inset-inline-start: calc(var(--spacing) * 64);
    }
    .inline-start-72 {
      inset-inline-start: calc(var(--spacing) * 72);
    }
    .inline-start-80 {
      inset-inline-start: calc(var(--spacing) * 80);
    }
    .inline-start-96 {
      inset-inline-start: calc(var(--spacing) * 96);
    }
    .inline-start-auto {
      inset-inline-start: auto;
    }
    .inline-start-full {
      inset-inline-start: 100%;
    }
    .inline-start-px {
      inset-inline-start: 1px;
    }
    .-inline-end-0 {
      inset-inline-end: calc(calc(var(--spacing) * 0) * -1);
    }
    .-inline-end-0\\.5 {
      inset-inline-end: calc(calc(var(--spacing) * 0.5) * -1);
    }
    .-inline-end-1 {
      inset-inline-end: calc(calc(var(--spacing) * 1) * -1);
    }
    .-inline-end-1\\.5 {
      inset-inline-end: calc(calc(var(--spacing) * 1.5) * -1);
    }
    .-inline-end-1\\/2 {
      inset-inline-end: calc(calc(1/2 * 100%) * -1);
    }
    .-inline-end-1\\/3 {
      inset-inline-end: calc(calc(1/3 * 100%) * -1);
    }
    .-inline-end-1\\/4 {
      inset-inline-end: calc(calc(1/4 * 100%) * -1);
    }
    .-inline-end-2 {
      inset-inline-end: calc(calc(var(--spacing) * 2) * -1);
    }
    .-inline-end-2\\.5 {
      inset-inline-end: calc(calc(var(--spacing) * 2.5) * -1);
    }
    .-inline-end-2\\/3 {
      inset-inline-end: calc(calc(2/3 * 100%) * -1);
    }
    .-inline-end-2\\/4 {
      inset-inline-end: calc(calc(2/4 * 100%) * -1);
    }
    .-inline-end-3 {
      inset-inline-end: calc(calc(var(--spacing) * 3) * -1);
    }
    .-inline-end-3\\.5 {
      inset-inline-end: calc(calc(var(--spacing) * 3.5) * -1);
    }
    .-inline-end-3\\/4 {
      inset-inline-end: calc(calc(3/4 * 100%) * -1);
    }
    .-inline-end-4 {
      inset-inline-end: calc(calc(var(--spacing) * 4) * -1);
    }
    .-inline-end-5 {
      inset-inline-end: calc(calc(var(--spacing) * 5) * -1);
    }
    .-inline-end-6 {
      inset-inline-end: calc(calc(var(--spacing) * 6) * -1);
    }
    .-inline-end-7 {
      inset-inline-end: calc(calc(var(--spacing) * 7) * -1);
    }
    .-inline-end-8 {
      inset-inline-end: calc(calc(var(--spacing) * 8) * -1);
    }
    .-inline-end-9 {
      inset-inline-end: calc(calc(var(--spacing) * 9) * -1);
    }
    .-inline-end-10 {
      inset-inline-end: calc(calc(var(--spacing) * 10) * -1);
    }
    .-inline-end-11 {
      inset-inline-end: calc(calc(var(--spacing) * 11) * -1);
    }
    .-inline-end-12 {
      inset-inline-end: calc(calc(var(--spacing) * 12) * -1);
    }
    .-inline-end-14 {
      inset-inline-end: calc(calc(var(--spacing) * 14) * -1);
    }
    .-inline-end-16 {
      inset-inline-end: calc(calc(var(--spacing) * 16) * -1);
    }
    .-inline-end-20 {
      inset-inline-end: calc(calc(var(--spacing) * 20) * -1);
    }
    .-inline-end-24 {
      inset-inline-end: calc(calc(var(--spacing) * 24) * -1);
    }
    .-inline-end-28 {
      inset-inline-end: calc(calc(var(--spacing) * 28) * -1);
    }
    .-inline-end-32 {
      inset-inline-end: calc(calc(var(--spacing) * 32) * -1);
    }
    .-inline-end-36 {
      inset-inline-end: calc(calc(var(--spacing) * 36) * -1);
    }
    .-inline-end-40 {
      inset-inline-end: calc(calc(var(--spacing) * 40) * -1);
    }
    .-inline-end-44 {
      inset-inline-end: calc(calc(var(--spacing) * 44) * -1);
    }
    .-inline-end-48 {
      inset-inline-end: calc(calc(var(--spacing) * 48) * -1);
    }
    .-inline-end-52 {
      inset-inline-end: calc(calc(var(--spacing) * 52) * -1);
    }
    .-inline-end-56 {
      inset-inline-end: calc(calc(var(--spacing) * 56) * -1);
    }
    .-inline-end-60 {
      inset-inline-end: calc(calc(var(--spacing) * 60) * -1);
    }
    .-inline-end-64 {
      inset-inline-end: calc(calc(var(--spacing) * 64) * -1);
    }
    .-inline-end-72 {
      inset-inline-end: calc(calc(var(--spacing) * 72) * -1);
    }
    .-inline-end-80 {
      inset-inline-end: calc(calc(var(--spacing) * 80) * -1);
    }
    .-inline-end-96 {
      inset-inline-end: calc(calc(var(--spacing) * 96) * -1);
    }
    .-inline-end-full {
      inset-inline-end: calc(100% * -1);
    }
    .-inline-end-px {
      inset-inline-end: calc(1px * -1);
    }
    .inline-end-0 {
      inset-inline-end: calc(var(--spacing) * 0);
    }
    .inline-end-0\\.5 {
      inset-inline-end: calc(var(--spacing) * 0.5);
    }
    .inline-end-1 {
      inset-inline-end: calc(var(--spacing) * 1);
    }
    .inline-end-1\\.5 {
      inset-inline-end: calc(var(--spacing) * 1.5);
    }
    .inline-end-1\\/2 {
      inset-inline-end: calc(1/2 * 100%);
    }
    .inline-end-1\\/3 {
      inset-inline-end: calc(1/3 * 100%);
    }
    .inline-end-1\\/4 {
      inset-inline-end: calc(1/4 * 100%);
    }
    .inline-end-2 {
      inset-inline-end: calc(var(--spacing) * 2);
    }
    .inline-end-2\\.5 {
      inset-inline-end: calc(var(--spacing) * 2.5);
    }
    .inline-end-2\\/3 {
      inset-inline-end: calc(2/3 * 100%);
    }
    .inline-end-2\\/4 {
      inset-inline-end: calc(2/4 * 100%);
    }
    .inline-end-3 {
      inset-inline-end: calc(var(--spacing) * 3);
    }
    .inline-end-3\\.5 {
      inset-inline-end: calc(var(--spacing) * 3.5);
    }
    .inline-end-3\\/4 {
      inset-inline-end: calc(3/4 * 100%);
    }
    .inline-end-4 {
      inset-inline-end: calc(var(--spacing) * 4);
    }
    .inline-end-5 {
      inset-inline-end: calc(var(--spacing) * 5);
    }
    .inline-end-6 {
      inset-inline-end: calc(var(--spacing) * 6);
    }
    .inline-end-7 {
      inset-inline-end: calc(var(--spacing) * 7);
    }
    .inline-end-8 {
      inset-inline-end: calc(var(--spacing) * 8);
    }
    .inline-end-9 {
      inset-inline-end: calc(var(--spacing) * 9);
    }
    .inline-end-10 {
      inset-inline-end: calc(var(--spacing) * 10);
    }
    .inline-end-11 {
      inset-inline-end: calc(var(--spacing) * 11);
    }
    .inline-end-12 {
      inset-inline-end: calc(var(--spacing) * 12);
    }
    .inline-end-14 {
      inset-inline-end: calc(var(--spacing) * 14);
    }
    .inline-end-16 {
      inset-inline-end: calc(var(--spacing) * 16);
    }
    .inline-end-20 {
      inset-inline-end: calc(var(--spacing) * 20);
    }
    .inline-end-24 {
      inset-inline-end: calc(var(--spacing) * 24);
    }
    .inline-end-28 {
      inset-inline-end: calc(var(--spacing) * 28);
    }
    .inline-end-32 {
      inset-inline-end: calc(var(--spacing) * 32);
    }
    .inline-end-36 {
      inset-inline-end: calc(var(--spacing) * 36);
    }
    .inline-end-40 {
      inset-inline-end: calc(var(--spacing) * 40);
    }
    .inline-end-44 {
      inset-inline-end: calc(var(--spacing) * 44);
    }
    .inline-end-48 {
      inset-inline-end: calc(var(--spacing) * 48);
    }
    .inline-end-52 {
      inset-inline-end: calc(var(--spacing) * 52);
    }
    .inline-end-56 {
      inset-inline-end: calc(var(--spacing) * 56);
    }
    .inline-end-60 {
      inset-inline-end: calc(var(--spacing) * 60);
    }
    .inline-end-64 {
      inset-inline-end: calc(var(--spacing) * 64);
    }
    .inline-end-72 {
      inset-inline-end: calc(var(--spacing) * 72);
    }
    .inline-end-80 {
      inset-inline-end: calc(var(--spacing) * 80);
    }
    .inline-end-96 {
      inset-inline-end: calc(var(--spacing) * 96);
    }
    .inline-end-auto {
      inset-inline-end: auto;
    }
    .inline-end-full {
      inset-inline-end: 100%;
    }
    .inline-end-px {
      inset-inline-end: 1px;
    }
    .-block-end-0 {
      inset-block-end: calc(calc(var(--spacing) * 0) * -1);
    }
    .-block-end-0\\.5 {
      inset-block-end: calc(calc(var(--spacing) * 0.5) * -1);
    }
    .-block-end-1 {
      inset-block-end: calc(calc(var(--spacing) * 1) * -1);
    }
    .-block-end-1\\.5 {
      inset-block-end: calc(calc(var(--spacing) * 1.5) * -1);
    }
    .-block-end-1\\/2 {
      inset-block-end: calc(calc(1/2 * 100%) * -1);
    }
    .-block-end-1\\/3 {
      inset-block-end: calc(calc(1/3 * 100%) * -1);
    }
    .-block-end-1\\/4 {
      inset-block-end: calc(calc(1/4 * 100%) * -1);
    }
    .-block-end-2 {
      inset-block-end: calc(calc(var(--spacing) * 2) * -1);
    }
    .-block-end-2\\.5 {
      inset-block-end: calc(calc(var(--spacing) * 2.5) * -1);
    }
    .-block-end-2\\/3 {
      inset-block-end: calc(calc(2/3 * 100%) * -1);
    }
    .-block-end-2\\/4 {
      inset-block-end: calc(calc(2/4 * 100%) * -1);
    }
    .-block-end-3 {
      inset-block-end: calc(calc(var(--spacing) * 3) * -1);
    }
    .-block-end-3\\.5 {
      inset-block-end: calc(calc(var(--spacing) * 3.5) * -1);
    }
    .-block-end-3\\/4 {
      inset-block-end: calc(calc(3/4 * 100%) * -1);
    }
    .-block-end-4 {
      inset-block-end: calc(calc(var(--spacing) * 4) * -1);
    }
    .-block-end-5 {
      inset-block-end: calc(calc(var(--spacing) * 5) * -1);
    }
    .-block-end-6 {
      inset-block-end: calc(calc(var(--spacing) * 6) * -1);
    }
    .-block-end-7 {
      inset-block-end: calc(calc(var(--spacing) * 7) * -1);
    }
    .-block-end-8 {
      inset-block-end: calc(calc(var(--spacing) * 8) * -1);
    }
    .-block-end-9 {
      inset-block-end: calc(calc(var(--spacing) * 9) * -1);
    }
    .-block-end-10 {
      inset-block-end: calc(calc(var(--spacing) * 10) * -1);
    }
    .-block-end-11 {
      inset-block-end: calc(calc(var(--spacing) * 11) * -1);
    }
    .-block-end-12 {
      inset-block-end: calc(calc(var(--spacing) * 12) * -1);
    }
    .-block-end-14 {
      inset-block-end: calc(calc(var(--spacing) * 14) * -1);
    }
    .-block-end-16 {
      inset-block-end: calc(calc(var(--spacing) * 16) * -1);
    }
    .-block-end-20 {
      inset-block-end: calc(calc(var(--spacing) * 20) * -1);
    }
    .-block-end-24 {
      inset-block-end: calc(calc(var(--spacing) * 24) * -1);
    }
    .-block-end-28 {
      inset-block-end: calc(calc(var(--spacing) * 28) * -1);
    }
    .-block-end-32 {
      inset-block-end: calc(calc(var(--spacing) * 32) * -1);
    }
    .-block-end-36 {
      inset-block-end: calc(calc(var(--spacing) * 36) * -1);
    }
    .-block-end-40 {
      inset-block-end: calc(calc(var(--spacing) * 40) * -1);
    }
    .-block-end-44 {
      inset-block-end: calc(calc(var(--spacing) * 44) * -1);
    }
    .-block-end-48 {
      inset-block-end: calc(calc(var(--spacing) * 48) * -1);
    }
    .-block-end-52 {
      inset-block-end: calc(calc(var(--spacing) * 52) * -1);
    }
    .-block-end-56 {
      inset-block-end: calc(calc(var(--spacing) * 56) * -1);
    }
    .-block-end-60 {
      inset-block-end: calc(calc(var(--spacing) * 60) * -1);
    }
    .-block-end-64 {
      inset-block-end: calc(calc(var(--spacing) * 64) * -1);
    }
    .-block-end-72 {
      inset-block-end: calc(calc(var(--spacing) * 72) * -1);
    }
    .-block-end-80 {
      inset-block-end: calc(calc(var(--spacing) * 80) * -1);
    }
    .-block-end-96 {
      inset-block-end: calc(calc(var(--spacing) * 96) * -1);
    }
    .-block-end-full {
      inset-block-end: calc(100% * -1);
    }
    .-block-end-px {
      inset-block-end: calc(1px * -1);
    }
    .-block-start-0 {
      inset-block-start: calc(calc(var(--spacing) * 0) * -1);
    }
    .-block-start-0\\.5 {
      inset-block-start: calc(calc(var(--spacing) * 0.5) * -1);
    }
    .-block-start-1 {
      inset-block-start: calc(calc(var(--spacing) * 1) * -1);
    }
    .-block-start-1\\.5 {
      inset-block-start: calc(calc(var(--spacing) * 1.5) * -1);
    }
    .-block-start-1\\/2 {
      inset-block-start: calc(calc(1/2 * 100%) * -1);
    }
    .-block-start-1\\/3 {
      inset-block-start: calc(calc(1/3 * 100%) * -1);
    }
    .-block-start-1\\/4 {
      inset-block-start: calc(calc(1/4 * 100%) * -1);
    }
    .-block-start-2 {
      inset-block-start: calc(calc(var(--spacing) * 2) * -1);
    }
    .-block-start-2\\.5 {
      inset-block-start: calc(calc(var(--spacing) * 2.5) * -1);
    }
    .-block-start-2\\/3 {
      inset-block-start: calc(calc(2/3 * 100%) * -1);
    }
    .-block-start-2\\/4 {
      inset-block-start: calc(calc(2/4 * 100%) * -1);
    }
    .-block-start-3 {
      inset-block-start: calc(calc(var(--spacing) * 3) * -1);
    }
    .-block-start-3\\.5 {
      inset-block-start: calc(calc(var(--spacing) * 3.5) * -1);
    }
    .-block-start-3\\/4 {
      inset-block-start: calc(calc(3/4 * 100%) * -1);
    }
    .-block-start-4 {
      inset-block-start: calc(calc(var(--spacing) * 4) * -1);
    }
    .-block-start-5 {
      inset-block-start: calc(calc(var(--spacing) * 5) * -1);
    }
    .-block-start-6 {
      inset-block-start: calc(calc(var(--spacing) * 6) * -1);
    }
    .-block-start-7 {
      inset-block-start: calc(calc(var(--spacing) * 7) * -1);
    }
    .-block-start-8 {
      inset-block-start: calc(calc(var(--spacing) * 8) * -1);
    }
    .-block-start-9 {
      inset-block-start: calc(calc(var(--spacing) * 9) * -1);
    }
    .-block-start-10 {
      inset-block-start: calc(calc(var(--spacing) * 10) * -1);
    }
    .-block-start-11 {
      inset-block-start: calc(calc(var(--spacing) * 11) * -1);
    }
    .-block-start-12 {
      inset-block-start: calc(calc(var(--spacing) * 12) * -1);
    }
    .-block-start-14 {
      inset-block-start: calc(calc(var(--spacing) * 14) * -1);
    }
    .-block-start-16 {
      inset-block-start: calc(calc(var(--spacing) * 16) * -1);
    }
    .-block-start-20 {
      inset-block-start: calc(calc(var(--spacing) * 20) * -1);
    }
    .-block-start-24 {
      inset-block-start: calc(calc(var(--spacing) * 24) * -1);
    }
    .-block-start-28 {
      inset-block-start: calc(calc(var(--spacing) * 28) * -1);
    }
    .-block-start-32 {
      inset-block-start: calc(calc(var(--spacing) * 32) * -1);
    }
    .-block-start-36 {
      inset-block-start: calc(calc(var(--spacing) * 36) * -1);
    }
    .-block-start-40 {
      inset-block-start: calc(calc(var(--spacing) * 40) * -1);
    }
    .-block-start-44 {
      inset-block-start: calc(calc(var(--spacing) * 44) * -1);
    }
    .-block-start-48 {
      inset-block-start: calc(calc(var(--spacing) * 48) * -1);
    }
    .-block-start-52 {
      inset-block-start: calc(calc(var(--spacing) * 52) * -1);
    }
    .-block-start-56 {
      inset-block-start: calc(calc(var(--spacing) * 56) * -1);
    }
    .-block-start-60 {
      inset-block-start: calc(calc(var(--spacing) * 60) * -1);
    }
    .-block-start-64 {
      inset-block-start: calc(calc(var(--spacing) * 64) * -1);
    }
    .-block-start-72 {
      inset-block-start: calc(calc(var(--spacing) * 72) * -1);
    }
    .-block-start-80 {
      inset-block-start: calc(calc(var(--spacing) * 80) * -1);
    }
    .-block-start-96 {
      inset-block-start: calc(calc(var(--spacing) * 96) * -1);
    }
    .-block-start-full {
      inset-block-start: calc(100% * -1);
    }
    .-block-start-px {
      inset-block-start: calc(1px * -1);
    }
    .block-end-0 {
      inset-block-end: calc(var(--spacing) * 0);
    }
    .block-end-0\\.5 {
      inset-block-end: calc(var(--spacing) * 0.5);
    }
    .block-end-1 {
      inset-block-end: calc(var(--spacing) * 1);
    }
    .block-end-1\\.5 {
      inset-block-end: calc(var(--spacing) * 1.5);
    }
    .block-end-1\\/2 {
      inset-block-end: calc(1/2 * 100%);
    }
    .block-end-1\\/3 {
      inset-block-end: calc(1/3 * 100%);
    }
    .block-end-1\\/4 {
      inset-block-end: calc(1/4 * 100%);
    }
    .block-end-2 {
      inset-block-end: calc(var(--spacing) * 2);
    }
    .block-end-2\\.5 {
      inset-block-end: calc(var(--spacing) * 2.5);
    }
    .block-end-2\\/3 {
      inset-block-end: calc(2/3 * 100%);
    }
    .block-end-2\\/4 {
      inset-block-end: calc(2/4 * 100%);
    }
    .block-end-3 {
      inset-block-end: calc(var(--spacing) * 3);
    }
    .block-end-3\\.5 {
      inset-block-end: calc(var(--spacing) * 3.5);
    }
    .block-end-3\\/4 {
      inset-block-end: calc(3/4 * 100%);
    }
    .block-end-4 {
      inset-block-end: calc(var(--spacing) * 4);
    }
    .block-end-5 {
      inset-block-end: calc(var(--spacing) * 5);
    }
    .block-end-6 {
      inset-block-end: calc(var(--spacing) * 6);
    }
    .block-end-7 {
      inset-block-end: calc(var(--spacing) * 7);
    }
    .block-end-8 {
      inset-block-end: calc(var(--spacing) * 8);
    }
    .block-end-9 {
      inset-block-end: calc(var(--spacing) * 9);
    }
    .block-end-10 {
      inset-block-end: calc(var(--spacing) * 10);
    }
    .block-end-11 {
      inset-block-end: calc(var(--spacing) * 11);
    }
    .block-end-12 {
      inset-block-end: calc(var(--spacing) * 12);
    }
    .block-end-14 {
      inset-block-end: calc(var(--spacing) * 14);
    }
    .block-end-16 {
      inset-block-end: calc(var(--spacing) * 16);
    }
    .block-end-20 {
      inset-block-end: calc(var(--spacing) * 20);
    }
    .block-end-24 {
      inset-block-end: calc(var(--spacing) * 24);
    }
    .block-end-28 {
      inset-block-end: calc(var(--spacing) * 28);
    }
    .block-end-32 {
      inset-block-end: calc(var(--spacing) * 32);
    }
    .block-end-36 {
      inset-block-end: calc(var(--spacing) * 36);
    }
    .block-end-40 {
      inset-block-end: calc(var(--spacing) * 40);
    }
    .block-end-44 {
      inset-block-end: calc(var(--spacing) * 44);
    }
    .block-end-48 {
      inset-block-end: calc(var(--spacing) * 48);
    }
    .block-end-52 {
      inset-block-end: calc(var(--spacing) * 52);
    }
    .block-end-56 {
      inset-block-end: calc(var(--spacing) * 56);
    }
    .block-end-60 {
      inset-block-end: calc(var(--spacing) * 60);
    }
    .block-end-64 {
      inset-block-end: calc(var(--spacing) * 64);
    }
    .block-end-72 {
      inset-block-end: calc(var(--spacing) * 72);
    }
    .block-end-80 {
      inset-block-end: calc(var(--spacing) * 80);
    }
    .block-end-96 {
      inset-block-end: calc(var(--spacing) * 96);
    }
    .block-end-auto {
      inset-block-end: auto;
    }
    .block-end-full {
      inset-block-end: 100%;
    }
    .block-end-px {
      inset-block-end: 1px;
    }
    .block-start-0 {
      inset-block-start: calc(var(--spacing) * 0);
    }
    .block-start-0\\.5 {
      inset-block-start: calc(var(--spacing) * 0.5);
    }
    .block-start-1 {
      inset-block-start: calc(var(--spacing) * 1);
    }
    .block-start-1\\.5 {
      inset-block-start: calc(var(--spacing) * 1.5);
    }
    .block-start-1\\/2 {
      inset-block-start: calc(1/2 * 100%);
    }
    .block-start-1\\/3 {
      inset-block-start: calc(1/3 * 100%);
    }
    .block-start-1\\/4 {
      inset-block-start: calc(1/4 * 100%);
    }
    .block-start-2 {
      inset-block-start: calc(var(--spacing) * 2);
    }
    .block-start-2\\.5 {
      inset-block-start: calc(var(--spacing) * 2.5);
    }
    .block-start-2\\/3 {
      inset-block-start: calc(2/3 * 100%);
    }
    .block-start-2\\/4 {
      inset-block-start: calc(2/4 * 100%);
    }
    .block-start-3 {
      inset-block-start: calc(var(--spacing) * 3);
    }
    .block-start-3\\.5 {
      inset-block-start: calc(var(--spacing) * 3.5);
    }
    .block-start-3\\/4 {
      inset-block-start: calc(3/4 * 100%);
    }
    .block-start-4 {
      inset-block-start: calc(var(--spacing) * 4);
    }
    .block-start-5 {
      inset-block-start: calc(var(--spacing) * 5);
    }
    .block-start-6 {
      inset-block-start: calc(var(--spacing) * 6);
    }
    .block-start-7 {
      inset-block-start: calc(var(--spacing) * 7);
    }
    .block-start-8 {
      inset-block-start: calc(var(--spacing) * 8);
    }
    .block-start-9 {
      inset-block-start: calc(var(--spacing) * 9);
    }
    .block-start-10 {
      inset-block-start: calc(var(--spacing) * 10);
    }
    .block-start-11 {
      inset-block-start: calc(var(--spacing) * 11);
    }
    .block-start-12 {
      inset-block-start: calc(var(--spacing) * 12);
    }
    .block-start-14 {
      inset-block-start: calc(var(--spacing) * 14);
    }
    .block-start-16 {
      inset-block-start: calc(var(--spacing) * 16);
    }
    .block-start-20 {
      inset-block-start: calc(var(--spacing) * 20);
    }
    .block-start-24 {
      inset-block-start: calc(var(--spacing) * 24);
    }
    .block-start-28 {
      inset-block-start: calc(var(--spacing) * 28);
    }
    .block-start-32 {
      inset-block-start: calc(var(--spacing) * 32);
    }
    .block-start-36 {
      inset-block-start: calc(var(--spacing) * 36);
    }
    .block-start-40 {
      inset-block-start: calc(var(--spacing) * 40);
    }
    .block-start-44 {
      inset-block-start: calc(var(--spacing) * 44);
    }
    .block-start-48 {
      inset-block-start: calc(var(--spacing) * 48);
    }
    .block-start-52 {
      inset-block-start: calc(var(--spacing) * 52);
    }
    .block-start-56 {
      inset-block-start: calc(var(--spacing) * 56);
    }
    .block-start-60 {
      inset-block-start: calc(var(--spacing) * 60);
    }
    .block-start-64 {
      inset-block-start: calc(var(--spacing) * 64);
    }
    .block-start-72 {
      inset-block-start: calc(var(--spacing) * 72);
    }
    .block-start-80 {
      inset-block-start: calc(var(--spacing) * 80);
    }
    .block-start-96 {
      inset-block-start: calc(var(--spacing) * 96);
    }
    .block-start-auto {
      inset-block-start: auto;
    }
    .block-start-full {
      inset-block-start: 100%;
    }
    .block-start-px {
      inset-block-start: 1px;
    }
  }
`;
