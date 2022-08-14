import { css } from '@emotion/react';

const container = css`
  position: relative;
  max-width: 1200px;
  margin: 20px auto 40px;
`;

const container__header = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const options__wrapper = css`
  display: flex;
`;

const styles = {
  container,
  container__header,
  options__wrapper,
};

export default styles;
