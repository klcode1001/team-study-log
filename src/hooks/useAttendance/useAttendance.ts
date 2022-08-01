import { useCallback, useState, useMemo } from 'react';
import {
  getAttendanceList as getAttendanceData,
  postAttendanceData,
} from '../../api/attendance';
import formatAttendanceData from './useAttendance.helper';
import type {
  AttendanceResponse,
  AttendanceResponseQuery,
} from '../../api/types';

export type GetAttendanceListHandler = (
  query?: AttendanceResponseQuery
) => Promise<void>;
export type AddAttendanceHandler = (organizationId: number) => Promise<void>;

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
  const getAttendanceList: GetAttendanceListHandler = useCallback(
    async (query) => {
      try {
        const response = await getAttendanceData(query);

        setAttendance((prev) => [...prev, ...response]);
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  const addAttendance: AddAttendanceHandler = useCallback(
    async (organizationId) => {
      try {
        const response = await postAttendanceData(organizationId);
        setAttendance((prev) => [...prev, response]);
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

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
