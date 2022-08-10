import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

interface AuthProps {
  children: React.ReactNode;
}

export const AuthRoute: React.FC<AuthProps> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      navigate('/login');
    }
  });

  useEffect(() => {
    AuthCheck;
  }, [auth]);

  if (loading) return <p>loading ...</p>;

  return <div>{children}</div>;
};
