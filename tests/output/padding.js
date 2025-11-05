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
    .pli-0 {
      padding-inline: calc(var(--spacing) * 0);
    }
    .pli-0\\.5 {
      padding-inline: calc(var(--spacing) * 0.5);
    }
    .pli-1 {
      padding-inline: calc(var(--spacing) * 1);
    }
    .pli-1\\.5 {
      padding-inline: calc(var(--spacing) * 1.5);
    }
    .pli-2 {
      padding-inline: calc(var(--spacing) * 2);
    }
    .pli-2\\.5 {
      padding-inline: calc(var(--spacing) * 2.5);
    }
    .pli-3 {
      padding-inline: calc(var(--spacing) * 3);
    }
    .pli-3\\.5 {
      padding-inline: calc(var(--spacing) * 3.5);
    }
    .pli-4 {
      padding-inline: calc(var(--spacing) * 4);
    }
    .pli-5 {
      padding-inline: calc(var(--spacing) * 5);
    }
    .pli-6 {
      padding-inline: calc(var(--spacing) * 6);
    }
    .pli-7 {
      padding-inline: calc(var(--spacing) * 7);
    }
    .pli-8 {
      padding-inline: calc(var(--spacing) * 8);
    }
    .pli-9 {
      padding-inline: calc(var(--spacing) * 9);
    }
    .pli-10 {
      padding-inline: calc(var(--spacing) * 10);
    }
    .pli-11 {
      padding-inline: calc(var(--spacing) * 11);
    }
    .pli-12 {
      padding-inline: calc(var(--spacing) * 12);
    }
    .pli-14 {
      padding-inline: calc(var(--spacing) * 14);
    }
    .pli-16 {
      padding-inline: calc(var(--spacing) * 16);
    }
    .pli-20 {
      padding-inline: calc(var(--spacing) * 20);
    }
    .pli-24 {
      padding-inline: calc(var(--spacing) * 24);
    }
    .pli-28 {
      padding-inline: calc(var(--spacing) * 28);
    }
    .pli-32 {
      padding-inline: calc(var(--spacing) * 32);
    }
    .pli-36 {
      padding-inline: calc(var(--spacing) * 36);
    }
    .pli-40 {
      padding-inline: calc(var(--spacing) * 40);
    }
    .pli-44 {
      padding-inline: calc(var(--spacing) * 44);
    }
    .pli-48 {
      padding-inline: calc(var(--spacing) * 48);
    }
    .pli-52 {
      padding-inline: calc(var(--spacing) * 52);
    }
    .pli-56 {
      padding-inline: calc(var(--spacing) * 56);
    }
    .pli-60 {
      padding-inline: calc(var(--spacing) * 60);
    }
    .pli-64 {
      padding-inline: calc(var(--spacing) * 64);
    }
    .pli-72 {
      padding-inline: calc(var(--spacing) * 72);
    }
    .pli-80 {
      padding-inline: calc(var(--spacing) * 80);
    }
    .pli-96 {
      padding-inline: calc(var(--spacing) * 96);
    }
    .pli-px {
      padding-inline: 1px;
    }
    .pli-theme-variable {
      padding-inline: calc(var(--spacing) * 35);
    }
    .plb-0 {
      padding-block: calc(var(--spacing) * 0);
    }
    .plb-0\\.5 {
      padding-block: calc(var(--spacing) * 0.5);
    }
    .plb-1 {
      padding-block: calc(var(--spacing) * 1);
    }
    .plb-1\\.5 {
      padding-block: calc(var(--spacing) * 1.5);
    }
    .plb-2 {
      padding-block: calc(var(--spacing) * 2);
    }
    .plb-2\\.5 {
      padding-block: calc(var(--spacing) * 2.5);
    }
    .plb-3 {
      padding-block: calc(var(--spacing) * 3);
    }
    .plb-3\\.5 {
      padding-block: calc(var(--spacing) * 3.5);
    }
    .plb-4 {
      padding-block: calc(var(--spacing) * 4);
    }
    .plb-5 {
      padding-block: calc(var(--spacing) * 5);
    }
    .plb-6 {
      padding-block: calc(var(--spacing) * 6);
    }
    .plb-7 {
      padding-block: calc(var(--spacing) * 7);
    }
    .plb-8 {
      padding-block: calc(var(--spacing) * 8);
    }
    .plb-9 {
      padding-block: calc(var(--spacing) * 9);
    }
    .plb-10 {
      padding-block: calc(var(--spacing) * 10);
    }
    .plb-11 {
      padding-block: calc(var(--spacing) * 11);
    }
    .plb-12 {
      padding-block: calc(var(--spacing) * 12);
    }
    .plb-14 {
      padding-block: calc(var(--spacing) * 14);
    }
    .plb-16 {
      padding-block: calc(var(--spacing) * 16);
    }
    .plb-20 {
      padding-block: calc(var(--spacing) * 20);
    }
    .plb-24 {
      padding-block: calc(var(--spacing) * 24);
    }
    .plb-28 {
      padding-block: calc(var(--spacing) * 28);
    }
    .plb-32 {
      padding-block: calc(var(--spacing) * 32);
    }
    .plb-36 {
      padding-block: calc(var(--spacing) * 36);
    }
    .plb-40 {
      padding-block: calc(var(--spacing) * 40);
    }
    .plb-44 {
      padding-block: calc(var(--spacing) * 44);
    }
    .plb-48 {
      padding-block: calc(var(--spacing) * 48);
    }
    .plb-52 {
      padding-block: calc(var(--spacing) * 52);
    }
    .plb-56 {
      padding-block: calc(var(--spacing) * 56);
    }
    .plb-60 {
      padding-block: calc(var(--spacing) * 60);
    }
    .plb-64 {
      padding-block: calc(var(--spacing) * 64);
    }
    .plb-72 {
      padding-block: calc(var(--spacing) * 72);
    }
    .plb-80 {
      padding-block: calc(var(--spacing) * 80);
    }
    .plb-96 {
      padding-block: calc(var(--spacing) * 96);
    }
    .plb-px {
      padding-block: 1px;
    }
    .plb-theme-variable {
      padding-block: calc(var(--spacing) * 35);
    }
    .pis-0 {
      padding-inline-start: calc(var(--spacing) * 0);
    }
    .pis-0\\.5 {
      padding-inline-start: calc(var(--spacing) * 0.5);
    }
    .pis-1 {
      padding-inline-start: calc(var(--spacing) * 1);
    }
    .pis-1\\.5 {
      padding-inline-start: calc(var(--spacing) * 1.5);
    }
    .pis-2 {
      padding-inline-start: calc(var(--spacing) * 2);
    }
    .pis-2\\.5 {
      padding-inline-start: calc(var(--spacing) * 2.5);
    }
    .pis-3 {
      padding-inline-start: calc(var(--spacing) * 3);
    }
    .pis-3\\.5 {
      padding-inline-start: calc(var(--spacing) * 3.5);
    }
    .pis-4 {
      padding-inline-start: calc(var(--spacing) * 4);
    }
    .pis-5 {
      padding-inline-start: calc(var(--spacing) * 5);
    }
    .pis-6 {
      padding-inline-start: calc(var(--spacing) * 6);
    }
    .pis-7 {
      padding-inline-start: calc(var(--spacing) * 7);
    }
    .pis-8 {
      padding-inline-start: calc(var(--spacing) * 8);
    }
    .pis-9 {
      padding-inline-start: calc(var(--spacing) * 9);
    }
    .pis-10 {
      padding-inline-start: calc(var(--spacing) * 10);
    }
    .pis-11 {
      padding-inline-start: calc(var(--spacing) * 11);
    }
    .pis-12 {
      padding-inline-start: calc(var(--spacing) * 12);
    }
    .pis-14 {
      padding-inline-start: calc(var(--spacing) * 14);
    }
    .pis-16 {
      padding-inline-start: calc(var(--spacing) * 16);
    }
    .pis-20 {
      padding-inline-start: calc(var(--spacing) * 20);
    }
    .pis-24 {
      padding-inline-start: calc(var(--spacing) * 24);
    }
    .pis-28 {
      padding-inline-start: calc(var(--spacing) * 28);
    }
    .pis-32 {
      padding-inline-start: calc(var(--spacing) * 32);
    }
    .pis-36 {
      padding-inline-start: calc(var(--spacing) * 36);
    }
    .pis-40 {
      padding-inline-start: calc(var(--spacing) * 40);
    }
    .pis-44 {
      padding-inline-start: calc(var(--spacing) * 44);
    }
    .pis-48 {
      padding-inline-start: calc(var(--spacing) * 48);
    }
    .pis-52 {
      padding-inline-start: calc(var(--spacing) * 52);
    }
    .pis-56 {
      padding-inline-start: calc(var(--spacing) * 56);
    }
    .pis-60 {
      padding-inline-start: calc(var(--spacing) * 60);
    }
    .pis-64 {
      padding-inline-start: calc(var(--spacing) * 64);
    }
    .pis-72 {
      padding-inline-start: calc(var(--spacing) * 72);
    }
    .pis-80 {
      padding-inline-start: calc(var(--spacing) * 80);
    }
    .pis-96 {
      padding-inline-start: calc(var(--spacing) * 96);
    }
    .pis-px {
      padding-inline-start: 1px;
    }
    .pis-theme-variable {
      padding-inline-start: calc(var(--spacing) * 35);
    }
    .pie-0 {
      padding-inline-end: calc(var(--spacing) * 0);
    }
    .pie-0\\.5 {
      padding-inline-end: calc(var(--spacing) * 0.5);
    }
    .pie-1 {
      padding-inline-end: calc(var(--spacing) * 1);
    }
    .pie-1\\.5 {
      padding-inline-end: calc(var(--spacing) * 1.5);
    }
    .pie-2 {
      padding-inline-end: calc(var(--spacing) * 2);
    }
    .pie-2\\.5 {
      padding-inline-end: calc(var(--spacing) * 2.5);
    }
    .pie-3 {
      padding-inline-end: calc(var(--spacing) * 3);
    }
    .pie-3\\.5 {
      padding-inline-end: calc(var(--spacing) * 3.5);
    }
    .pie-4 {
      padding-inline-end: calc(var(--spacing) * 4);
    }
    .pie-5 {
      padding-inline-end: calc(var(--spacing) * 5);
    }
    .pie-6 {
      padding-inline-end: calc(var(--spacing) * 6);
    }
    .pie-7 {
      padding-inline-end: calc(var(--spacing) * 7);
    }
    .pie-8 {
      padding-inline-end: calc(var(--spacing) * 8);
    }
    .pie-9 {
      padding-inline-end: calc(var(--spacing) * 9);
    }
    .pie-10 {
      padding-inline-end: calc(var(--spacing) * 10);
    }
    .pie-11 {
      padding-inline-end: calc(var(--spacing) * 11);
    }
    .pie-12 {
      padding-inline-end: calc(var(--spacing) * 12);
    }
    .pie-14 {
      padding-inline-end: calc(var(--spacing) * 14);
    }
    .pie-16 {
      padding-inline-end: calc(var(--spacing) * 16);
    }
    .pie-20 {
      padding-inline-end: calc(var(--spacing) * 20);
    }
    .pie-24 {
      padding-inline-end: calc(var(--spacing) * 24);
    }
    .pie-28 {
      padding-inline-end: calc(var(--spacing) * 28);
    }
    .pie-32 {
      padding-inline-end: calc(var(--spacing) * 32);
    }
    .pie-36 {
      padding-inline-end: calc(var(--spacing) * 36);
    }
    .pie-40 {
      padding-inline-end: calc(var(--spacing) * 40);
    }
    .pie-44 {
      padding-inline-end: calc(var(--spacing) * 44);
    }
    .pie-48 {
      padding-inline-end: calc(var(--spacing) * 48);
    }
    .pie-52 {
      padding-inline-end: calc(var(--spacing) * 52);
    }
    .pie-56 {
      padding-inline-end: calc(var(--spacing) * 56);
    }
    .pie-60 {
      padding-inline-end: calc(var(--spacing) * 60);
    }
    .pie-64 {
      padding-inline-end: calc(var(--spacing) * 64);
    }
    .pie-72 {
      padding-inline-end: calc(var(--spacing) * 72);
    }
    .pie-80 {
      padding-inline-end: calc(var(--spacing) * 80);
    }
    .pie-96 {
      padding-inline-end: calc(var(--spacing) * 96);
    }
    .pie-px {
      padding-inline-end: 1px;
    }
    .pie-theme-variable {
      padding-inline-end: calc(var(--spacing) * 35);
    }
    .pbe-0 {
      padding-block-end: calc(var(--spacing) * 0);
    }
    .pbe-0\\.5 {
      padding-block-end: calc(var(--spacing) * 0.5);
    }
    .pbe-1 {
      padding-block-end: calc(var(--spacing) * 1);
    }
    .pbe-1\\.5 {
      padding-block-end: calc(var(--spacing) * 1.5);
    }
    .pbe-2 {
      padding-block-end: calc(var(--spacing) * 2);
    }
    .pbe-2\\.5 {
      padding-block-end: calc(var(--spacing) * 2.5);
    }
    .pbe-3 {
      padding-block-end: calc(var(--spacing) * 3);
    }
    .pbe-3\\.5 {
      padding-block-end: calc(var(--spacing) * 3.5);
    }
    .pbe-4 {
      padding-block-end: calc(var(--spacing) * 4);
    }
    .pbe-5 {
      padding-block-end: calc(var(--spacing) * 5);
    }
    .pbe-6 {
      padding-block-end: calc(var(--spacing) * 6);
    }
    .pbe-7 {
      padding-block-end: calc(var(--spacing) * 7);
    }
    .pbe-8 {
      padding-block-end: calc(var(--spacing) * 8);
    }
    .pbe-9 {
      padding-block-end: calc(var(--spacing) * 9);
    }
    .pbe-10 {
      padding-block-end: calc(var(--spacing) * 10);
    }
    .pbe-11 {
      padding-block-end: calc(var(--spacing) * 11);
    }
    .pbe-12 {
      padding-block-end: calc(var(--spacing) * 12);
    }
    .pbe-14 {
      padding-block-end: calc(var(--spacing) * 14);
    }
    .pbe-16 {
      padding-block-end: calc(var(--spacing) * 16);
    }
    .pbe-20 {
      padding-block-end: calc(var(--spacing) * 20);
    }
    .pbe-24 {
      padding-block-end: calc(var(--spacing) * 24);
    }
    .pbe-28 {
      padding-block-end: calc(var(--spacing) * 28);
    }
    .pbe-32 {
      padding-block-end: calc(var(--spacing) * 32);
    }
    .pbe-36 {
      padding-block-end: calc(var(--spacing) * 36);
    }
    .pbe-40 {
      padding-block-end: calc(var(--spacing) * 40);
    }
    .pbe-44 {
      padding-block-end: calc(var(--spacing) * 44);
    }
    .pbe-48 {
      padding-block-end: calc(var(--spacing) * 48);
    }
    .pbe-52 {
      padding-block-end: calc(var(--spacing) * 52);
    }
    .pbe-56 {
      padding-block-end: calc(var(--spacing) * 56);
    }
    .pbe-60 {
      padding-block-end: calc(var(--spacing) * 60);
    }
    .pbe-64 {
      padding-block-end: calc(var(--spacing) * 64);
    }
    .pbe-72 {
      padding-block-end: calc(var(--spacing) * 72);
    }
    .pbe-80 {
      padding-block-end: calc(var(--spacing) * 80);
    }
    .pbe-96 {
      padding-block-end: calc(var(--spacing) * 96);
    }
    .pbe-px {
      padding-block-end: 1px;
    }
    .pbe-theme-variable {
      padding-block-end: calc(var(--spacing) * 35);
    }
    .pbs-0 {
      padding-block-start: calc(var(--spacing) * 0);
    }
    .pbs-0\\.5 {
      padding-block-start: calc(var(--spacing) * 0.5);
    }
    .pbs-1 {
      padding-block-start: calc(var(--spacing) * 1);
    }
    .pbs-1\\.5 {
      padding-block-start: calc(var(--spacing) * 1.5);
    }
    .pbs-2 {
      padding-block-start: calc(var(--spacing) * 2);
    }
    .pbs-2\\.5 {
      padding-block-start: calc(var(--spacing) * 2.5);
    }
    .pbs-3 {
      padding-block-start: calc(var(--spacing) * 3);
    }
    .pbs-3\\.5 {
      padding-block-start: calc(var(--spacing) * 3.5);
    }
    .pbs-4 {
      padding-block-start: calc(var(--spacing) * 4);
    }
    .pbs-5 {
      padding-block-start: calc(var(--spacing) * 5);
    }
    .pbs-6 {
      padding-block-start: calc(var(--spacing) * 6);
    }
    .pbs-7 {
      padding-block-start: calc(var(--spacing) * 7);
    }
    .pbs-8 {
      padding-block-start: calc(var(--spacing) * 8);
    }
    .pbs-9 {
      padding-block-start: calc(var(--spacing) * 9);
    }
    .pbs-10 {
      padding-block-start: calc(var(--spacing) * 10);
    }
    .pbs-11 {
      padding-block-start: calc(var(--spacing) * 11);
    }
    .pbs-12 {
      padding-block-start: calc(var(--spacing) * 12);
    }
    .pbs-14 {
      padding-block-start: calc(var(--spacing) * 14);
    }
    .pbs-16 {
      padding-block-start: calc(var(--spacing) * 16);
    }
    .pbs-20 {
      padding-block-start: calc(var(--spacing) * 20);
    }
    .pbs-24 {
      padding-block-start: calc(var(--spacing) * 24);
    }
    .pbs-28 {
      padding-block-start: calc(var(--spacing) * 28);
    }
    .pbs-32 {
      padding-block-start: calc(var(--spacing) * 32);
    }
    .pbs-36 {
      padding-block-start: calc(var(--spacing) * 36);
    }
    .pbs-40 {
      padding-block-start: calc(var(--spacing) * 40);
    }
    .pbs-44 {
      padding-block-start: calc(var(--spacing) * 44);
    }
    .pbs-48 {
      padding-block-start: calc(var(--spacing) * 48);
    }
    .pbs-52 {
      padding-block-start: calc(var(--spacing) * 52);
    }
    .pbs-56 {
      padding-block-start: calc(var(--spacing) * 56);
    }
    .pbs-60 {
      padding-block-start: calc(var(--spacing) * 60);
    }
    .pbs-64 {
      padding-block-start: calc(var(--spacing) * 64);
    }
    .pbs-72 {
      padding-block-start: calc(var(--spacing) * 72);
    }
    .pbs-80 {
      padding-block-start: calc(var(--spacing) * 80);
    }
    .pbs-96 {
      padding-block-start: calc(var(--spacing) * 96);
    }
    .pbs-px {
      padding-block-start: 1px;
    }
    .pbs-theme-variable {
      padding-block-start: calc(var(--spacing) * 35);
    }
  }
`;
