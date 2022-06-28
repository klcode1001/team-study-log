import { useCallback, useState } from 'react';
import {
  getMonthlyAttendanceData,
  postAttendanceData,
} from '../../api/attendance';
import type { Attendance } from '../../api/types';

/**
 * @description
 * Hook that handle the user's attendance data for
 * CRUD related Data
 */
function useAttendance() {
  const [attendence, setAttendence] = useState<Attendance[]>([]);

  // ANCHOR - can be used differently by post method
  const getMonthlyAttendance = useCallback(async (month: number) => {
    try {
      const response = await getMonthlyAttendanceData(month);

      const attendanceData: Attendance[] = response.map((data) => ({
        ...data,
        user: data.user.username,
      }));

      setAttendence((prev) => [...prev, ...attendanceData]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // TODO - Implement sort algorithm
  const addAttendence = useCallback(async () => {
    try {
      const response = await postAttendanceData();
      setAttendence((prev) => [
        ...prev,
        { ...response, user: response.user.username },
      ]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { attendence, addAttendence, getMonthlyAttendance };
}

export default useAttendance;
