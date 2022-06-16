import type React from 'react';
import { useState } from 'react';
import { signin } from '../api/auth';
import AuthFormTemplate from '../components/AuthFormTemplate';
import { LoadingButton } from '../components/shared/Button';
import Input from '../components/shared/Input';

const SigninPage = () => {
  // signin logic goes here
  const [data, setData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    id: '',
    password: '',
    result: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await signin(data.username, data.password);
      // TODO - Implement global state and store token to localstorage
      // TODO - remove console logs
      // TODO - use uncontrolled component
      console.log('login success');
    } catch {
      setLoading(false);
      // TODO - go error in catch block
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <AuthFormTemplate
      title="Login"
      controls={
        <>
          <Input
            disabled={loading}
            name="username"
            placeholder="username"
            value={data.username}
            variant="primary"
            onChange={handleChange}
          />
          <Input
            disabled={loading}
            name="password"
            placeholder="password"
            type="password"
            value={data.password}
            variant="primary"
            onChange={handleChange}
          />
        </>
      }
      trigger={
        <LoadingButton
          fullWidth
          isLoading={loading}
          size="lg"
          type="submit"
          variant="primary"
        >
          Signin
        </LoadingButton>
      }
      onSubmit={handleSubmit}
    />
  );
};

export default SigninPage;
