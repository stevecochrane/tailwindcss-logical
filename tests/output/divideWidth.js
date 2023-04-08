module.exports = `
  .divide-b > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-b-reverse: 0;
    border-block-start-width: calc(1px * calc(1 - var(--tw-divide-b-reverse)));
    border-block-end-width: calc(1px * var(--tw-divide-b-reverse))
  }
  .divide-b-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-b-reverse: 0;
    border-block-start-width: calc(0px * calc(1 - var(--tw-divide-b-reverse)));
    border-block-end-width: calc(0px * var(--tw-divide-b-reverse))
  }
  .divide-b-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-b-reverse: 0;
    border-block-start-width: calc(2px * calc(1 - var(--tw-divide-b-reverse)));
    border-block-end-width: calc(2px * var(--tw-divide-b-reverse))
  }
  .divide-b-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-b-reverse: 0;
    border-block-start-width: calc(4px * calc(1 - var(--tw-divide-b-reverse)));
    border-block-end-width: calc(4px * var(--tw-divide-b-reverse))
  }
  .divide-b-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-b-reverse: 0;
    border-block-start-width: calc(8px * calc(1 - var(--tw-divide-b-reverse)));
    border-block-end-width: calc(8px * var(--tw-divide-b-reverse))
  }
  .divide-i > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-i-reverse: 0;
    border-inline-start-width: calc(1px * calc(1 - var(--tw-divide-i-reverse)));
    border-inline-end-width: calc(1px * var(--tw-divide-i-reverse))
  }
  .divide-i-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-i-reverse: 0;
    border-inline-start-width: calc(0px * calc(1 - var(--tw-divide-i-reverse)));
    border-inline-end-width: calc(0px * var(--tw-divide-i-reverse))
  }
  .divide-i-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-i-reverse: 0;
    border-inline-start-width: calc(2px * calc(1 - var(--tw-divide-i-reverse)));
    border-inline-end-width: calc(2px * var(--tw-divide-i-reverse))
  }
  .divide-i-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-i-reverse: 0;
    border-inline-start-width: calc(4px * calc(1 - var(--tw-divide-i-reverse)));
    border-inline-end-width: calc(4px * var(--tw-divide-i-reverse))
  }
  .divide-i-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-i-reverse: 0;
    border-inline-start-width: calc(8px * calc(1 - var(--tw-divide-i-reverse)));
    border-inline-end-width: calc(8px * var(--tw-divide-i-reverse))
  }
`;
