import styled, { css } from 'styled-components';
import DEFAULT_COLORS from '../../../themes/colors';
import ArrowDown from './ArrowDown';

interface Props {
  title?: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
/**
 * @description
 * Select Component can be used as trigger of Dropdown
 * Note - unavailable for storybook due to SVG import error
 * TODO - will be integrated with Button component
 */
const Select = ({ title, disabled, onClick, ...props }: Props) => {
  return (
    <Wrapper
      disabled={disabled}
      onClick={(e) => {
        if (disabled) return;
        onClick?.(e);
      }}
      {...props}
    >
      {title}
      <ArrowDown />
    </Wrapper>
  );
};

export default Select;

type WrapperProps = Pick<Props, 'disabled'>;

const activationStyle = css<WrapperProps>`
  ${({ disabled }) => {
    if (disabled) {
      return css`
        color: ${DEFAULT_COLORS.GREY_400};
        cursor: default;
      `;
    }
    return css`
      &:hover {
        background-color: ${DEFAULT_COLORS.GREY_100};
      }
    `;
  }}
`;

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.2;
  cursor: pointer;
  padding: 10px 12px;
  border: 2px solid ${DEFAULT_COLORS.GREY_200};
  border-radius: 6px;
  background-color: ${DEFAULT_COLORS.GREY_50};
  transition: background-color 0.1s ease;
  font-size: 14px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  user-select: none;

  /* activation style */
  ${activationStyle}
`;
