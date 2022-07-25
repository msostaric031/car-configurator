import { css } from '@emotion/react';

const header = css({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#2E2E38',
  minHeight: '80px',
  color: 'white',
  alignItems: 'center',
});

const header__right = css({
  display: 'flex',
  gap: '40px',
  marginRight: '8px',
  alignItems: 'center',
});

const header__btn = css({
  backgroundColor: 'transparent',
  padding: '8px',
  color: 'white',
  borderColor: 'grey',
  border: '1px solid gray',
});
const header__logo = css({
  marginLeft: '80px',
  textDecoration: 'none',
  fontSize: '36px',
  fontWeight: 'bold',
});

const header__link = css({
  textDecoration: 'none',
  color: 'white',
});

const styles = {
  header,
  header__right,
  header__btn,
  header__logo,
  header__link,
};

export default styles;
