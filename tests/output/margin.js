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
    .-mli-0 {
      margin-inline: calc(calc(var(--spacing) * 0) * -1);
    }
    .-mli-0\\.5 {
      margin-inline: calc(calc(var(--spacing) * 0.5) * -1);
    }
    .-mli-1 {
      margin-inline: calc(calc(var(--spacing) * 1) * -1);
    }
    .-mli-1\\.5 {
      margin-inline: calc(calc(var(--spacing) * 1.5) * -1);
    }
    .-mli-2 {
      margin-inline: calc(calc(var(--spacing) * 2) * -1);
    }
    .-mli-2\\.5 {
      margin-inline: calc(calc(var(--spacing) * 2.5) * -1);
    }
    .-mli-3 {
      margin-inline: calc(calc(var(--spacing) * 3) * -1);
    }
    .-mli-3\\.5 {
      margin-inline: calc(calc(var(--spacing) * 3.5) * -1);
    }
    .-mli-4 {
      margin-inline: calc(calc(var(--spacing) * 4) * -1);
    }
    .-mli-5 {
      margin-inline: calc(calc(var(--spacing) * 5) * -1);
    }
    .-mli-6 {
      margin-inline: calc(calc(var(--spacing) * 6) * -1);
    }
    .-mli-7 {
      margin-inline: calc(calc(var(--spacing) * 7) * -1);
    }
    .-mli-8 {
      margin-inline: calc(calc(var(--spacing) * 8) * -1);
    }
    .-mli-9 {
      margin-inline: calc(calc(var(--spacing) * 9) * -1);
    }
    .-mli-10 {
      margin-inline: calc(calc(var(--spacing) * 10) * -1);
    }
    .-mli-11 {
      margin-inline: calc(calc(var(--spacing) * 11) * -1);
    }
    .-mli-12 {
      margin-inline: calc(calc(var(--spacing) * 12) * -1);
    }
    .-mli-14 {
      margin-inline: calc(calc(var(--spacing) * 14) * -1);
    }
    .-mli-16 {
      margin-inline: calc(calc(var(--spacing) * 16) * -1);
    }
    .-mli-20 {
      margin-inline: calc(calc(var(--spacing) * 20) * -1);
    }
    .-mli-24 {
      margin-inline: calc(calc(var(--spacing) * 24) * -1);
    }
    .-mli-28 {
      margin-inline: calc(calc(var(--spacing) * 28) * -1);
    }
    .-mli-32 {
      margin-inline: calc(calc(var(--spacing) * 32) * -1);
    }
    .-mli-36 {
      margin-inline: calc(calc(var(--spacing) * 36) * -1);
    }
    .-mli-40 {
      margin-inline: calc(calc(var(--spacing) * 40) * -1);
    }
    .-mli-44 {
      margin-inline: calc(calc(var(--spacing) * 44) * -1);
    }
    .-mli-48 {
      margin-inline: calc(calc(var(--spacing) * 48) * -1);
    }
    .-mli-52 {
      margin-inline: calc(calc(var(--spacing) * 52) * -1);
    }
    .-mli-56 {
      margin-inline: calc(calc(var(--spacing) * 56) * -1);
    }
    .-mli-60 {
      margin-inline: calc(calc(var(--spacing) * 60) * -1);
    }
    .-mli-64 {
      margin-inline: calc(calc(var(--spacing) * 64) * -1);
    }
    .-mli-72 {
      margin-inline: calc(calc(var(--spacing) * 72) * -1);
    }
    .-mli-80 {
      margin-inline: calc(calc(var(--spacing) * 80) * -1);
    }
    .-mli-96 {
      margin-inline: calc(calc(var(--spacing) * 96) * -1);
    }
    .-mli-px {
      margin-inline: calc(1px * -1);
    }
    .mli-0 {
      margin-inline: calc(var(--spacing) * 0);
    }
    .mli-0\\.5 {
      margin-inline: calc(var(--spacing) * 0.5);
    }
    .mli-1 {
      margin-inline: calc(var(--spacing) * 1);
    }
    .mli-1\\.5 {
      margin-inline: calc(var(--spacing) * 1.5);
    }
    .mli-2 {
      margin-inline: calc(var(--spacing) * 2);
    }
    .mli-2\\.5 {
      margin-inline: calc(var(--spacing) * 2.5);
    }
    .mli-3 {
      margin-inline: calc(var(--spacing) * 3);
    }
    .mli-3\\.5 {
      margin-inline: calc(var(--spacing) * 3.5);
    }
    .mli-4 {
      margin-inline: calc(var(--spacing) * 4);
    }
    .mli-5 {
      margin-inline: calc(var(--spacing) * 5);
    }
    .mli-6 {
      margin-inline: calc(var(--spacing) * 6);
    }
    .mli-7 {
      margin-inline: calc(var(--spacing) * 7);
    }
    .mli-8 {
      margin-inline: calc(var(--spacing) * 8);
    }
    .mli-9 {
      margin-inline: calc(var(--spacing) * 9);
    }
    .mli-10 {
      margin-inline: calc(var(--spacing) * 10);
    }
    .mli-11 {
      margin-inline: calc(var(--spacing) * 11);
    }
    .mli-12 {
      margin-inline: calc(var(--spacing) * 12);
    }
    .mli-14 {
      margin-inline: calc(var(--spacing) * 14);
    }
    .mli-16 {
      margin-inline: calc(var(--spacing) * 16);
    }
    .mli-20 {
      margin-inline: calc(var(--spacing) * 20);
    }
    .mli-24 {
      margin-inline: calc(var(--spacing) * 24);
    }
    .mli-28 {
      margin-inline: calc(var(--spacing) * 28);
    }
    .mli-32 {
      margin-inline: calc(var(--spacing) * 32);
    }
    .mli-36 {
      margin-inline: calc(var(--spacing) * 36);
    }
    .mli-40 {
      margin-inline: calc(var(--spacing) * 40);
    }
    .mli-44 {
      margin-inline: calc(var(--spacing) * 44);
    }
    .mli-48 {
      margin-inline: calc(var(--spacing) * 48);
    }
    .mli-52 {
      margin-inline: calc(var(--spacing) * 52);
    }
    .mli-56 {
      margin-inline: calc(var(--spacing) * 56);
    }
    .mli-60 {
      margin-inline: calc(var(--spacing) * 60);
    }
    .mli-64 {
      margin-inline: calc(var(--spacing) * 64);
    }
    .mli-72 {
      margin-inline: calc(var(--spacing) * 72);
    }
    .mli-80 {
      margin-inline: calc(var(--spacing) * 80);
    }
    .mli-96 {
      margin-inline: calc(var(--spacing) * 96);
    }
    .mli-auto {
      margin-inline: auto;
    }
    .mli-px {
      margin-inline: 1px;
    }
    .-mlb-0 {
      margin-block: calc(calc(var(--spacing) * 0) * -1);
    }
    .-mlb-0\\.5 {
      margin-block: calc(calc(var(--spacing) * 0.5) * -1);
    }
    .-mlb-1 {
      margin-block: calc(calc(var(--spacing) * 1) * -1);
    }
    .-mlb-1\\.5 {
      margin-block: calc(calc(var(--spacing) * 1.5) * -1);
    }
    .-mlb-2 {
      margin-block: calc(calc(var(--spacing) * 2) * -1);
    }
    .-mlb-2\\.5 {
      margin-block: calc(calc(var(--spacing) * 2.5) * -1);
    }
    .-mlb-3 {
      margin-block: calc(calc(var(--spacing) * 3) * -1);
    }
    .-mlb-3\\.5 {
      margin-block: calc(calc(var(--spacing) * 3.5) * -1);
    }
    .-mlb-4 {
      margin-block: calc(calc(var(--spacing) * 4) * -1);
    }
    .-mlb-5 {
      margin-block: calc(calc(var(--spacing) * 5) * -1);
    }
    .-mlb-6 {
      margin-block: calc(calc(var(--spacing) * 6) * -1);
    }
    .-mlb-7 {
      margin-block: calc(calc(var(--spacing) * 7) * -1);
    }
    .-mlb-8 {
      margin-block: calc(calc(var(--spacing) * 8) * -1);
    }
    .-mlb-9 {
      margin-block: calc(calc(var(--spacing) * 9) * -1);
    }
    .-mlb-10 {
      margin-block: calc(calc(var(--spacing) * 10) * -1);
    }
    .-mlb-11 {
      margin-block: calc(calc(var(--spacing) * 11) * -1);
    }
    .-mlb-12 {
      margin-block: calc(calc(var(--spacing) * 12) * -1);
    }
    .-mlb-14 {
      margin-block: calc(calc(var(--spacing) * 14) * -1);
    }
    .-mlb-16 {
      margin-block: calc(calc(var(--spacing) * 16) * -1);
    }
    .-mlb-20 {
      margin-block: calc(calc(var(--spacing) * 20) * -1);
    }
    .-mlb-24 {
      margin-block: calc(calc(var(--spacing) * 24) * -1);
    }
    .-mlb-28 {
      margin-block: calc(calc(var(--spacing) * 28) * -1);
    }
    .-mlb-32 {
      margin-block: calc(calc(var(--spacing) * 32) * -1);
    }
    .-mlb-36 {
      margin-block: calc(calc(var(--spacing) * 36) * -1);
    }
    .-mlb-40 {
      margin-block: calc(calc(var(--spacing) * 40) * -1);
    }
    .-mlb-44 {
      margin-block: calc(calc(var(--spacing) * 44) * -1);
    }
    .-mlb-48 {
      margin-block: calc(calc(var(--spacing) * 48) * -1);
    }
    .-mlb-52 {
      margin-block: calc(calc(var(--spacing) * 52) * -1);
    }
    .-mlb-56 {
      margin-block: calc(calc(var(--spacing) * 56) * -1);
    }
    .-mlb-60 {
      margin-block: calc(calc(var(--spacing) * 60) * -1);
    }
    .-mlb-64 {
      margin-block: calc(calc(var(--spacing) * 64) * -1);
    }
    .-mlb-72 {
      margin-block: calc(calc(var(--spacing) * 72) * -1);
    }
    .-mlb-80 {
      margin-block: calc(calc(var(--spacing) * 80) * -1);
    }
    .-mlb-96 {
      margin-block: calc(calc(var(--spacing) * 96) * -1);
    }
    .-mlb-px {
      margin-block: calc(1px * -1);
    }
    .mlb-0 {
      margin-block: calc(var(--spacing) * 0);
    }
    .mlb-0\\.5 {
      margin-block: calc(var(--spacing) * 0.5);
    }
    .mlb-1 {
      margin-block: calc(var(--spacing) * 1);
    }
    .mlb-1\\.5 {
      margin-block: calc(var(--spacing) * 1.5);
    }
    .mlb-2 {
      margin-block: calc(var(--spacing) * 2);
    }
    .mlb-2\\.5 {
      margin-block: calc(var(--spacing) * 2.5);
    }
    .mlb-3 {
      margin-block: calc(var(--spacing) * 3);
    }
    .mlb-3\\.5 {
      margin-block: calc(var(--spacing) * 3.5);
    }
    .mlb-4 {
      margin-block: calc(var(--spacing) * 4);
    }
    .mlb-5 {
      margin-block: calc(var(--spacing) * 5);
    }
    .mlb-6 {
      margin-block: calc(var(--spacing) * 6);
    }
    .mlb-7 {
      margin-block: calc(var(--spacing) * 7);
    }
    .mlb-8 {
      margin-block: calc(var(--spacing) * 8);
    }
    .mlb-9 {
      margin-block: calc(var(--spacing) * 9);
    }
    .mlb-10 {
      margin-block: calc(var(--spacing) * 10);
    }
    .mlb-11 {
      margin-block: calc(var(--spacing) * 11);
    }
    .mlb-12 {
      margin-block: calc(var(--spacing) * 12);
    }
    .mlb-14 {
      margin-block: calc(var(--spacing) * 14);
    }
    .mlb-16 {
      margin-block: calc(var(--spacing) * 16);
    }
    .mlb-20 {
      margin-block: calc(var(--spacing) * 20);
    }
    .mlb-24 {
      margin-block: calc(var(--spacing) * 24);
    }
    .mlb-28 {
      margin-block: calc(var(--spacing) * 28);
    }
    .mlb-32 {
      margin-block: calc(var(--spacing) * 32);
    }
    .mlb-36 {
      margin-block: calc(var(--spacing) * 36);
    }
    .mlb-40 {
      margin-block: calc(var(--spacing) * 40);
    }
    .mlb-44 {
      margin-block: calc(var(--spacing) * 44);
    }
    .mlb-48 {
      margin-block: calc(var(--spacing) * 48);
    }
    .mlb-52 {
      margin-block: calc(var(--spacing) * 52);
    }
    .mlb-56 {
      margin-block: calc(var(--spacing) * 56);
    }
    .mlb-60 {
      margin-block: calc(var(--spacing) * 60);
    }
    .mlb-64 {
      margin-block: calc(var(--spacing) * 64);
    }
    .mlb-72 {
      margin-block: calc(var(--spacing) * 72);
    }
    .mlb-80 {
      margin-block: calc(var(--spacing) * 80);
    }
    .mlb-96 {
      margin-block: calc(var(--spacing) * 96);
    }
    .mlb-auto {
      margin-block: auto;
    }
    .mlb-px {
      margin-block: 1px;
    }
    .-mis-0 {
      margin-inline-start: calc(calc(var(--spacing) * 0) * -1);
    }
    .-mis-0\\.5 {
      margin-inline-start: calc(calc(var(--spacing) * 0.5) * -1);
    }
    .-mis-1 {
      margin-inline-start: calc(calc(var(--spacing) * 1) * -1);
    }
    .-mis-1\\.5 {
      margin-inline-start: calc(calc(var(--spacing) * 1.5) * -1);
    }
    .-mis-2 {
      margin-inline-start: calc(calc(var(--spacing) * 2) * -1);
    }
    .-mis-2\\.5 {
      margin-inline-start: calc(calc(var(--spacing) * 2.5) * -1);
    }
    .-mis-3 {
      margin-inline-start: calc(calc(var(--spacing) * 3) * -1);
    }
    .-mis-3\\.5 {
      margin-inline-start: calc(calc(var(--spacing) * 3.5) * -1);
    }
    .-mis-4 {
      margin-inline-start: calc(calc(var(--spacing) * 4) * -1);
    }
    .-mis-5 {
      margin-inline-start: calc(calc(var(--spacing) * 5) * -1);
    }
    .-mis-6 {
      margin-inline-start: calc(calc(var(--spacing) * 6) * -1);
    }
    .-mis-7 {
      margin-inline-start: calc(calc(var(--spacing) * 7) * -1);
    }
    .-mis-8 {
      margin-inline-start: calc(calc(var(--spacing) * 8) * -1);
    }
    .-mis-9 {
      margin-inline-start: calc(calc(var(--spacing) * 9) * -1);
    }
    .-mis-10 {
      margin-inline-start: calc(calc(var(--spacing) * 10) * -1);
    }
    .-mis-11 {
      margin-inline-start: calc(calc(var(--spacing) * 11) * -1);
    }
    .-mis-12 {
      margin-inline-start: calc(calc(var(--spacing) * 12) * -1);
    }
    .-mis-14 {
      margin-inline-start: calc(calc(var(--spacing) * 14) * -1);
    }
    .-mis-16 {
      margin-inline-start: calc(calc(var(--spacing) * 16) * -1);
    }
    .-mis-20 {
      margin-inline-start: calc(calc(var(--spacing) * 20) * -1);
    }
    .-mis-24 {
      margin-inline-start: calc(calc(var(--spacing) * 24) * -1);
    }
    .-mis-28 {
      margin-inline-start: calc(calc(var(--spacing) * 28) * -1);
    }
    .-mis-32 {
      margin-inline-start: calc(calc(var(--spacing) * 32) * -1);
    }
    .-mis-36 {
      margin-inline-start: calc(calc(var(--spacing) * 36) * -1);
    }
    .-mis-40 {
      margin-inline-start: calc(calc(var(--spacing) * 40) * -1);
    }
    .-mis-44 {
      margin-inline-start: calc(calc(var(--spacing) * 44) * -1);
    }
    .-mis-48 {
      margin-inline-start: calc(calc(var(--spacing) * 48) * -1);
    }
    .-mis-52 {
      margin-inline-start: calc(calc(var(--spacing) * 52) * -1);
    }
    .-mis-56 {
      margin-inline-start: calc(calc(var(--spacing) * 56) * -1);
    }
    .-mis-60 {
      margin-inline-start: calc(calc(var(--spacing) * 60) * -1);
    }
    .-mis-64 {
      margin-inline-start: calc(calc(var(--spacing) * 64) * -1);
    }
    .-mis-72 {
      margin-inline-start: calc(calc(var(--spacing) * 72) * -1);
    }
    .-mis-80 {
      margin-inline-start: calc(calc(var(--spacing) * 80) * -1);
    }
    .-mis-96 {
      margin-inline-start: calc(calc(var(--spacing) * 96) * -1);
    }
    .-mis-px {
      margin-inline-start: calc(1px * -1);
    }
    .mis-0 {
      margin-inline-start: calc(var(--spacing) * 0);
    }
    .mis-0\\.5 {
      margin-inline-start: calc(var(--spacing) * 0.5);
    }
    .mis-1 {
      margin-inline-start: calc(var(--spacing) * 1);
    }
    .mis-1\\.5 {
      margin-inline-start: calc(var(--spacing) * 1.5);
    }
    .mis-2 {
      margin-inline-start: calc(var(--spacing) * 2);
    }
    .mis-2\\.5 {
      margin-inline-start: calc(var(--spacing) * 2.5);
    }
    .mis-3 {
      margin-inline-start: calc(var(--spacing) * 3);
    }
    .mis-3\\.5 {
      margin-inline-start: calc(var(--spacing) * 3.5);
    }
    .mis-4 {
      margin-inline-start: calc(var(--spacing) * 4);
    }
    .mis-5 {
      margin-inline-start: calc(var(--spacing) * 5);
    }
    .mis-6 {
      margin-inline-start: calc(var(--spacing) * 6);
    }
    .mis-7 {
      margin-inline-start: calc(var(--spacing) * 7);
    }
    .mis-8 {
      margin-inline-start: calc(var(--spacing) * 8);
    }
    .mis-9 {
      margin-inline-start: calc(var(--spacing) * 9);
    }
    .mis-10 {
      margin-inline-start: calc(var(--spacing) * 10);
    }
    .mis-11 {
      margin-inline-start: calc(var(--spacing) * 11);
    }
    .mis-12 {
      margin-inline-start: calc(var(--spacing) * 12);
    }
    .mis-14 {
      margin-inline-start: calc(var(--spacing) * 14);
    }
    .mis-16 {
      margin-inline-start: calc(var(--spacing) * 16);
    }
    .mis-20 {
      margin-inline-start: calc(var(--spacing) * 20);
    }
    .mis-24 {
      margin-inline-start: calc(var(--spacing) * 24);
    }
    .mis-28 {
      margin-inline-start: calc(var(--spacing) * 28);
    }
    .mis-32 {
      margin-inline-start: calc(var(--spacing) * 32);
    }
    .mis-36 {
      margin-inline-start: calc(var(--spacing) * 36);
    }
    .mis-40 {
      margin-inline-start: calc(var(--spacing) * 40);
    }
    .mis-44 {
      margin-inline-start: calc(var(--spacing) * 44);
    }
    .mis-48 {
      margin-inline-start: calc(var(--spacing) * 48);
    }
    .mis-52 {
      margin-inline-start: calc(var(--spacing) * 52);
    }
    .mis-56 {
      margin-inline-start: calc(var(--spacing) * 56);
    }
    .mis-60 {
      margin-inline-start: calc(var(--spacing) * 60);
    }
    .mis-64 {
      margin-inline-start: calc(var(--spacing) * 64);
    }
    .mis-72 {
      margin-inline-start: calc(var(--spacing) * 72);
    }
    .mis-80 {
      margin-inline-start: calc(var(--spacing) * 80);
    }
    .mis-96 {
      margin-inline-start: calc(var(--spacing) * 96);
    }
    .mis-auto {
      margin-inline-start: auto;
    }
    .mis-px {
      margin-inline-start: 1px;
    }
    .-mie-0 {
      margin-inline-end: calc(calc(var(--spacing) * 0) * -1);
    }
    .-mie-0\\.5 {
      margin-inline-end: calc(calc(var(--spacing) * 0.5) * -1);
    }
    .-mie-1 {
      margin-inline-end: calc(calc(var(--spacing) * 1) * -1);
    }
    .-mie-1\\.5 {
      margin-inline-end: calc(calc(var(--spacing) * 1.5) * -1);
    }
    .-mie-2 {
      margin-inline-end: calc(calc(var(--spacing) * 2) * -1);
    }
    .-mie-2\\.5 {
      margin-inline-end: calc(calc(var(--spacing) * 2.5) * -1);
    }
    .-mie-3 {
      margin-inline-end: calc(calc(var(--spacing) * 3) * -1);
    }
    .-mie-3\\.5 {
      margin-inline-end: calc(calc(var(--spacing) * 3.5) * -1);
    }
    .-mie-4 {
      margin-inline-end: calc(calc(var(--spacing) * 4) * -1);
    }
    .-mie-5 {
      margin-inline-end: calc(calc(var(--spacing) * 5) * -1);
    }
    .-mie-6 {
      margin-inline-end: calc(calc(var(--spacing) * 6) * -1);
    }
    .-mie-7 {
      margin-inline-end: calc(calc(var(--spacing) * 7) * -1);
    }
    .-mie-8 {
      margin-inline-end: calc(calc(var(--spacing) * 8) * -1);
    }
    .-mie-9 {
      margin-inline-end: calc(calc(var(--spacing) * 9) * -1);
    }
    .-mie-10 {
      margin-inline-end: calc(calc(var(--spacing) * 10) * -1);
    }
    .-mie-11 {
      margin-inline-end: calc(calc(var(--spacing) * 11) * -1);
    }
    .-mie-12 {
      margin-inline-end: calc(calc(var(--spacing) * 12) * -1);
    }
    .-mie-14 {
      margin-inline-end: calc(calc(var(--spacing) * 14) * -1);
    }
    .-mie-16 {
      margin-inline-end: calc(calc(var(--spacing) * 16) * -1);
    }
    .-mie-20 {
      margin-inline-end: calc(calc(var(--spacing) * 20) * -1);
    }
    .-mie-24 {
      margin-inline-end: calc(calc(var(--spacing) * 24) * -1);
    }
    .-mie-28 {
      margin-inline-end: calc(calc(var(--spacing) * 28) * -1);
    }
    .-mie-32 {
      margin-inline-end: calc(calc(var(--spacing) * 32) * -1);
    }
    .-mie-36 {
      margin-inline-end: calc(calc(var(--spacing) * 36) * -1);
    }
    .-mie-40 {
      margin-inline-end: calc(calc(var(--spacing) * 40) * -1);
    }
    .-mie-44 {
      margin-inline-end: calc(calc(var(--spacing) * 44) * -1);
    }
    .-mie-48 {
      margin-inline-end: calc(calc(var(--spacing) * 48) * -1);
    }
    .-mie-52 {
      margin-inline-end: calc(calc(var(--spacing) * 52) * -1);
    }
    .-mie-56 {
      margin-inline-end: calc(calc(var(--spacing) * 56) * -1);
    }
    .-mie-60 {
      margin-inline-end: calc(calc(var(--spacing) * 60) * -1);
    }
    .-mie-64 {
      margin-inline-end: calc(calc(var(--spacing) * 64) * -1);
    }
    .-mie-72 {
      margin-inline-end: calc(calc(var(--spacing) * 72) * -1);
    }
    .-mie-80 {
      margin-inline-end: calc(calc(var(--spacing) * 80) * -1);
    }
    .-mie-96 {
      margin-inline-end: calc(calc(var(--spacing) * 96) * -1);
    }
    .-mie-px {
      margin-inline-end: calc(1px * -1);
    }
    .mie-0 {
      margin-inline-end: calc(var(--spacing) * 0);
    }
    .mie-0\\.5 {
      margin-inline-end: calc(var(--spacing) * 0.5);
    }
    .mie-1 {
      margin-inline-end: calc(var(--spacing) * 1);
    }
    .mie-1\\.5 {
      margin-inline-end: calc(var(--spacing) * 1.5);
    }
    .mie-2 {
      margin-inline-end: calc(var(--spacing) * 2);
    }
    .mie-2\\.5 {
      margin-inline-end: calc(var(--spacing) * 2.5);
    }
    .mie-3 {
      margin-inline-end: calc(var(--spacing) * 3);
    }
    .mie-3\\.5 {
      margin-inline-end: calc(var(--spacing) * 3.5);
    }
    .mie-4 {
      margin-inline-end: calc(var(--spacing) * 4);
    }
    .mie-5 {
      margin-inline-end: calc(var(--spacing) * 5);
    }
    .mie-6 {
      margin-inline-end: calc(var(--spacing) * 6);
    }
    .mie-7 {
      margin-inline-end: calc(var(--spacing) * 7);
    }
    .mie-8 {
      margin-inline-end: calc(var(--spacing) * 8);
    }
    .mie-9 {
      margin-inline-end: calc(var(--spacing) * 9);
    }
    .mie-10 {
      margin-inline-end: calc(var(--spacing) * 10);
    }
    .mie-11 {
      margin-inline-end: calc(var(--spacing) * 11);
    }
    .mie-12 {
      margin-inline-end: calc(var(--spacing) * 12);
    }
    .mie-14 {
      margin-inline-end: calc(var(--spacing) * 14);
    }
    .mie-16 {
      margin-inline-end: calc(var(--spacing) * 16);
    }
    .mie-20 {
      margin-inline-end: calc(var(--spacing) * 20);
    }
    .mie-24 {
      margin-inline-end: calc(var(--spacing) * 24);
    }
    .mie-28 {
      margin-inline-end: calc(var(--spacing) * 28);
    }
    .mie-32 {
      margin-inline-end: calc(var(--spacing) * 32);
    }
    .mie-36 {
      margin-inline-end: calc(var(--spacing) * 36);
    }
    .mie-40 {
      margin-inline-end: calc(var(--spacing) * 40);
    }
    .mie-44 {
      margin-inline-end: calc(var(--spacing) * 44);
    }
    .mie-48 {
      margin-inline-end: calc(var(--spacing) * 48);
    }
    .mie-52 {
      margin-inline-end: calc(var(--spacing) * 52);
    }
    .mie-56 {
      margin-inline-end: calc(var(--spacing) * 56);
    }
    .mie-60 {
      margin-inline-end: calc(var(--spacing) * 60);
    }
    .mie-64 {
      margin-inline-end: calc(var(--spacing) * 64);
    }
    .mie-72 {
      margin-inline-end: calc(var(--spacing) * 72);
    }
    .mie-80 {
      margin-inline-end: calc(var(--spacing) * 80);
    }
    .mie-96 {
      margin-inline-end: calc(var(--spacing) * 96);
    }
    .mie-auto {
      margin-inline-end: auto;
    }
    .mie-px {
      margin-inline-end: 1px;
    }
    .-mbe-0 {
      margin-block-end: calc(calc(var(--spacing) * 0) * -1);
    }
    .-mbe-0\\.5 {
      margin-block-end: calc(calc(var(--spacing) * 0.5) * -1);
    }
    .-mbe-1 {
      margin-block-end: calc(calc(var(--spacing) * 1) * -1);
    }
    .-mbe-1\\.5 {
      margin-block-end: calc(calc(var(--spacing) * 1.5) * -1);
    }
    .-mbe-2 {
      margin-block-end: calc(calc(var(--spacing) * 2) * -1);
    }
    .-mbe-2\\.5 {
      margin-block-end: calc(calc(var(--spacing) * 2.5) * -1);
    }
    .-mbe-3 {
      margin-block-end: calc(calc(var(--spacing) * 3) * -1);
    }
    .-mbe-3\\.5 {
      margin-block-end: calc(calc(var(--spacing) * 3.5) * -1);
    }
    .-mbe-4 {
      margin-block-end: calc(calc(var(--spacing) * 4) * -1);
    }
    .-mbe-5 {
      margin-block-end: calc(calc(var(--spacing) * 5) * -1);
    }
    .-mbe-6 {
      margin-block-end: calc(calc(var(--spacing) * 6) * -1);
    }
    .-mbe-7 {
      margin-block-end: calc(calc(var(--spacing) * 7) * -1);
    }
    .-mbe-8 {
      margin-block-end: calc(calc(var(--spacing) * 8) * -1);
    }
    .-mbe-9 {
      margin-block-end: calc(calc(var(--spacing) * 9) * -1);
    }
    .-mbe-10 {
      margin-block-end: calc(calc(var(--spacing) * 10) * -1);
    }
    .-mbe-11 {
      margin-block-end: calc(calc(var(--spacing) * 11) * -1);
    }
    .-mbe-12 {
      margin-block-end: calc(calc(var(--spacing) * 12) * -1);
    }
    .-mbe-14 {
      margin-block-end: calc(calc(var(--spacing) * 14) * -1);
    }
    .-mbe-16 {
      margin-block-end: calc(calc(var(--spacing) * 16) * -1);
    }
    .-mbe-20 {
      margin-block-end: calc(calc(var(--spacing) * 20) * -1);
    }
    .-mbe-24 {
      margin-block-end: calc(calc(var(--spacing) * 24) * -1);
    }
    .-mbe-28 {
      margin-block-end: calc(calc(var(--spacing) * 28) * -1);
    }
    .-mbe-32 {
      margin-block-end: calc(calc(var(--spacing) * 32) * -1);
    }
    .-mbe-36 {
      margin-block-end: calc(calc(var(--spacing) * 36) * -1);
    }
    .-mbe-40 {
      margin-block-end: calc(calc(var(--spacing) * 40) * -1);
    }
    .-mbe-44 {
      margin-block-end: calc(calc(var(--spacing) * 44) * -1);
    }
    .-mbe-48 {
      margin-block-end: calc(calc(var(--spacing) * 48) * -1);
    }
    .-mbe-52 {
      margin-block-end: calc(calc(var(--spacing) * 52) * -1);
    }
    .-mbe-56 {
      margin-block-end: calc(calc(var(--spacing) * 56) * -1);
    }
    .-mbe-60 {
      margin-block-end: calc(calc(var(--spacing) * 60) * -1);
    }
    .-mbe-64 {
      margin-block-end: calc(calc(var(--spacing) * 64) * -1);
    }
    .-mbe-72 {
      margin-block-end: calc(calc(var(--spacing) * 72) * -1);
    }
    .-mbe-80 {
      margin-block-end: calc(calc(var(--spacing) * 80) * -1);
    }
    .-mbe-96 {
      margin-block-end: calc(calc(var(--spacing) * 96) * -1);
    }
    .-mbe-px {
      margin-block-end: calc(1px * -1);
    }
    .-mbs-0 {
      margin-block-start: calc(calc(var(--spacing) * 0) * -1);
    }
    .-mbs-0\\.5 {
      margin-block-start: calc(calc(var(--spacing) * 0.5) * -1);
    }
    .-mbs-1 {
      margin-block-start: calc(calc(var(--spacing) * 1) * -1);
    }
    .-mbs-1\\.5 {
      margin-block-start: calc(calc(var(--spacing) * 1.5) * -1);
    }
    .-mbs-2 {
      margin-block-start: calc(calc(var(--spacing) * 2) * -1);
    }
    .-mbs-2\\.5 {
      margin-block-start: calc(calc(var(--spacing) * 2.5) * -1);
    }
    .-mbs-3 {
      margin-block-start: calc(calc(var(--spacing) * 3) * -1);
    }
    .-mbs-3\\.5 {
      margin-block-start: calc(calc(var(--spacing) * 3.5) * -1);
    }
    .-mbs-4 {
      margin-block-start: calc(calc(var(--spacing) * 4) * -1);
    }
    .-mbs-5 {
      margin-block-start: calc(calc(var(--spacing) * 5) * -1);
    }
    .-mbs-6 {
      margin-block-start: calc(calc(var(--spacing) * 6) * -1);
    }
    .-mbs-7 {
      margin-block-start: calc(calc(var(--spacing) * 7) * -1);
    }
    .-mbs-8 {
      margin-block-start: calc(calc(var(--spacing) * 8) * -1);
    }
    .-mbs-9 {
      margin-block-start: calc(calc(var(--spacing) * 9) * -1);
    }
    .-mbs-10 {
      margin-block-start: calc(calc(var(--spacing) * 10) * -1);
    }
    .-mbs-11 {
      margin-block-start: calc(calc(var(--spacing) * 11) * -1);
    }
    .-mbs-12 {
      margin-block-start: calc(calc(var(--spacing) * 12) * -1);
    }
    .-mbs-14 {
      margin-block-start: calc(calc(var(--spacing) * 14) * -1);
    }
    .-mbs-16 {
      margin-block-start: calc(calc(var(--spacing) * 16) * -1);
    }
    .-mbs-20 {
      margin-block-start: calc(calc(var(--spacing) * 20) * -1);
    }
    .-mbs-24 {
      margin-block-start: calc(calc(var(--spacing) * 24) * -1);
    }
    .-mbs-28 {
      margin-block-start: calc(calc(var(--spacing) * 28) * -1);
    }
    .-mbs-32 {
      margin-block-start: calc(calc(var(--spacing) * 32) * -1);
    }
    .-mbs-36 {
      margin-block-start: calc(calc(var(--spacing) * 36) * -1);
    }
    .-mbs-40 {
      margin-block-start: calc(calc(var(--spacing) * 40) * -1);
    }
    .-mbs-44 {
      margin-block-start: calc(calc(var(--spacing) * 44) * -1);
    }
    .-mbs-48 {
      margin-block-start: calc(calc(var(--spacing) * 48) * -1);
    }
    .-mbs-52 {
      margin-block-start: calc(calc(var(--spacing) * 52) * -1);
    }
    .-mbs-56 {
      margin-block-start: calc(calc(var(--spacing) * 56) * -1);
    }
    .-mbs-60 {
      margin-block-start: calc(calc(var(--spacing) * 60) * -1);
    }
    .-mbs-64 {
      margin-block-start: calc(calc(var(--spacing) * 64) * -1);
    }
    .-mbs-72 {
      margin-block-start: calc(calc(var(--spacing) * 72) * -1);
    }
    .-mbs-80 {
      margin-block-start: calc(calc(var(--spacing) * 80) * -1);
    }
    .-mbs-96 {
      margin-block-start: calc(calc(var(--spacing) * 96) * -1);
    }
    .-mbs-px {
      margin-block-start: calc(1px * -1);
    }
    .mbe-0 {
      margin-block-end: calc(var(--spacing) * 0);
    }
    .mbe-0\\.5 {
      margin-block-end: calc(var(--spacing) * 0.5);
    }
    .mbe-1 {
      margin-block-end: calc(var(--spacing) * 1);
    }
    .mbe-1\\.5 {
      margin-block-end: calc(var(--spacing) * 1.5);
    }
    .mbe-2 {
      margin-block-end: calc(var(--spacing) * 2);
    }
    .mbe-2\\.5 {
      margin-block-end: calc(var(--spacing) * 2.5);
    }
    .mbe-3 {
      margin-block-end: calc(var(--spacing) * 3);
    }
    .mbe-3\\.5 {
      margin-block-end: calc(var(--spacing) * 3.5);
    }
    .mbe-4 {
      margin-block-end: calc(var(--spacing) * 4);
    }
    .mbe-5 {
      margin-block-end: calc(var(--spacing) * 5);
    }
    .mbe-6 {
      margin-block-end: calc(var(--spacing) * 6);
    }
    .mbe-7 {
      margin-block-end: calc(var(--spacing) * 7);
    }
    .mbe-8 {
      margin-block-end: calc(var(--spacing) * 8);
    }
    .mbe-9 {
      margin-block-end: calc(var(--spacing) * 9);
    }
    .mbe-10 {
      margin-block-end: calc(var(--spacing) * 10);
    }
    .mbe-11 {
      margin-block-end: calc(var(--spacing) * 11);
    }
    .mbe-12 {
      margin-block-end: calc(var(--spacing) * 12);
    }
    .mbe-14 {
      margin-block-end: calc(var(--spacing) * 14);
    }
    .mbe-16 {
      margin-block-end: calc(var(--spacing) * 16);
    }
    .mbe-20 {
      margin-block-end: calc(var(--spacing) * 20);
    }
    .mbe-24 {
      margin-block-end: calc(var(--spacing) * 24);
    }
    .mbe-28 {
      margin-block-end: calc(var(--spacing) * 28);
    }
    .mbe-32 {
      margin-block-end: calc(var(--spacing) * 32);
    }
    .mbe-36 {
      margin-block-end: calc(var(--spacing) * 36);
    }
    .mbe-40 {
      margin-block-end: calc(var(--spacing) * 40);
    }
    .mbe-44 {
      margin-block-end: calc(var(--spacing) * 44);
    }
    .mbe-48 {
      margin-block-end: calc(var(--spacing) * 48);
    }
    .mbe-52 {
      margin-block-end: calc(var(--spacing) * 52);
    }
    .mbe-56 {
      margin-block-end: calc(var(--spacing) * 56);
    }
    .mbe-60 {
      margin-block-end: calc(var(--spacing) * 60);
    }
    .mbe-64 {
      margin-block-end: calc(var(--spacing) * 64);
    }
    .mbe-72 {
      margin-block-end: calc(var(--spacing) * 72);
    }
    .mbe-80 {
      margin-block-end: calc(var(--spacing) * 80);
    }
    .mbe-96 {
      margin-block-end: calc(var(--spacing) * 96);
    }
    .mbe-auto {
      margin-block-end: auto;
    }
    .mbe-px {
      margin-block-end: 1px;
    }
    .mbs-0 {
      margin-block-start: calc(var(--spacing) * 0);
    }
    .mbs-0\\.5 {
      margin-block-start: calc(var(--spacing) * 0.5);
    }
    .mbs-1 {
      margin-block-start: calc(var(--spacing) * 1);
    }
    .mbs-1\\.5 {
      margin-block-start: calc(var(--spacing) * 1.5);
    }
    .mbs-2 {
      margin-block-start: calc(var(--spacing) * 2);
    }
    .mbs-2\\.5 {
      margin-block-start: calc(var(--spacing) * 2.5);
    }
    .mbs-3 {
      margin-block-start: calc(var(--spacing) * 3);
    }
    .mbs-3\\.5 {
      margin-block-start: calc(var(--spacing) * 3.5);
    }
    .mbs-4 {
      margin-block-start: calc(var(--spacing) * 4);
    }
    .mbs-5 {
      margin-block-start: calc(var(--spacing) * 5);
    }
    .mbs-6 {
      margin-block-start: calc(var(--spacing) * 6);
    }
    .mbs-7 {
      margin-block-start: calc(var(--spacing) * 7);
    }
    .mbs-8 {
      margin-block-start: calc(var(--spacing) * 8);
    }
    .mbs-9 {
      margin-block-start: calc(var(--spacing) * 9);
    }
    .mbs-10 {
      margin-block-start: calc(var(--spacing) * 10);
    }
    .mbs-11 {
      margin-block-start: calc(var(--spacing) * 11);
    }
    .mbs-12 {
      margin-block-start: calc(var(--spacing) * 12);
    }
    .mbs-14 {
      margin-block-start: calc(var(--spacing) * 14);
    }
    .mbs-16 {
      margin-block-start: calc(var(--spacing) * 16);
    }
    .mbs-20 {
      margin-block-start: calc(var(--spacing) * 20);
    }
    .mbs-24 {
      margin-block-start: calc(var(--spacing) * 24);
    }
    .mbs-28 {
      margin-block-start: calc(var(--spacing) * 28);
    }
    .mbs-32 {
      margin-block-start: calc(var(--spacing) * 32);
    }
    .mbs-36 {
      margin-block-start: calc(var(--spacing) * 36);
    }
    .mbs-40 {
      margin-block-start: calc(var(--spacing) * 40);
    }
    .mbs-44 {
      margin-block-start: calc(var(--spacing) * 44);
    }
    .mbs-48 {
      margin-block-start: calc(var(--spacing) * 48);
    }
    .mbs-52 {
      margin-block-start: calc(var(--spacing) * 52);
    }
    .mbs-56 {
      margin-block-start: calc(var(--spacing) * 56);
    }
    .mbs-60 {
      margin-block-start: calc(var(--spacing) * 60);
    }
    .mbs-64 {
      margin-block-start: calc(var(--spacing) * 64);
    }
    .mbs-72 {
      margin-block-start: calc(var(--spacing) * 72);
    }
    .mbs-80 {
      margin-block-start: calc(var(--spacing) * 80);
    }
    .mbs-96 {
      margin-block-start: calc(var(--spacing) * 96);
    }
    .mbs-auto {
      margin-block-start: auto;
    }
    .mbs-px {
      margin-block-start: 1px;
    }
  }
`;
