import React from 'react';
import { createFirebase } from '../InitFirebase';

type Props = {
  children?: React.ReactNode;
};
export const FirebaseProvider: React.FC<Props> = ({ children }) => {
  createFirebase();

  return <>{children}</>;
};
