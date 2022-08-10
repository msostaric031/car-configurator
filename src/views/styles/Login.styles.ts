import { css } from '@emotion/react';

const login__btn = css`
  padding: 25px;
  border: none;
  max-width: 180px;
  border-radius: 15px;
  background-color: #2e2e38;
  color: whitesmoke;
  &:active {
    transform: translateY(2px);
  }
`;

const login__container = css`
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  margin: 0;
  background-color: #2e2e38;
  display: flex;
  align-items: center;
`;

const login__txt = css`
  font-size: inherit;
  font-weight: bold;
  margin: 0 0 40px 0;
  text-transform: uppercase;
  text-align: center;
  color: #2e2e38;
  max-width: 200px;
  padding: 20px 12px;
  margin: 20px 40px;
  border-bottom: 4px solid #2e2e38;
`;

const login__wrapper = css`
  margin: 120px auto;
  padding: 40px 10px 80px 10px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  box-shadow: 3px 3px 5px 0px rgba(38, 38, 38, 1);
`;

const login__form = css`
  display: flex;
  gap: 12px;
  flex-direction: column;
  margin-bottom: 24px;
`;

const btn__show = css`
  border: 1px solid black;
  border-radius: 2px;
`;

const txt = css`
  text-align: center;
`;

const styles = {
  login__btn,
  login__container,
  login__wrapper,
  login__txt,
  login__form,
  btn__show,
  txt,
};

export default styles;
