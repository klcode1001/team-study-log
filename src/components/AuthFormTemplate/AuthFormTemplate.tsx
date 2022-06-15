import type { FormHTMLAttributes } from 'react';
import styled from 'styled-components';
import DEFAULT_COLORS from '../../themes/colors';
import { H1 } from '../shared/Headings';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  /** prop for the title of form */
  title?: string;

  /** prop for the Input Controls of form */
  controls?: React.ReactNode;

  /** props that get the button fire form event */
  trigger?: React.ReactNode;

  /** prop get the additional data of form */
  footer?: React.ReactNode;
}

/**
 * TODO: add Error handler
 */
const AuthFormTemplate = ({
  title,
  controls,
  trigger,
  footer,
  ...props
}: Props) => (
  <Form {...props}>
    <Title>
      <H1>{title}</H1>
    </Title>
    <Controller>{controls}</Controller>
    <Trigger>{trigger}</Trigger>
    {footer && <Footer>{footer}</Footer>}
  </Form>
);

const Form = styled.form`
  /** flex attributes */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 32px 64px;

  width: 100%;
  border: 2px solid ${DEFAULT_COLORS.GREY_200};
  border-radius: 6px;
`;

const Title = styled.div`
  margin: 36px 0;
  text-align: center;
`;

const Controller = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 100%;
  margin: 16px 0;
`;

const Trigger = styled.div`
  width: 100%;
  margin: 32px 0;
`;

const Footer = styled.div`
  width: 100%;
  margin: 16px 0;

  font-size: 14px;
  line-height: 1.2;
  text-align: center;
`;

export default AuthFormTemplate;
