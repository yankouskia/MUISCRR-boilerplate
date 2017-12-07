import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    background: #f4f4f4;
    margin: 0;
  }

  article,
  aside,
  footer,
  header,
  nav,
  section {
    display: block;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
  }
`;
