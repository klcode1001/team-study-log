import { useCallback } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import useCalender from '../../hooks/useCalender';
import useCalenderData from '../../hooks/useCalenderData';
import { formatYearMonth } from '../../utils/dateFormat';
import CalenderHeader from './CalenderHeader';
import CalenderInner from './CalenderInner';
import type { Attendance } from '../../api/attendance';

export type CellClickEventHandler = (timestamp: string) => void;

const Calender = () => {
  const {
    calender,
    setPrevMonthCalender,
    setCurrentMonthCalender,
    setNextMonthCalender,
  } = useCalender();
  const { attendence, addAttendence } = useCalenderData();
  
  /**
   * @description
   * check attendance when clicked.
   * ANCHOR
   * This is a temporary implementation and should be changed later.
   * Use try...catch block to check if you checked in on time.
   * If you have already checked in, you should not react when you press it.
   * There is also a need to change the data structure to set.
   */
  const handleClickItem: CellClickEventHandler = useCallback(
    (timestamp: string) => {
      // create Attendence Object
      const newAttendence: Attendance = {
        id: v4(),
        user: '1',
        timestamp,
      };

      addAttendence(newAttendence);
    },
    [addAttendence],
  );

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
        items={attendence}
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
