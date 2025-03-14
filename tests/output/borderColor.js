module.exports = `
  /*! tailwindcss v4.0.9 | MIT License | https://tailwindcss.com */
  @layer theme, base, components, utilities;
  @layer theme {
    :root, :host {
      --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", "Courier New", monospace;
      --color-red-50: oklch(0.971 0.013 17.38);
      --color-red-100: oklch(0.936 0.032 17.717);
      --color-red-200: oklch(0.885 0.062 18.334);
      --color-red-300: oklch(0.808 0.114 19.571);
      --color-red-400: oklch(0.704 0.191 22.216);
      --color-red-500: oklch(0.637 0.237 25.331);
      --color-red-600: oklch(0.577 0.245 27.325);
      --color-red-700: oklch(0.505 0.213 27.518);
      --color-red-800: oklch(0.444 0.177 26.899);
      --color-red-900: oklch(0.396 0.141 25.723);
      --color-yellow-50: oklch(0.987 0.026 102.212);
      --color-yellow-100: oklch(0.973 0.071 103.193);
      --color-yellow-200: oklch(0.945 0.129 101.54);
      --color-yellow-300: oklch(0.905 0.182 98.111);
      --color-yellow-400: oklch(0.852 0.199 91.936);
      --color-yellow-500: oklch(0.795 0.184 86.047);
      --color-yellow-600: oklch(0.681 0.162 75.834);
      --color-yellow-700: oklch(0.554 0.135 66.442);
      --color-yellow-800: oklch(0.476 0.114 61.907);
      --color-yellow-900: oklch(0.421 0.095 57.708);
      --color-green-50: oklch(0.982 0.018 155.826);
      --color-green-100: oklch(0.962 0.044 156.743);
      --color-green-200: oklch(0.925 0.084 155.995);
      --color-green-300: oklch(0.871 0.15 154.449);
      --color-green-400: oklch(0.792 0.209 151.711);
      --color-green-500: oklch(0.723 0.219 149.579);
      --color-green-600: oklch(0.627 0.194 149.214);
      --color-green-700: oklch(0.527 0.154 150.069);
      --color-green-800: oklch(0.448 0.119 151.328);
      --color-green-900: oklch(0.393 0.095 152.535);
      --color-blue-50: oklch(0.97 0.014 254.604);
      --color-blue-100: oklch(0.932 0.032 255.585);
      --color-blue-200: oklch(0.882 0.059 254.128);
      --color-blue-300: oklch(0.809 0.105 251.813);
      --color-blue-400: oklch(0.707 0.165 254.624);
      --color-blue-500: oklch(0.623 0.214 259.815);
      --color-blue-600: oklch(0.546 0.245 262.881);
      --color-blue-700: oklch(0.488 0.243 264.376);
      --color-blue-800: oklch(0.424 0.199 265.638);
      --color-blue-900: oklch(0.379 0.146 265.522);
      --color-indigo-50: oklch(0.962 0.018 272.314);
      --color-indigo-100: oklch(0.93 0.034 272.788);
      --color-indigo-200: oklch(0.87 0.065 274.039);
      --color-indigo-300: oklch(0.785 0.115 274.713);
      --color-indigo-400: oklch(0.673 0.182 276.935);
      --color-indigo-500: oklch(0.585 0.233 277.117);
      --color-indigo-600: oklch(0.511 0.262 276.966);
      --color-indigo-700: oklch(0.457 0.24 277.023);
      --color-indigo-800: oklch(0.398 0.195 277.366);
      --color-indigo-900: oklch(0.359 0.144 278.697);
      --color-purple-50: oklch(0.977 0.014 308.299);
      --color-purple-100: oklch(0.946 0.033 307.174);
      --color-purple-200: oklch(0.902 0.063 306.703);
      --color-purple-300: oklch(0.827 0.119 306.383);
      --color-purple-400: oklch(0.714 0.203 305.504);
      --color-purple-500: oklch(0.627 0.265 303.9);
      --color-purple-600: oklch(0.558 0.288 302.321);
      --color-purple-700: oklch(0.496 0.265 301.924);
      --color-purple-800: oklch(0.438 0.218 303.724);
      --color-purple-900: oklch(0.381 0.176 304.987);
      --color-pink-50: oklch(0.971 0.014 343.198);
      --color-pink-100: oklch(0.948 0.028 342.258);
      --color-pink-200: oklch(0.899 0.061 343.231);
      --color-pink-300: oklch(0.823 0.12 346.018);
      --color-pink-400: oklch(0.718 0.202 349.761);
      --color-pink-500: oklch(0.656 0.241 354.308);
      --color-pink-600: oklch(0.592 0.249 0.584);
      --color-pink-700: oklch(0.525 0.223 3.958);
      --color-pink-800: oklch(0.459 0.187 3.815);
      --color-pink-900: oklch(0.408 0.153 2.432);
      --color-gray-50: oklch(0.985 0.002 247.839);
      --color-gray-100: oklch(0.967 0.003 264.542);
      --color-gray-200: oklch(0.928 0.006 264.531);
      --color-gray-300: oklch(0.872 0.01 258.338);
      --color-gray-400: oklch(0.707 0.022 261.325);
      --color-gray-500: oklch(0.551 0.027 264.364);
      --color-gray-600: oklch(0.446 0.03 256.802);
      --color-gray-700: oklch(0.373 0.034 259.733);
      --color-gray-800: oklch(0.278 0.033 256.848);
      --color-gray-900: oklch(0.21 0.034 264.665);
      --color-black: #000;
      --color-white: #fff;
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
    .border-li-black {
      border-inline-start-color: var(--color-black);
      border-inline-end-color: var(--color-black);
    }
    .border-li-current {
      border-inline-start-color: currentColor;
      border-inline-end-color: currentColor;
    }
    .border-li-gray-50 {
      border-inline-start-color: var(--color-gray-50);
      border-inline-end-color: var(--color-gray-50);
    }
    .border-li-gray-100 {
      border-inline-start-color: var(--color-gray-100);
      border-inline-end-color: var(--color-gray-100);
    }
    .border-li-gray-200 {
      border-inline-start-color: var(--color-gray-200);
      border-inline-end-color: var(--color-gray-200);
    }
    .border-li-gray-300 {
      border-inline-start-color: var(--color-gray-300);
      border-inline-end-color: var(--color-gray-300);
    }
    .border-li-gray-400 {
      border-inline-start-color: var(--color-gray-400);
      border-inline-end-color: var(--color-gray-400);
    }
    .border-li-gray-500 {
      border-inline-start-color: var(--color-gray-500);
      border-inline-end-color: var(--color-gray-500);
    }
    .border-li-gray-600 {
      border-inline-start-color: var(--color-gray-600);
      border-inline-end-color: var(--color-gray-600);
    }
    .border-li-gray-700 {
      border-inline-start-color: var(--color-gray-700);
      border-inline-end-color: var(--color-gray-700);
    }
    .border-li-gray-800 {
      border-inline-start-color: var(--color-gray-800);
      border-inline-end-color: var(--color-gray-800);
    }
    .border-li-gray-900 {
      border-inline-start-color: var(--color-gray-900);
      border-inline-end-color: var(--color-gray-900);
    }
    .border-li-inherit {
      border-inline-start-color: inherit;
      border-inline-end-color: inherit;
    }
    .border-li-transparent {
      border-inline-start-color: transparent;
      border-inline-end-color: transparent;
    }
    .border-li-white {
      border-inline-start-color: var(--color-white);
      border-inline-end-color: var(--color-white);
    }
    .border-is-black {
      border-inline-start-color: var(--color-black);
    }
    .border-is-blue-50 {
      border-inline-start-color: var(--color-blue-50);
    }
    .border-is-blue-100 {
      border-inline-start-color: var(--color-blue-100);
    }
    .border-is-blue-200 {
      border-inline-start-color: var(--color-blue-200);
    }
    .border-is-blue-300 {
      border-inline-start-color: var(--color-blue-300);
    }
    .border-is-blue-400 {
      border-inline-start-color: var(--color-blue-400);
    }
    .border-is-blue-500 {
      border-inline-start-color: var(--color-blue-500);
    }
    .border-is-blue-600 {
      border-inline-start-color: var(--color-blue-600);
    }
    .border-is-blue-700 {
      border-inline-start-color: var(--color-blue-700);
    }
    .border-is-blue-800 {
      border-inline-start-color: var(--color-blue-800);
    }
    .border-is-blue-900 {
      border-inline-start-color: var(--color-blue-900);
    }
    .border-is-current {
      border-inline-start-color: currentColor;
    }
    .border-is-gray-50 {
      border-inline-start-color: var(--color-gray-50);
    }
    .border-is-gray-100 {
      border-inline-start-color: var(--color-gray-100);
    }
    .border-is-gray-200 {
      border-inline-start-color: var(--color-gray-200);
    }
    .border-is-gray-300 {
      border-inline-start-color: var(--color-gray-300);
    }
    .border-is-gray-400 {
      border-inline-start-color: var(--color-gray-400);
    }
    .border-is-gray-500 {
      border-inline-start-color: var(--color-gray-500);
    }
    .border-is-gray-600 {
      border-inline-start-color: var(--color-gray-600);
    }
    .border-is-gray-700 {
      border-inline-start-color: var(--color-gray-700);
    }
    .border-is-gray-800 {
      border-inline-start-color: var(--color-gray-800);
    }
    .border-is-gray-900 {
      border-inline-start-color: var(--color-gray-900);
    }
    .border-is-green-50 {
      border-inline-start-color: var(--color-green-50);
    }
    .border-is-green-100 {
      border-inline-start-color: var(--color-green-100);
    }
    .border-is-green-200 {
      border-inline-start-color: var(--color-green-200);
    }
    .border-is-green-300 {
      border-inline-start-color: var(--color-green-300);
    }
    .border-is-green-400 {
      border-inline-start-color: var(--color-green-400);
    }
    .border-is-green-500 {
      border-inline-start-color: var(--color-green-500);
    }
    .border-is-green-600 {
      border-inline-start-color: var(--color-green-600);
    }
    .border-is-green-700 {
      border-inline-start-color: var(--color-green-700);
    }
    .border-is-green-800 {
      border-inline-start-color: var(--color-green-800);
    }
    .border-is-green-900 {
      border-inline-start-color: var(--color-green-900);
    }
    .border-is-indigo-50 {
      border-inline-start-color: var(--color-indigo-50);
    }
    .border-is-indigo-100 {
      border-inline-start-color: var(--color-indigo-100);
    }
    .border-is-indigo-200 {
      border-inline-start-color: var(--color-indigo-200);
    }
    .border-is-indigo-300 {
      border-inline-start-color: var(--color-indigo-300);
    }
    .border-is-indigo-400 {
      border-inline-start-color: var(--color-indigo-400);
    }
    .border-is-indigo-500 {
      border-inline-start-color: var(--color-indigo-500);
    }
    .border-is-indigo-600 {
      border-inline-start-color: var(--color-indigo-600);
    }
    .border-is-indigo-700 {
      border-inline-start-color: var(--color-indigo-700);
    }
    .border-is-indigo-800 {
      border-inline-start-color: var(--color-indigo-800);
    }
    .border-is-indigo-900 {
      border-inline-start-color: var(--color-indigo-900);
    }
    .border-is-inherit {
      border-inline-start-color: inherit;
    }
    .border-is-pink-50 {
      border-inline-start-color: var(--color-pink-50);
    }
    .border-is-pink-100 {
      border-inline-start-color: var(--color-pink-100);
    }
    .border-is-pink-200 {
      border-inline-start-color: var(--color-pink-200);
    }
    .border-is-pink-300 {
      border-inline-start-color: var(--color-pink-300);
    }
    .border-is-pink-400 {
      border-inline-start-color: var(--color-pink-400);
    }
    .border-is-pink-500 {
      border-inline-start-color: var(--color-pink-500);
    }
    .border-is-pink-600 {
      border-inline-start-color: var(--color-pink-600);
    }
    .border-is-pink-700 {
      border-inline-start-color: var(--color-pink-700);
    }
    .border-is-pink-800 {
      border-inline-start-color: var(--color-pink-800);
    }
    .border-is-pink-900 {
      border-inline-start-color: var(--color-pink-900);
    }
    .border-is-purple-50 {
      border-inline-start-color: var(--color-purple-50);
    }
    .border-is-purple-100 {
      border-inline-start-color: var(--color-purple-100);
    }
    .border-is-purple-200 {
      border-inline-start-color: var(--color-purple-200);
    }
    .border-is-purple-300 {
      border-inline-start-color: var(--color-purple-300);
    }
    .border-is-purple-400 {
      border-inline-start-color: var(--color-purple-400);
    }
    .border-is-purple-500 {
      border-inline-start-color: var(--color-purple-500);
    }
    .border-is-purple-600 {
      border-inline-start-color: var(--color-purple-600);
    }
    .border-is-purple-700 {
      border-inline-start-color: var(--color-purple-700);
    }
    .border-is-purple-800 {
      border-inline-start-color: var(--color-purple-800);
    }
    .border-is-purple-900 {
      border-inline-start-color: var(--color-purple-900);
    }
    .border-is-red-50 {
      border-inline-start-color: var(--color-red-50);
    }
    .border-is-red-100 {
      border-inline-start-color: var(--color-red-100);
    }
    .border-is-red-200 {
      border-inline-start-color: var(--color-red-200);
    }
    .border-is-red-300 {
      border-inline-start-color: var(--color-red-300);
    }
    .border-is-red-400 {
      border-inline-start-color: var(--color-red-400);
    }
    .border-is-red-500 {
      border-inline-start-color: var(--color-red-500);
    }
    .border-is-red-600 {
      border-inline-start-color: var(--color-red-600);
    }
    .border-is-red-700 {
      border-inline-start-color: var(--color-red-700);
    }
    .border-is-red-800 {
      border-inline-start-color: var(--color-red-800);
    }
    .border-is-red-900 {
      border-inline-start-color: var(--color-red-900);
    }
    .border-is-transparent {
      border-inline-start-color: transparent;
    }
    .border-is-white {
      border-inline-start-color: var(--color-white);
    }
    .border-is-yellow-50 {
      border-inline-start-color: var(--color-yellow-50);
    }
    .border-is-yellow-100 {
      border-inline-start-color: var(--color-yellow-100);
    }
    .border-is-yellow-200 {
      border-inline-start-color: var(--color-yellow-200);
    }
    .border-is-yellow-300 {
      border-inline-start-color: var(--color-yellow-300);
    }
    .border-is-yellow-400 {
      border-inline-start-color: var(--color-yellow-400);
    }
    .border-is-yellow-500 {
      border-inline-start-color: var(--color-yellow-500);
    }
    .border-is-yellow-600 {
      border-inline-start-color: var(--color-yellow-600);
    }
    .border-is-yellow-700 {
      border-inline-start-color: var(--color-yellow-700);
    }
    .border-is-yellow-800 {
      border-inline-start-color: var(--color-yellow-800);
    }
    .border-is-yellow-900 {
      border-inline-start-color: var(--color-yellow-900);
    }
    .border-ie-black {
      border-inline-end-color: var(--color-black);
    }
    .border-ie-blue-50 {
      border-inline-end-color: var(--color-blue-50);
    }
    .border-ie-blue-100 {
      border-inline-end-color: var(--color-blue-100);
    }
    .border-ie-blue-200 {
      border-inline-end-color: var(--color-blue-200);
    }
    .border-ie-blue-300 {
      border-inline-end-color: var(--color-blue-300);
    }
    .border-ie-blue-400 {
      border-inline-end-color: var(--color-blue-400);
    }
    .border-ie-blue-500 {
      border-inline-end-color: var(--color-blue-500);
    }
    .border-ie-blue-600 {
      border-inline-end-color: var(--color-blue-600);
    }
    .border-ie-blue-700 {
      border-inline-end-color: var(--color-blue-700);
    }
    .border-ie-blue-800 {
      border-inline-end-color: var(--color-blue-800);
    }
    .border-ie-blue-900 {
      border-inline-end-color: var(--color-blue-900);
    }
    .border-ie-current {
      border-inline-end-color: currentColor;
    }
    .border-ie-gray-50 {
      border-inline-end-color: var(--color-gray-50);
    }
    .border-ie-gray-100 {
      border-inline-end-color: var(--color-gray-100);
    }
    .border-ie-gray-200 {
      border-inline-end-color: var(--color-gray-200);
    }
    .border-ie-gray-300 {
      border-inline-end-color: var(--color-gray-300);
    }
    .border-ie-gray-400 {
      border-inline-end-color: var(--color-gray-400);
    }
    .border-ie-gray-500 {
      border-inline-end-color: var(--color-gray-500);
    }
    .border-ie-gray-600 {
      border-inline-end-color: var(--color-gray-600);
    }
    .border-ie-gray-700 {
      border-inline-end-color: var(--color-gray-700);
    }
    .border-ie-gray-800 {
      border-inline-end-color: var(--color-gray-800);
    }
    .border-ie-gray-900 {
      border-inline-end-color: var(--color-gray-900);
    }
    .border-ie-green-50 {
      border-inline-end-color: var(--color-green-50);
    }
    .border-ie-green-100 {
      border-inline-end-color: var(--color-green-100);
    }
    .border-ie-green-200 {
      border-inline-end-color: var(--color-green-200);
    }
    .border-ie-green-300 {
      border-inline-end-color: var(--color-green-300);
    }
    .border-ie-green-400 {
      border-inline-end-color: var(--color-green-400);
    }
    .border-ie-green-500 {
      border-inline-end-color: var(--color-green-500);
    }
    .border-ie-green-600 {
      border-inline-end-color: var(--color-green-600);
    }
    .border-ie-green-700 {
      border-inline-end-color: var(--color-green-700);
    }
    .border-ie-green-800 {
      border-inline-end-color: var(--color-green-800);
    }
    .border-ie-green-900 {
      border-inline-end-color: var(--color-green-900);
    }
    .border-ie-indigo-50 {
      border-inline-end-color: var(--color-indigo-50);
    }
    .border-ie-indigo-100 {
      border-inline-end-color: var(--color-indigo-100);
    }
    .border-ie-indigo-200 {
      border-inline-end-color: var(--color-indigo-200);
    }
    .border-ie-indigo-300 {
      border-inline-end-color: var(--color-indigo-300);
    }
    .border-ie-indigo-400 {
      border-inline-end-color: var(--color-indigo-400);
    }
    .border-ie-indigo-500 {
      border-inline-end-color: var(--color-indigo-500);
    }
    .border-ie-indigo-600 {
      border-inline-end-color: var(--color-indigo-600);
    }
    .border-ie-indigo-700 {
      border-inline-end-color: var(--color-indigo-700);
    }
    .border-ie-indigo-800 {
      border-inline-end-color: var(--color-indigo-800);
    }
    .border-ie-indigo-900 {
      border-inline-end-color: var(--color-indigo-900);
    }
    .border-ie-inherit {
      border-inline-end-color: inherit;
    }
    .border-ie-pink-50 {
      border-inline-end-color: var(--color-pink-50);
    }
    .border-ie-pink-100 {
      border-inline-end-color: var(--color-pink-100);
    }
    .border-ie-pink-200 {
      border-inline-end-color: var(--color-pink-200);
    }
    .border-ie-pink-300 {
      border-inline-end-color: var(--color-pink-300);
    }
    .border-ie-pink-400 {
      border-inline-end-color: var(--color-pink-400);
    }
    .border-ie-pink-500 {
      border-inline-end-color: var(--color-pink-500);
    }
    .border-ie-pink-600 {
      border-inline-end-color: var(--color-pink-600);
    }
    .border-ie-pink-700 {
      border-inline-end-color: var(--color-pink-700);
    }
    .border-ie-pink-800 {
      border-inline-end-color: var(--color-pink-800);
    }
    .border-ie-pink-900 {
      border-inline-end-color: var(--color-pink-900);
    }
    .border-ie-purple-50 {
      border-inline-end-color: var(--color-purple-50);
    }
    .border-ie-purple-100 {
      border-inline-end-color: var(--color-purple-100);
    }
    .border-ie-purple-200 {
      border-inline-end-color: var(--color-purple-200);
    }
    .border-ie-purple-300 {
      border-inline-end-color: var(--color-purple-300);
    }
    .border-ie-purple-400 {
      border-inline-end-color: var(--color-purple-400);
    }
    .border-ie-purple-500 {
      border-inline-end-color: var(--color-purple-500);
    }
    .border-ie-purple-600 {
      border-inline-end-color: var(--color-purple-600);
    }
    .border-ie-purple-700 {
      border-inline-end-color: var(--color-purple-700);
    }
    .border-ie-purple-800 {
      border-inline-end-color: var(--color-purple-800);
    }
    .border-ie-purple-900 {
      border-inline-end-color: var(--color-purple-900);
    }
    .border-ie-red-50 {
      border-inline-end-color: var(--color-red-50);
    }
    .border-ie-red-100 {
      border-inline-end-color: var(--color-red-100);
    }
    .border-ie-red-200 {
      border-inline-end-color: var(--color-red-200);
    }
    .border-ie-red-300 {
      border-inline-end-color: var(--color-red-300);
    }
    .border-ie-red-400 {
      border-inline-end-color: var(--color-red-400);
    }
    .border-ie-red-500 {
      border-inline-end-color: var(--color-red-500);
    }
    .border-ie-red-600 {
      border-inline-end-color: var(--color-red-600);
    }
    .border-ie-red-700 {
      border-inline-end-color: var(--color-red-700);
    }
    .border-ie-red-800 {
      border-inline-end-color: var(--color-red-800);
    }
    .border-ie-red-900 {
      border-inline-end-color: var(--color-red-900);
    }
    .border-ie-transparent {
      border-inline-end-color: transparent;
    }
    .border-ie-white {
      border-inline-end-color: var(--color-white);
    }
    .border-ie-yellow-50 {
      border-inline-end-color: var(--color-yellow-50);
    }
    .border-ie-yellow-100 {
      border-inline-end-color: var(--color-yellow-100);
    }
    .border-ie-yellow-200 {
      border-inline-end-color: var(--color-yellow-200);
    }
    .border-ie-yellow-300 {
      border-inline-end-color: var(--color-yellow-300);
    }
    .border-ie-yellow-400 {
      border-inline-end-color: var(--color-yellow-400);
    }
    .border-ie-yellow-500 {
      border-inline-end-color: var(--color-yellow-500);
    }
    .border-ie-yellow-600 {
      border-inline-end-color: var(--color-yellow-600);
    }
    .border-ie-yellow-700 {
      border-inline-end-color: var(--color-yellow-700);
    }
    .border-ie-yellow-800 {
      border-inline-end-color: var(--color-yellow-800);
    }
    .border-ie-yellow-900 {
      border-inline-end-color: var(--color-yellow-900);
    }
    .border-lb-black {
      border-block-start-color: var(--color-black);
      border-block-end-color: var(--color-black);
    }
    .border-lb-current {
      border-block-start-color: currentColor;
      border-block-end-color: currentColor;
    }
    .border-lb-gray-50 {
      border-block-start-color: var(--color-gray-50);
      border-block-end-color: var(--color-gray-50);
    }
    .border-lb-gray-100 {
      border-block-start-color: var(--color-gray-100);
      border-block-end-color: var(--color-gray-100);
    }
    .border-lb-gray-200 {
      border-block-start-color: var(--color-gray-200);
      border-block-end-color: var(--color-gray-200);
    }
    .border-lb-gray-300 {
      border-block-start-color: var(--color-gray-300);
      border-block-end-color: var(--color-gray-300);
    }
    .border-lb-gray-400 {
      border-block-start-color: var(--color-gray-400);
      border-block-end-color: var(--color-gray-400);
    }
    .border-lb-gray-500 {
      border-block-start-color: var(--color-gray-500);
      border-block-end-color: var(--color-gray-500);
    }
    .border-lb-gray-600 {
      border-block-start-color: var(--color-gray-600);
      border-block-end-color: var(--color-gray-600);
    }
    .border-lb-gray-700 {
      border-block-start-color: var(--color-gray-700);
      border-block-end-color: var(--color-gray-700);
    }
    .border-lb-gray-800 {
      border-block-start-color: var(--color-gray-800);
      border-block-end-color: var(--color-gray-800);
    }
    .border-lb-gray-900 {
      border-block-start-color: var(--color-gray-900);
      border-block-end-color: var(--color-gray-900);
    }
    .border-lb-inherit {
      border-block-start-color: inherit;
      border-block-end-color: inherit;
    }
    .border-lb-transparent {
      border-block-start-color: transparent;
      border-block-end-color: transparent;
    }
    .border-lb-white {
      border-block-start-color: var(--color-white);
      border-block-end-color: var(--color-white);
    }
    .\\!border-bs-black {
      border-block-start-color: var(--color-black) !important;
    }
    .border-be-black {
      border-block-end-color: var(--color-black);
    }
    .border-be-blue-50 {
      border-block-end-color: var(--color-blue-50);
    }
    .border-be-blue-100 {
      border-block-end-color: var(--color-blue-100);
    }
    .border-be-blue-200 {
      border-block-end-color: var(--color-blue-200);
    }
    .border-be-blue-300 {
      border-block-end-color: var(--color-blue-300);
    }
    .border-be-blue-400 {
      border-block-end-color: var(--color-blue-400);
    }
    .border-be-blue-500 {
      border-block-end-color: var(--color-blue-500);
    }
    .border-be-blue-600 {
      border-block-end-color: var(--color-blue-600);
    }
    .border-be-blue-700 {
      border-block-end-color: var(--color-blue-700);
    }
    .border-be-blue-800 {
      border-block-end-color: var(--color-blue-800);
    }
    .border-be-blue-900 {
      border-block-end-color: var(--color-blue-900);
    }
    .border-be-current {
      border-block-end-color: currentColor;
    }
    .border-be-gray-50 {
      border-block-end-color: var(--color-gray-50);
    }
    .border-be-gray-100 {
      border-block-end-color: var(--color-gray-100);
    }
    .border-be-gray-200 {
      border-block-end-color: var(--color-gray-200);
    }
    .border-be-gray-300 {
      border-block-end-color: var(--color-gray-300);
    }
    .border-be-gray-400 {
      border-block-end-color: var(--color-gray-400);
    }
    .border-be-gray-500 {
      border-block-end-color: var(--color-gray-500);
    }
    .border-be-gray-600 {
      border-block-end-color: var(--color-gray-600);
    }
    .border-be-gray-700 {
      border-block-end-color: var(--color-gray-700);
    }
    .border-be-gray-800 {
      border-block-end-color: var(--color-gray-800);
    }
    .border-be-gray-900 {
      border-block-end-color: var(--color-gray-900);
    }
    .border-be-green-50 {
      border-block-end-color: var(--color-green-50);
    }
    .border-be-green-100 {
      border-block-end-color: var(--color-green-100);
    }
    .border-be-green-200 {
      border-block-end-color: var(--color-green-200);
    }
    .border-be-green-300 {
      border-block-end-color: var(--color-green-300);
    }
    .border-be-green-400 {
      border-block-end-color: var(--color-green-400);
    }
    .border-be-green-500 {
      border-block-end-color: var(--color-green-500);
    }
    .border-be-green-600 {
      border-block-end-color: var(--color-green-600);
    }
    .border-be-green-700 {
      border-block-end-color: var(--color-green-700);
    }
    .border-be-green-800 {
      border-block-end-color: var(--color-green-800);
    }
    .border-be-green-900 {
      border-block-end-color: var(--color-green-900);
    }
    .border-be-indigo-50 {
      border-block-end-color: var(--color-indigo-50);
    }
    .border-be-indigo-100 {
      border-block-end-color: var(--color-indigo-100);
    }
    .border-be-indigo-200 {
      border-block-end-color: var(--color-indigo-200);
    }
    .border-be-indigo-300 {
      border-block-end-color: var(--color-indigo-300);
    }
    .border-be-indigo-400 {
      border-block-end-color: var(--color-indigo-400);
    }
    .border-be-indigo-500 {
      border-block-end-color: var(--color-indigo-500);
    }
    .border-be-indigo-600 {
      border-block-end-color: var(--color-indigo-600);
    }
    .border-be-indigo-700 {
      border-block-end-color: var(--color-indigo-700);
    }
    .border-be-indigo-800 {
      border-block-end-color: var(--color-indigo-800);
    }
    .border-be-indigo-900 {
      border-block-end-color: var(--color-indigo-900);
    }
    .border-be-inherit {
      border-block-end-color: inherit;
    }
    .border-be-pink-50 {
      border-block-end-color: var(--color-pink-50);
    }
    .border-be-pink-100 {
      border-block-end-color: var(--color-pink-100);
    }
    .border-be-pink-200 {
      border-block-end-color: var(--color-pink-200);
    }
    .border-be-pink-300 {
      border-block-end-color: var(--color-pink-300);
    }
    .border-be-pink-400 {
      border-block-end-color: var(--color-pink-400);
    }
    .border-be-pink-500 {
      border-block-end-color: var(--color-pink-500);
    }
    .border-be-pink-600 {
      border-block-end-color: var(--color-pink-600);
    }
    .border-be-pink-700 {
      border-block-end-color: var(--color-pink-700);
    }
    .border-be-pink-800 {
      border-block-end-color: var(--color-pink-800);
    }
    .border-be-pink-900 {
      border-block-end-color: var(--color-pink-900);
    }
    .border-be-purple-50 {
      border-block-end-color: var(--color-purple-50);
    }
    .border-be-purple-100 {
      border-block-end-color: var(--color-purple-100);
    }
    .border-be-purple-200 {
      border-block-end-color: var(--color-purple-200);
    }
    .border-be-purple-300 {
      border-block-end-color: var(--color-purple-300);
    }
    .border-be-purple-400 {
      border-block-end-color: var(--color-purple-400);
    }
    .border-be-purple-500 {
      border-block-end-color: var(--color-purple-500);
    }
    .border-be-purple-600 {
      border-block-end-color: var(--color-purple-600);
    }
    .border-be-purple-700 {
      border-block-end-color: var(--color-purple-700);
    }
    .border-be-purple-800 {
      border-block-end-color: var(--color-purple-800);
    }
    .border-be-purple-900 {
      border-block-end-color: var(--color-purple-900);
    }
    .border-be-red-50 {
      border-block-end-color: var(--color-red-50);
    }
    .border-be-red-100 {
      border-block-end-color: var(--color-red-100);
    }
    .border-be-red-200 {
      border-block-end-color: var(--color-red-200);
    }
    .border-be-red-300 {
      border-block-end-color: var(--color-red-300);
    }
    .border-be-red-400 {
      border-block-end-color: var(--color-red-400);
    }
    .border-be-red-500 {
      border-block-end-color: var(--color-red-500);
    }
    .border-be-red-600 {
      border-block-end-color: var(--color-red-600);
    }
    .border-be-red-700 {
      border-block-end-color: var(--color-red-700);
    }
    .border-be-red-800 {
      border-block-end-color: var(--color-red-800);
    }
    .border-be-red-900 {
      border-block-end-color: var(--color-red-900);
    }
    .border-be-transparent {
      border-block-end-color: transparent;
    }
    .border-be-white {
      border-block-end-color: var(--color-white);
    }
    .border-be-yellow-50 {
      border-block-end-color: var(--color-yellow-50);
    }
    .border-be-yellow-100 {
      border-block-end-color: var(--color-yellow-100);
    }
    .border-be-yellow-200 {
      border-block-end-color: var(--color-yellow-200);
    }
    .border-be-yellow-300 {
      border-block-end-color: var(--color-yellow-300);
    }
    .border-be-yellow-400 {
      border-block-end-color: var(--color-yellow-400);
    }
    .border-be-yellow-500 {
      border-block-end-color: var(--color-yellow-500);
    }
    .border-be-yellow-600 {
      border-block-end-color: var(--color-yellow-600);
    }
    .border-be-yellow-700 {
      border-block-end-color: var(--color-yellow-700);
    }
    .border-be-yellow-800 {
      border-block-end-color: var(--color-yellow-800);
    }
    .border-be-yellow-900 {
      border-block-end-color: var(--color-yellow-900);
    }
    .border-bs-black {
      border-block-start-color: var(--color-black);
    }
    .border-bs-blue-50 {
      border-block-start-color: var(--color-blue-50);
    }
    .border-bs-blue-100 {
      border-block-start-color: var(--color-blue-100);
    }
    .border-bs-blue-200 {
      border-block-start-color: var(--color-blue-200);
    }
    .border-bs-blue-300 {
      border-block-start-color: var(--color-blue-300);
    }
    .border-bs-blue-400 {
      border-block-start-color: var(--color-blue-400);
    }
    .border-bs-blue-500 {
      border-block-start-color: var(--color-blue-500);
    }
    .border-bs-blue-600 {
      border-block-start-color: var(--color-blue-600);
    }
    .border-bs-blue-700 {
      border-block-start-color: var(--color-blue-700);
    }
    .border-bs-blue-800 {
      border-block-start-color: var(--color-blue-800);
    }
    .border-bs-blue-900 {
      border-block-start-color: var(--color-blue-900);
    }
    .border-bs-current {
      border-block-start-color: currentColor;
    }
    .border-bs-gray-50 {
      border-block-start-color: var(--color-gray-50);
    }
    .border-bs-gray-100 {
      border-block-start-color: var(--color-gray-100);
    }
    .border-bs-gray-200 {
      border-block-start-color: var(--color-gray-200);
    }
    .border-bs-gray-300 {
      border-block-start-color: var(--color-gray-300);
    }
    .border-bs-gray-400 {
      border-block-start-color: var(--color-gray-400);
    }
    .border-bs-gray-500 {
      border-block-start-color: var(--color-gray-500);
    }
    .border-bs-gray-600 {
      border-block-start-color: var(--color-gray-600);
    }
    .border-bs-gray-700 {
      border-block-start-color: var(--color-gray-700);
    }
    .border-bs-gray-800 {
      border-block-start-color: var(--color-gray-800);
    }
    .border-bs-gray-900 {
      border-block-start-color: var(--color-gray-900);
    }
    .border-bs-green-50 {
      border-block-start-color: var(--color-green-50);
    }
    .border-bs-green-100 {
      border-block-start-color: var(--color-green-100);
    }
    .border-bs-green-200 {
      border-block-start-color: var(--color-green-200);
    }
    .border-bs-green-300 {
      border-block-start-color: var(--color-green-300);
    }
    .border-bs-green-400 {
      border-block-start-color: var(--color-green-400);
    }
    .border-bs-green-500 {
      border-block-start-color: var(--color-green-500);
    }
    .border-bs-green-600 {
      border-block-start-color: var(--color-green-600);
    }
    .border-bs-green-700 {
      border-block-start-color: var(--color-green-700);
    }
    .border-bs-green-800 {
      border-block-start-color: var(--color-green-800);
    }
    .border-bs-green-900 {
      border-block-start-color: var(--color-green-900);
    }
    .border-bs-indigo-50 {
      border-block-start-color: var(--color-indigo-50);
    }
    .border-bs-indigo-100 {
      border-block-start-color: var(--color-indigo-100);
    }
    .border-bs-indigo-200 {
      border-block-start-color: var(--color-indigo-200);
    }
    .border-bs-indigo-300 {
      border-block-start-color: var(--color-indigo-300);
    }
    .border-bs-indigo-400 {
      border-block-start-color: var(--color-indigo-400);
    }
    .border-bs-indigo-500 {
      border-block-start-color: var(--color-indigo-500);
    }
    .border-bs-indigo-600 {
      border-block-start-color: var(--color-indigo-600);
    }
    .border-bs-indigo-700 {
      border-block-start-color: var(--color-indigo-700);
    }
    .border-bs-indigo-800 {
      border-block-start-color: var(--color-indigo-800);
    }
    .border-bs-indigo-900 {
      border-block-start-color: var(--color-indigo-900);
    }
    .border-bs-inherit {
      border-block-start-color: inherit;
    }
    .border-bs-pink-50 {
      border-block-start-color: var(--color-pink-50);
    }
    .border-bs-pink-100 {
      border-block-start-color: var(--color-pink-100);
    }
    .border-bs-pink-200 {
      border-block-start-color: var(--color-pink-200);
    }
    .border-bs-pink-300 {
      border-block-start-color: var(--color-pink-300);
    }
    .border-bs-pink-400 {
      border-block-start-color: var(--color-pink-400);
    }
    .border-bs-pink-500 {
      border-block-start-color: var(--color-pink-500);
    }
    .border-bs-pink-600 {
      border-block-start-color: var(--color-pink-600);
    }
    .border-bs-pink-700 {
      border-block-start-color: var(--color-pink-700);
    }
    .border-bs-pink-800 {
      border-block-start-color: var(--color-pink-800);
    }
    .border-bs-pink-900 {
      border-block-start-color: var(--color-pink-900);
    }
    .border-bs-purple-50 {
      border-block-start-color: var(--color-purple-50);
    }
    .border-bs-purple-100 {
      border-block-start-color: var(--color-purple-100);
    }
    .border-bs-purple-200 {
      border-block-start-color: var(--color-purple-200);
    }
    .border-bs-purple-300 {
      border-block-start-color: var(--color-purple-300);
    }
    .border-bs-purple-400 {
      border-block-start-color: var(--color-purple-400);
    }
    .border-bs-purple-500 {
      border-block-start-color: var(--color-purple-500);
    }
    .border-bs-purple-600 {
      border-block-start-color: var(--color-purple-600);
    }
    .border-bs-purple-700 {
      border-block-start-color: var(--color-purple-700);
    }
    .border-bs-purple-800 {
      border-block-start-color: var(--color-purple-800);
    }
    .border-bs-purple-900 {
      border-block-start-color: var(--color-purple-900);
    }
    .border-bs-red-50 {
      border-block-start-color: var(--color-red-50);
    }
    .border-bs-red-100 {
      border-block-start-color: var(--color-red-100);
    }
    .border-bs-red-200 {
      border-block-start-color: var(--color-red-200);
    }
    .border-bs-red-300 {
      border-block-start-color: var(--color-red-300);
    }
    .border-bs-red-400 {
      border-block-start-color: var(--color-red-400);
    }
    .border-bs-red-500 {
      border-block-start-color: var(--color-red-500);
    }
    .border-bs-red-600 {
      border-block-start-color: var(--color-red-600);
    }
    .border-bs-red-700 {
      border-block-start-color: var(--color-red-700);
    }
    .border-bs-red-800 {
      border-block-start-color: var(--color-red-800);
    }
    .border-bs-red-900 {
      border-block-start-color: var(--color-red-900);
    }
    .border-bs-transparent {
      border-block-start-color: transparent;
    }
    .border-bs-white {
      border-block-start-color: var(--color-white);
    }
    .border-bs-yellow-50 {
      border-block-start-color: var(--color-yellow-50);
    }
    .border-bs-yellow-100 {
      border-block-start-color: var(--color-yellow-100);
    }
    .border-bs-yellow-200 {
      border-block-start-color: var(--color-yellow-200);
    }
    .border-bs-yellow-300 {
      border-block-start-color: var(--color-yellow-300);
    }
    .border-bs-yellow-400 {
      border-block-start-color: var(--color-yellow-400);
    }
    .border-bs-yellow-500 {
      border-block-start-color: var(--color-yellow-500);
    }
    .border-bs-yellow-600 {
      border-block-start-color: var(--color-yellow-600);
    }
    .border-bs-yellow-700 {
      border-block-start-color: var(--color-yellow-700);
    }
    .border-bs-yellow-800 {
      border-block-start-color: var(--color-yellow-800);
    }
    .border-bs-yellow-900 {
      border-block-start-color: var(--color-yellow-900);
    }
    .peer-checked\\:border-bs-black {
      &:is(:where(.peer):checked ~ *) {
        border-block-start-color: var(--color-black);
      }
    }
    .before\\:border-bs-black {
      &::before {
        content: var(--tw-content);
        border-block-start-color: var(--color-black);
      }
    }
    .only\\:border-bs-black {
      &:only-child {
        border-block-start-color: var(--color-black);
      }
    }
    .disabled\\:border-bs-black {
      &:disabled {
        border-block-start-color: var(--color-black);
      }
    }
    .md\\:disabled\\:focus\\:hover\\:border-bs-black {
      @media (width >= 48rem) {
        &:disabled {
          &:focus {
            &:hover {
              @media (hover: hover) {
                border-block-start-color: var(--color-black);
              }
            }
          }
        }
      }
    }
    .dark\\:border-is-black {
      @media (prefers-color-scheme: dark) {
        border-inline-start-color: var(--color-black);
      }
    }
    .dark\\:border-ie-black {
      @media (prefers-color-scheme: dark) {
        border-inline-end-color: var(--color-black);
      }
    }
    .dark\\:border-be-black {
      @media (prefers-color-scheme: dark) {
        border-block-end-color: var(--color-black);
      }
    }
    .dark\\:border-bs-black {
      @media (prefers-color-scheme: dark) {
        border-block-start-color: var(--color-black);
      }
    }
    .md\\:dark\\:disabled\\:focus\\:hover\\:border-bs-black {
      @media (width >= 48rem) {
        @media (prefers-color-scheme: dark) {
          &:disabled {
            &:focus {
              &:hover {
                @media (hover: hover) {
                  border-block-start-color: var(--color-black);
                }
              }
            }
          }
        }
      }
    }
  }
  @property --tw-content {
    syntax: "*";
    initial-value: "";
    inherits: false;
  }
`;
