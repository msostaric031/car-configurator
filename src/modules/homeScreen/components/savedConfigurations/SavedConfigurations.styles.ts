import { css } from '@emotion/react';

const container = css`
  max-width: 1128px;
  margin: 40px auto 0 auto;
`;
const config__btn = css`
  padding: 12px 20px;
  color: white;
  background-color: #1e1ed2;
  border: none;
`;
const car__img = css`
  width: inherit;
  opacity: 20%;
`;
const configurations__container = css`
  margin-top: 60px;
  min-width: 1128px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 24px;
  }
`;
const img = css`
  width: 800px;
`;
const container__header = css`
  display: flex;
  justify-content: space-between;
`;
const styles = {
  configurations__container,
  config__btn,
  container__header,
  img,
  container,
  car__img,
};

export default styles;
