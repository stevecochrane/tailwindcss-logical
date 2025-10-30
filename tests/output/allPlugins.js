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
    .-mli-theme-variable {
      margin-inline: calc(calc(var(--spacing) * 35) * -1);
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
    .mli-theme-variable {
      margin-inline: calc(var(--spacing) * 35);
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
    .-mlb-theme-variable {
      margin-block: calc(calc(var(--spacing) * 35) * -1);
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
    .mlb-theme-variable {
      margin-block: calc(var(--spacing) * 35);
    }
    .-space-i-0 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 0) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 0) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-0\\.5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 0.5) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 0.5) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-1 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 1) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 1) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-1\\.5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 1.5) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 1.5) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-2 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 2) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 2) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-2\\.5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 2.5) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 2.5) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-3 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 3) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 3) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-3\\.5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 3.5) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 3.5) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-4 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 4) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 4) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 5) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 5) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-6 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 6) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 6) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-7 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 7) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 7) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-8 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 8) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 8) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-9 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 9) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 9) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-10 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 10) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 10) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-11 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 11) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 11) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-12 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 12) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 12) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-14 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 14) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 14) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-16 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 16) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 16) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-20 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 20) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 20) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-24 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 24) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 24) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-28 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 28) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 28) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-32 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 32) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 32) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-36 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 36) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 36) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-40 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 40) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 40) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-44 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 44) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 44) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-48 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 48) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 48) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-52 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 52) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 52) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-56 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 56) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 56) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-60 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 60) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 60) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-64 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 64) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 64) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-72 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 72) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 72) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-80 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 80) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 80) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-96 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(calc(var(--spacing) * 96) * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(calc(var(--spacing) * 96) * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .-space-i-px {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(1px * -1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(1px * -1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-0 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 0) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 0) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-0\\.5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 0.5) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 0.5) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-1 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 1) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-1\\.5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-2 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 2) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-2\\.5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 2.5) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-3 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 3) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-3\\.5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 3.5) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 3.5) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-4 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 4) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-5 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 5) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 5) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-6 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 6) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-7 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 7) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 7) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-8 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 8) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-9 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 9) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 9) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-10 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 10) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 10) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-11 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 11) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 11) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-12 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 12) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 12) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-14 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 14) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 14) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-16 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 16) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 16) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-20 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 20) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 20) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-24 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 24) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 24) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-28 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 28) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 28) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-32 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 32) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 32) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-36 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 36) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 36) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-40 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 40) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 40) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-44 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 44) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 44) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-48 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 48) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 48) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-52 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 52) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 52) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-56 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 56) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 56) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-60 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 60) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 60) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-64 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 64) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 64) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-72 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 72) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 72) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-80 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 80) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 80) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-96 {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(calc(var(--spacing) * 96) * var(--tw-space-i-reverse));
        margin-inline-end: calc(calc(var(--spacing) * 96) * calc(1 - var(--tw-space-i-reverse)));
      }
    }
    .space-i-px {
      & > :not(:last-child) {
        --tw-space-i-reverse: 0;
        margin-inline-start: calc(1px * var(--tw-space-i-reverse));
        margin-inline-end: calc(1px * calc(1 - var(--tw-space-i-reverse)));
      }
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
    .-mis-theme-variable {
      margin-inline-start: calc(calc(var(--spacing) * 35) * -1);
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
    .mis-theme-variable {
      margin-inline-start: calc(var(--spacing) * 35);
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
    .-mie-theme-variable {
      margin-inline-end: calc(calc(var(--spacing) * 35) * -1);
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
    .mie-theme-variable {
      margin-inline-end: calc(var(--spacing) * 35);
    }
    .resize-block {
      resize: block;
    }
    .resize-inline {
      resize: inline;
    }
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
    .divide-i {
      & > :not(:last-child) {
        --tw-divide-i-reverse: 0;
        border-inline-start-width: calc(1px * var(--tw-divide-i-reverse));
        border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-i-reverse)));
      }
    }
    .divide-i-0 {
      & > :not(:last-child) {
        --tw-divide-i-reverse: 0;
        border-inline-start-width: calc(0px * var(--tw-divide-i-reverse));
        border-inline-end-width: calc(0px * calc(1 - var(--tw-divide-i-reverse)));
      }
    }
    .divide-i-2 {
      & > :not(:last-child) {
        --tw-divide-i-reverse: 0;
        border-inline-start-width: calc(2px * var(--tw-divide-i-reverse));
        border-inline-end-width: calc(2px * calc(1 - var(--tw-divide-i-reverse)));
      }
    }
    .divide-i-4 {
      & > :not(:last-child) {
        --tw-divide-i-reverse: 0;
        border-inline-start-width: calc(4px * var(--tw-divide-i-reverse));
        border-inline-end-width: calc(4px * calc(1 - var(--tw-divide-i-reverse)));
      }
    }
    .divide-i-8 {
      & > :not(:last-child) {
        --tw-divide-i-reverse: 0;
        border-inline-start-width: calc(8px * var(--tw-divide-i-reverse));
        border-inline-end-width: calc(8px * calc(1 - var(--tw-divide-i-reverse)));
      }
    }
    .border-li {
      border-inline-start-width: 1px;
      border-inline-end-width: 1px;
    }
    .border-li-0 {
      border-inline-start-width: 0px;
      border-inline-end-width: 0px;
    }
    .border-li-2 {
      border-inline-start-width: 2px;
      border-inline-end-width: 2px;
    }
    .border-li-4 {
      border-inline-start-width: 4px;
      border-inline-end-width: 4px;
    }
    .border-li-8 {
      border-inline-start-width: 8px;
      border-inline-end-width: 8px;
    }
    .border-is {
      border-inline-start-width: 1px;
    }
    .border-is-0 {
      border-inline-start-width: 0px;
    }
    .border-is-2 {
      border-inline-start-width: 2px;
    }
    .border-is-4 {
      border-inline-start-width: 4px;
    }
    .border-is-8 {
      border-inline-start-width: 8px;
    }
    .border-ie {
      border-inline-end-width: 1px;
    }
    .border-ie-0 {
      border-inline-end-width: 0px;
    }
    .border-ie-2 {
      border-inline-end-width: 2px;
    }
    .border-ie-4 {
      border-inline-end-width: 4px;
    }
    .border-ie-8 {
      border-inline-end-width: 8px;
    }
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
    .-space-b-0 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 0) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 0) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-0\\.5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 0.5) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 0.5) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-1 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 1) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 1) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-1\\.5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 1.5) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 1.5) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-2 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 2) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 2) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-2\\.5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 2.5) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 2.5) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-3 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 3) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 3) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-3\\.5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 3.5) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 3.5) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-4 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 4) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 4) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 5) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 5) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-6 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 6) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 6) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-7 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 7) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 7) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-8 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 8) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 8) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-9 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 9) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 9) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-10 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 10) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 10) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-11 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 11) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 11) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-12 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 12) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 12) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-14 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 14) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 14) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-16 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 16) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 16) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-20 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 20) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 20) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-24 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 24) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 24) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-28 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 28) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 28) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-32 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 32) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 32) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-36 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 36) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 36) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-40 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 40) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 40) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-44 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 44) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 44) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-48 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 48) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 48) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-52 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 52) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 52) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-56 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 56) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 56) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-60 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 60) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 60) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-64 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 64) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 64) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-72 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 72) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 72) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-80 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 80) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 80) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-96 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(calc(var(--spacing) * 96) * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(calc(var(--spacing) * 96) * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .-space-b-px {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(1px * -1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(1px * -1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .divide-b {
      & > :not(:last-child) {
        --tw-divide-b-reverse: 0;
        border-block-start-width: calc(1px * var(--tw-divide-b-reverse));
        border-block-end-width: calc(1px * calc(1 - var(--tw-divide-b-reverse)));
      }
    }
    .divide-b-0 {
      & > :not(:last-child) {
        --tw-divide-b-reverse: 0;
        border-block-start-width: calc(0px * var(--tw-divide-b-reverse));
        border-block-end-width: calc(0px * calc(1 - var(--tw-divide-b-reverse)));
      }
    }
    .divide-b-2 {
      & > :not(:last-child) {
        --tw-divide-b-reverse: 0;
        border-block-start-width: calc(2px * var(--tw-divide-b-reverse));
        border-block-end-width: calc(2px * calc(1 - var(--tw-divide-b-reverse)));
      }
    }
    .divide-b-4 {
      & > :not(:last-child) {
        --tw-divide-b-reverse: 0;
        border-block-start-width: calc(4px * var(--tw-divide-b-reverse));
        border-block-end-width: calc(4px * calc(1 - var(--tw-divide-b-reverse)));
      }
    }
    .divide-b-8 {
      & > :not(:last-child) {
        --tw-divide-b-reverse: 0;
        border-block-start-width: calc(8px * var(--tw-divide-b-reverse));
        border-block-end-width: calc(8px * calc(1 - var(--tw-divide-b-reverse)));
      }
    }
    .space-b-0 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 0) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 0) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-0\\.5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 0.5) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 0.5) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-1 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 1) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-1\\.5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-2 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-2\\.5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 2.5) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-3 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-3\\.5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 3.5) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 3.5) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-4 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-5 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 5) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 5) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-6 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-7 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 7) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 7) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-8 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 8) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-9 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 9) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 9) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-10 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 10) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 10) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-11 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 11) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 11) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-12 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 12) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 12) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-14 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 14) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 14) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-16 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 16) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 16) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-20 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 20) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 20) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-24 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 24) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 24) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-28 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 28) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 28) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-32 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 32) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 32) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-36 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 36) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 36) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-40 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 40) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 40) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-44 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 44) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 44) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-48 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 48) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 48) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-52 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 52) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 52) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-56 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 56) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 56) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-60 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 60) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 60) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-64 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 64) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 64) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-72 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 72) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 72) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-80 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 80) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 80) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-96 {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(calc(var(--spacing) * 96) * var(--tw-space-b-reverse));
        margin-block-end: calc(calc(var(--spacing) * 96) * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .space-b-px {
      & > :not(:last-child) {
        --tw-space-b-reverse: 0;
        margin-block-start: calc(1px * var(--tw-space-b-reverse));
        margin-block-end: calc(1px * calc(1 - var(--tw-space-b-reverse)));
      }
    }
    .border-lb {
      border-block-start-width: 1px;
      border-block-end-width: 1px;
    }
    .border-lb-0 {
      border-block-start-width: 0px;
      border-block-end-width: 0px;
    }
    .border-lb-2 {
      border-block-start-width: 2px;
      border-block-end-width: 2px;
    }
    .border-lb-4 {
      border-block-start-width: 4px;
      border-block-end-width: 4px;
    }
    .border-lb-8 {
      border-block-start-width: 8px;
      border-block-end-width: 8px;
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
    .-mbe-theme-variable {
      margin-block-end: calc(calc(var(--spacing) * 35) * -1);
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
    .-mbs-theme-variable {
      margin-block-start: calc(calc(var(--spacing) * 35) * -1);
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
    .border-be {
      border-block-end-width: 1px;
    }
    .border-be-0 {
      border-block-end-width: 0px;
    }
    .border-be-2 {
      border-block-end-width: 2px;
    }
    .border-be-4 {
      border-block-end-width: 4px;
    }
    .border-be-8 {
      border-block-end-width: 8px;
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
    .border-bs {
      border-block-start-width: 1px;
    }
    .border-bs-0 {
      border-block-start-width: 0px;
    }
    .border-bs-2 {
      border-block-start-width: 2px;
    }
    .border-bs-4 {
      border-block-start-width: 4px;
    }
    .border-bs-8 {
      border-block-start-width: 8px;
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
    .bs-theme-variable {
      block-size: calc(var(--spacing) * 35);
    }
    .divide-b-reverse {
      & > :not(:last-child) {
        --tw-divide-b-reverse: 1;
      }
    }
    .divide-i-reverse {
      & > :not(:last-child) {
        --tw-divide-i-reverse: 1;
      }
    }
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
      inline-size: calc(1/2 * 100%);
    }
    .is-1\\/3 {
      inline-size: calc(1/3 * 100%);
    }
    .is-1\\/4 {
      inline-size: calc(1/4 * 100%);
    }
    .is-1\\/5 {
      inline-size: calc(1/5 * 100%);
    }
    .is-1\\/6 {
      inline-size: calc(1/6 * 100%);
    }
    .is-1\\/12 {
      inline-size: calc(1/12 * 100%);
    }
    .is-2 {
      inline-size: calc(var(--spacing) * 2);
    }
    .is-2\\.5 {
      inline-size: calc(var(--spacing) * 2.5);
    }
    .is-2\\/3 {
      inline-size: calc(2/3 * 100%);
    }
    .is-2\\/4 {
      inline-size: calc(2/4 * 100%);
    }
    .is-2\\/5 {
      inline-size: calc(2/5 * 100%);
    }
    .is-2\\/6 {
      inline-size: calc(2/6 * 100%);
    }
    .is-2\\/12 {
      inline-size: calc(2/12 * 100%);
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
      inline-size: calc(3/4 * 100%);
    }
    .is-3\\/5 {
      inline-size: calc(3/5 * 100%);
    }
    .is-3\\/6 {
      inline-size: calc(3/6 * 100%);
    }
    .is-3\\/12 {
      inline-size: calc(3/12 * 100%);
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
      inline-size: calc(4/5 * 100%);
    }
    .is-4\\/6 {
      inline-size: calc(4/6 * 100%);
    }
    .is-4\\/12 {
      inline-size: calc(4/12 * 100%);
    }
    .is-4xl {
      inline-size: var(--container-4xl);
    }
    .is-5 {
      inline-size: calc(var(--spacing) * 5);
    }
    .is-5\\/6 {
      inline-size: calc(5/6 * 100%);
    }
    .is-5\\/12 {
      inline-size: calc(5/12 * 100%);
    }
    .is-5xl {
      inline-size: var(--container-5xl);
    }
    .is-6 {
      inline-size: calc(var(--spacing) * 6);
    }
    .is-6\\/12 {
      inline-size: calc(6/12 * 100%);
    }
    .is-6xl {
      inline-size: var(--container-6xl);
    }
    .is-7 {
      inline-size: calc(var(--spacing) * 7);
    }
    .is-7\\/12 {
      inline-size: calc(7/12 * 100%);
    }
    .is-7xl {
      inline-size: var(--container-7xl);
    }
    .is-8 {
      inline-size: calc(var(--spacing) * 8);
    }
    .is-8\\/12 {
      inline-size: calc(8/12 * 100%);
    }
    .is-9 {
      inline-size: calc(var(--spacing) * 9);
    }
    .is-9\\/12 {
      inline-size: calc(9/12 * 100%);
    }
    .is-10 {
      inline-size: calc(var(--spacing) * 10);
    }
    .is-10\\/12 {
      inline-size: calc(10/12 * 100%);
    }
    .is-11 {
      inline-size: calc(var(--spacing) * 11);
    }
    .is-11\\/12 {
      inline-size: calc(11/12 * 100%);
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
    .is-theme-variable {
      inline-size: calc(var(--spacing) * 35);
    }
    .is-xl {
      inline-size: var(--container-xl);
    }
    .is-xs {
      inline-size: var(--container-xs);
    }
    .max-bs-0 {
      max-block-size: calc(var(--spacing) * 0);
    }
    .max-bs-0\\.5 {
      max-block-size: calc(var(--spacing) * 0.5);
    }
    .max-bs-1 {
      max-block-size: calc(var(--spacing) * 1);
    }
    .max-bs-1\\.5 {
      max-block-size: calc(var(--spacing) * 1.5);
    }
    .max-bs-2 {
      max-block-size: calc(var(--spacing) * 2);
    }
    .max-bs-2\\.5 {
      max-block-size: calc(var(--spacing) * 2.5);
    }
    .max-bs-3 {
      max-block-size: calc(var(--spacing) * 3);
    }
    .max-bs-3\\.5 {
      max-block-size: calc(var(--spacing) * 3.5);
    }
    .max-bs-4 {
      max-block-size: calc(var(--spacing) * 4);
    }
    .max-bs-5 {
      max-block-size: calc(var(--spacing) * 5);
    }
    .max-bs-6 {
      max-block-size: calc(var(--spacing) * 6);
    }
    .max-bs-7 {
      max-block-size: calc(var(--spacing) * 7);
    }
    .max-bs-8 {
      max-block-size: calc(var(--spacing) * 8);
    }
    .max-bs-9 {
      max-block-size: calc(var(--spacing) * 9);
    }
    .max-bs-10 {
      max-block-size: calc(var(--spacing) * 10);
    }
    .max-bs-11 {
      max-block-size: calc(var(--spacing) * 11);
    }
    .max-bs-12 {
      max-block-size: calc(var(--spacing) * 12);
    }
    .max-bs-14 {
      max-block-size: calc(var(--spacing) * 14);
    }
    .max-bs-16 {
      max-block-size: calc(var(--spacing) * 16);
    }
    .max-bs-20 {
      max-block-size: calc(var(--spacing) * 20);
    }
    .max-bs-24 {
      max-block-size: calc(var(--spacing) * 24);
    }
    .max-bs-28 {
      max-block-size: calc(var(--spacing) * 28);
    }
    .max-bs-32 {
      max-block-size: calc(var(--spacing) * 32);
    }
    .max-bs-36 {
      max-block-size: calc(var(--spacing) * 36);
    }
    .max-bs-40 {
      max-block-size: calc(var(--spacing) * 40);
    }
    .max-bs-44 {
      max-block-size: calc(var(--spacing) * 44);
    }
    .max-bs-48 {
      max-block-size: calc(var(--spacing) * 48);
    }
    .max-bs-52 {
      max-block-size: calc(var(--spacing) * 52);
    }
    .max-bs-56 {
      max-block-size: calc(var(--spacing) * 56);
    }
    .max-bs-60 {
      max-block-size: calc(var(--spacing) * 60);
    }
    .max-bs-64 {
      max-block-size: calc(var(--spacing) * 64);
    }
    .max-bs-72 {
      max-block-size: calc(var(--spacing) * 72);
    }
    .max-bs-80 {
      max-block-size: calc(var(--spacing) * 80);
    }
    .max-bs-96 {
      max-block-size: calc(var(--spacing) * 96);
    }
    .max-bs-dvh {
      max-block-size: 100dvh;
    }
    .max-bs-fit {
      max-block-size: fit-content;
    }
    .max-bs-full {
      max-block-size: 100%;
    }
    .max-bs-lvh {
      max-block-size: 100lvh;
    }
    .max-bs-max {
      max-block-size: max-content;
    }
    .max-bs-min {
      max-block-size: min-content;
    }
    .max-bs-none {
      max-block-size: none;
    }
    .max-bs-px {
      max-block-size: 1px;
    }
    .max-bs-screen {
      max-block-size: 100vh;
    }
    .max-bs-svh {
      max-block-size: 100svh;
    }
    .max-bs-theme-variable {
      max-block-size: calc(var(--spacing) * 35);
    }
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
    .max-is-theme-variable {
      max-inline-size: calc(var(--spacing) * 35);
    }
    .max-is-xl {
      max-inline-size: var(--container-xl);
    }
    .max-is-xs {
      max-inline-size: var(--container-xs);
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
    .mbe-theme-variable {
      margin-block-end: calc(var(--spacing) * 35);
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
    .mbs-theme-variable {
      margin-block-start: calc(var(--spacing) * 35);
    }
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
    .min-bs-theme-variable {
      min-block-size: calc(var(--spacing) * 35);
    }
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
    .overscroll-b-auto {
      overscroll-behavior-block: auto;
    }
    .overscroll-b-contain {
      overscroll-behavior-block: contain;
    }
    .overscroll-b-none {
      overscroll-behavior-block: none;
    }
    .overscroll-i-auto {
      overscroll-behavior-inline: auto;
    }
    .overscroll-i-contain {
      overscroll-behavior-inline: contain;
    }
    .overscroll-i-none {
      overscroll-behavior-inline: none;
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
    .space-b-reverse {
      & > :not(:last-child) {
        --tw-space-b-reverse: 1;
      }
    }
    .space-i-reverse {
      & > :not(:last-child) {
        --tw-space-i-reverse: 1;
      }
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
