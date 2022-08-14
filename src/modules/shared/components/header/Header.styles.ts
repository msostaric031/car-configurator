import { css } from '@emotion/react';

const header = css`
  display: flex;
  justify-content: space-between;
  background-color: #2e2e38;
  min-height: 80px;
  color: white;
  align-items: center;
`;

const header__right = css`
  display: flex;
  gap: 40px;
  margin-right: 8px;
  align-items: center;
`;

const header__btn = css`
  background-color: transparent;
  padding: 8px;
  color: white;
  border: 1px solid grey;
`;
const header__logo = css`
  margin-left: 80px;
  text-decoration: none;
  font-size: 36px;
  font-weight: bold;
`;

const header__link = css`
  text-decoration: none;
  color: white;
`;

const styles = {
  header,
  header__right,
  header__btn,
  header__logo,
  header__link,
};

export default styles;
