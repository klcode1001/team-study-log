import { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import useAttendance from '../../hooks/useAttendance';
import useCalender from '../../hooks/useCalender';
import { formatYearMonth } from '../../utils/dateFormat';
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
  const { attendance, addAttendence, getMonthlyAttendance } = useAttendance();
  
  /**
   * @description
   * check attendance when clicked.
   * ANCHOR
   * This is a temporary implementation and should be changed later.
   * Use try...catch block to check if you checked in on time.
   * If you have already checked in, you should not react when you press it.
   * There is also a need to change the data structure to set.
   */
  const handleClickItem: CellClickEventHandler = useCallback(async () => {
    await addAttendence();
  }, [addAttendence]);

  // NOTE - Add just the date for today and add others by clicking button.
  useEffect(() => {
    const month = new Date().getMonth();
    getMonthlyAttendance(month + 1);
  }, [getMonthlyAttendance]);

  return (
    <Container>
      <CalenderHeader
        title={formatYearMonth(calender.year, calender.month)}
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
