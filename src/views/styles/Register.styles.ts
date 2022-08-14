import { css } from '@emotion/react';

const register__form = css`
  display: flex;
  gap: 12px;
  flex-direction: column;
  margin-bottom: 24px;
`;

const register__container = css`
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  margin: 0;
  background-color: #2e2e38;
  display: flex;
  align-items: center;
`;

const register__wrapper = css`
  margin: 120px auto;
  padding: 40px 10px 80px 10px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  box-shadow: 3px 3px 5px 0px rgba(38, 38, 38, 1);
  input {
    max-width: 200px;
  }
`;
const btn__show = css`
  border: 1px solid black;
  border-radius: 2px;
`;

const txt = css`
  text-align: center;
`;

const styles = {
  register__form,
  register__container,
  register__wrapper,
  btn__show,
  txt,
};

export default styles;
