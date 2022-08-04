import { css } from '@emotion/react';

const login__btn = css`
  padding: 25px;
  border: none;
  max-width: 180px;
  border-radius: 15px;
`;

const login__container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 800px;
  background-color: lightgray;
`;
const styles = {
  login__btn,
  login__container,
};

export default styles;
