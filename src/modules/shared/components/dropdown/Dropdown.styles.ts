import { css } from '@emotion/react';

const navbar = css`
  background-color: transparent;

  a {
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
`;

const dropdown__btn = css`
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
`;

const dropdown__content = css`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0px;

  &:hover {
    background-color: #ddd;
  }

  a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
`;
const dropdown = css`
  float: left;

  &:hover + ${dropdown__content} {
    display: block;
  }
`;
const styles = {
  navbar,
  dropdown,
  dropdown__btn,
  dropdown__content,
};

export default styles;
