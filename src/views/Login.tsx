/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles/Login.styles';
import { BsEye } from 'react-icons/bs';
import { auth } from 'modules';

export const Login: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [shownPassword, setShownPassword] = useState(false);

  const showPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setShownPassword(!shownPassword);
  };

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

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
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
      <div css={styles.login__wrapper}>
        <span css={styles.login__txt}>Car configurator</span>

        <form action="submit" css={styles.login__form}>
          <p css={styles.txt}>Sign in</p>
          <input
            type="email"
            placeholder="Enter your e-mail..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <div>
            <input
              type={shownPassword ? 'text' : 'password'}
              placeholder="Enter your password..."
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
            <button onClick={showPassword} css={styles.btn__show}>
              <BsEye />
            </button>
          </div>

          <button onClick={login}>Submit</button>
        </form>
        <p css={styles.txt}>Or</p>
        <button
          css={styles.login__btn}
          onClick={() => signInWithGoogle()}
          disabled={authing}
        >
          Sign in with Google
        </button>
        <p>
          Don't have an account yet? <Link to={'/register'}>Sign up!</Link>
        </p>
      </div>
    </div>
  );
};
