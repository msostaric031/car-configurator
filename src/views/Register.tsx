/** @jsxImportSource @emotion/react */
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { BsEye } from 'react-icons/bs';
import styles from './styles/Register.styles';
import { Link } from 'react-router-dom';

export const Register: React.FC = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [shownPassword, setShownPassword] = useState(false);

  const register = async (e: React.FormEvent) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((response) => {
        console.log(response.user.uid);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setShownPassword(!shownPassword);
  };

  return (
    <div css={styles.register__container}>
      <div css={styles.register__wrapper}>
        <form action="submit" css={styles.register__form}>
          <p css={styles.txt}>Register</p>

          <input
            type="email"
            placeholder="Enter your e-mail..."
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <div>
            <input
              type={shownPassword ? 'text' : 'password'}
              placeholder="Enter your password..."
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
            <button onClick={showPassword} css={styles.btn__show}>
              <BsEye />
            </button>
          </div>

          <button onClick={register}>Submit</button>
          <span>
            Already have an account? <Link to="/login">Sign in!</Link>
          </span>
        </form>
      </div>
    </div>
  );
};
