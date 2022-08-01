import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Storage from '../utils/storage';

const storage = new Storage();

interface Props {
  children: JSX.Element;
}

/**
 * @description
 * Where or not user is logged in, 
 * if user is not logged in, redirect to login page,
 * if user is logged in, redirect to previous page
 */
const Protected = ({ children }: Props) => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const value = storage.getItem<string>('token', '');

    if (!value) {
      navigate('/signin');
    }
  }, [navigate]);

  return children;
};

export default Protected;
