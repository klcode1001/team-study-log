import { useCallback, useState, useMemo } from 'react';
import {
  getMonthlyAttendanceData,
  postAttendanceData,
} from '../../api/attendance';
import formatAttendanceData from './useAttendance.helper';
import type {
  AttendanceResponse,
  AttendanceResponseQuery,
} from '../../api/types';

/**
 * @description
 * Hook that handle the user's attendance data for
 * CRUD related Data
 */
function useAttendance() {
  const [attendance, setAttendance] = useState<AttendanceResponse[]>([]);

  /**
   * @description
   * Function to load the log by month
   * @param query `AttendanceResponseQuery`
   */
  const getAttendanceList = useCallback(
    async (query?: AttendanceResponseQuery) => {
      try {
        const response = await getMonthlyAttendanceData(query);

        setAttendance((prev) => [...prev, ...response]);
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  // TODO - Implement sorting algorithm
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
    getAttendanceList,
  };
}

export default useAttendance;
