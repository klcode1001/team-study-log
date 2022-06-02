import styled from 'styled-components';
import { formatMonthDate } from '../../utils/dateFormat';

interface Props {
  year: number;
  month: number;
  date: number;
  calenderMonth: number;
}

const ColumnHeader = ({ calenderMonth, year, month, date }: Props) => {
  const currentDate = new Date(Date.now());
  return (
    <Container>
      <CalenderDate
        isCurrentDate={currentDate.getDate() === date}
        isCurrentMonth={currentDate.getMonth() === month}
        isCurrentYear={currentDate.getFullYear() === year}
        isUserSetMonth={calenderMonth === month}
      >
        {date === 1 ? formatMonthDate(month, date) : date}
      </CalenderDate>
    </Container>
  );
};

export default ColumnHeader;

interface CalenderDateProps {
  isUserSetMonth: boolean;
  isCurrentMonth: boolean;
  isCurrentYear: boolean;
  isCurrentDate: boolean;
}

const Container = styled.div`
  display: flex;
  // TODO: Delete later
  justify-content: flex-end;
  padding-bottom: 0.5rem;
`;

const CalenderDate = styled.span<CalenderDateProps>`
  display: inline-block;
  min-width: 22px;
  min-height: 22px;
  border-radius: 50%;

  color: ${({
    isCurrentYear,
    isCurrentMonth,
    isCurrentDate,
    isUserSetMonth,
  }) => {
    if (isCurrentYear && isCurrentMonth && isCurrentDate) {
      return `#ffffff`;
    }

    if (!isUserSetMonth) {
      return `rgba(55, 53, 47, 0.5)`;
    }

    return ``;
  }};

  background-color: ${({ isCurrentYear, isCurrentMonth, isCurrentDate }) =>
    isCurrentYear && isCurrentMonth && isCurrentDate ? `rgb(235, 87, 87)` : ''};

  font-size: 14px;
`;