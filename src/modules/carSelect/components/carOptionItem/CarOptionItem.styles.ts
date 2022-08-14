import { css } from '@emotion/react';

const container = css`
  margin-right: 20px;
  overflow: hidden;
  max-width: 548px;
  background-color: white;

  h1 {
    text-transform: uppercase;
    margin: 24px;
  }

  p {
    margin: 24px;
    font-size: 28px;
    color: gray;
    font-weight: bold;
  }

  button {
    margin: 24px;
  }
`;

const option__img = css`
  position: relative;
  max-width: 1204px;
  right: 520px;
`;
const config__btn = css`
  button {
    padding: 12px 20px;
    color: white;
    background-color: #1e1ed2;
    border: none;
  }
`;

const styles = {
  container,
  option__img,
  config__btn,
};

export default styles;
