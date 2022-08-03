/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styles from './styles/Login.styles';

export const Login: React.FunctionComponent = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <div css={styles.login__container}>
      <p>Login Page</p>
      <button
        css={styles.login__btn}
        onClick={() => signInWithGoogle()}
        disabled={authing}
      >
        Sign in with Google
      </button>
    </div>
  );
};
