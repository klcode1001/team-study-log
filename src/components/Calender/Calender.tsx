import { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import {
  useAttendanceDispatchContext,
  useAttendanceStateContext,
} from '../../contexts/AttendanceProvider';
import useCalender from '../../hooks/useCalender';
import CalenderHeader from './CalenderHeader';
import CalenderInner from './CalenderInner';

export type CellClickEventHandler = (timestamp: string) => void;

const Calender = () => {
  const {
    calender,
    setPrevMonthCalender,
    setCurrentMonthCalender,
    setNextMonthCalender,
  } = useCalender();
  const attendance = useAttendanceStateContext();
  const { getAttendanceList } = useAttendanceDispatchContext();

  const handleClickItem: CellClickEventHandler = useCallback(
    (timestamp: string) => {
      // eslint-disable-next-line no-console
      console.log(timestamp);
    },
    []
  );

  useEffect(() => {
    const month = new Date().getMonth();
    getAttendanceList({ month: month + 1 });
  }, [getAttendanceList]);

  return (
    <Container>
      <CalenderHeader
        title={`${calender.year}년 ${calender.month + 1}월`}
        onCurrent={setCurrentMonthCalender}
        onNext={setNextMonthCalender}
        onPrev={setPrevMonthCalender}
      />
      <CalenderInner
        calender={calender}
        items={attendance}
        onClickItem={handleClickItem}
      />
    </Container>
  );
};

export default Calender;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
