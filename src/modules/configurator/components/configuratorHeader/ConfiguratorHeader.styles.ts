import { css } from '@emotion/react';

const container = css`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  background-color: white;
  a {
    margin: 0 44px;
    text-decoration: none;
  }
`;

const header__nav = css`
  display: flex;
  gap: 40px;
`;

const delete__config = css`
  color: red;
`;

const styles = {
  container,
  header__nav,
  delete__config,
};

export default styles;
