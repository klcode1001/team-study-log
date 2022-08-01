import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { createOrganization } from '../api/organization';
import AuthFormTemplate from '../components/AuthFormTemplate';
import AuthFormLayout from '../components/layouts/AuthFormLayout';
import Button from '../components/shared/Button/LoadingButton';
import Input from '../components/shared/Input';
import useForm from '../hooks/shared/useForm';
import useLoading from '../hooks/shared/useLoading';
import DEFAULT_COLORS from '../themes/colors';

const GroupCreatePage = () => {
  const navigate = useNavigate();
  const [isLoading, startTransition] = useLoading();
  const { data, handleChange, handleSubmit, handleBlur, touched, errors } =
    useForm({
      initialState: {
        groupName: '',
      },
      onSubmit: async (e) => {
        e.preventDefault();
        // make api call
        try {
          await startTransition(createOrganization(data.groupName));

          // Move main page
          navigate('/');
        } catch (error) {
          console.error(error);
          window.alert(error);
        }
        // Move main page
      },
      validate: (data) => {
        const errors = Object.keys(data).reduce(
          (acc, cur) => ({ ...acc, [cur]: '' }),
          {} as Partial<typeof data>
        );

        if (!data.groupName.trim()) {
          errors.groupName =
            'Group name must be longer than 1 at least';
        }

        return errors;
      },
    });

  return (
    <AuthFormLayout>
      <AuthFormTemplate
        title="Create Group"
        controls={
          <Input
            disabled={isLoading}
            label="Group Name"
            name="groupName"
            placeholder="Group Name"
            value={data.groupName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        }
        footer={
          <ErrorMessage>
            {touched.groupName && errors.groupName ? errors.groupName : ''}
          </ErrorMessage>
        }
        trigger={
          <Button
            fullWidth
            isLoading={isLoading}
            size="lg"
            type="submit"
            variant="primary"
          >
            Create Group
          </Button>
        }
        onSubmit={handleSubmit}
      />
    </AuthFormLayout>
  );
};

export default GroupCreatePage;

const ErrorMessage = styled.div`
  color: ${DEFAULT_COLORS.ERROR_400};
`;
