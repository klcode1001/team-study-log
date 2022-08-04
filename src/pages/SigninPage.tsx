import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signin } from '../api/auth';
import AuthFormTemplate from '../components/AuthFormTemplate';
import AuthFormLayout from '../components/layouts/AuthFormLayout';
import { LoadingButton } from '../components/shared/Button';
import Input from '../components/shared/Input';
import useForm from '../hooks/shared/useForm';
import Storage from '../utils/storage';

const storage = new Storage();

const SigninPage = () => {
  // signin logic goes here
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { data, handleSubmit, handleChange } = useForm({
    initialState: {
      username: '',
      password: '',
    },
    onSubmit: async () => {
      try {
        setLoading(true);
        const response = await signin(data.username, data.password);

        storage.setItem('token', response.token);

        // go to main page
        navigate('/', { replace: true });
      } catch {
        setLoading(false);
        // TODO - go error in catch block
        alert('Incorrect username or password');
      }
    },
  });

  return (
    <AuthFormLayout>
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
    </AuthFormLayout>
  );
};

export default SigninPage;
