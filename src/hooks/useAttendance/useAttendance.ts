import { useCallback, useState, useMemo } from 'react';
import {
  getMonthlyAttendanceData,
  postAttendanceData,
} from '../../api/attendance';
import formatAttendanceData from './useAttendance.helper';
import type { AttendanceResponse } from '../../api/types';

/**
 * @description
 * Hook that handle the user's attendance data for
 * CRUD related Data
 */
function useAttendance() {
  const [attendance, setAttendance] = useState<AttendanceResponse[]>([]);

  // ANCHOR - can be used differently by post method
  const getMonthlyAttendance = useCallback(async (month: number) => {
    try {
      const response = await getMonthlyAttendanceData(month);

      setAttendance((prev) => [...prev, ...response]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // TODO - Implement sort algorithm
  const addAttendance = useCallback(async () => {
    try {
      const response = await postAttendanceData();
      setAttendance((prev) => [...prev, response]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const attendanceMemo = useMemo(
    () => formatAttendanceData(attendance),
    [attendance]
  );

  return {
    attendance: attendanceMemo,
    addAttendance,
    getMonthlyAttendance,
  };
}

export default useAttendance;
