import type { FormHTMLAttributes } from 'react';
import styled from 'styled-components';
import DEFAULT_BREAKPOINTS from '../../themes/breakpoints';
import DEFAULT_HEADING_STYLES from '../../themes/headings';
import DEFAULT_SHADOWS from '../../themes/shadows';
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

  padding: 32px 48px;

  width: 100%;
  border-radius: 6px;
  box-shadow: ${DEFAULT_SHADOWS.dp2};

  @media screen and (max-width: ${DEFAULT_BREAKPOINTS.md}px) {
    padding: 32px 16px;
  }

  @media screen and (max-width: ${DEFAULT_BREAKPOINTS.sm}px) {
    padding: 16px 8px;
  }
`;

const Title = styled.div`
  margin: 36px 0;
  text-align: center;

  @media screen and (max-width: ${DEFAULT_BREAKPOINTS.md}px) {
    * {
      font-size: ${DEFAULT_HEADING_STYLES.h4.fontSize}px;
      line-height: ${DEFAULT_HEADING_STYLES.h4.lineHeight}px;
    }
  }
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
