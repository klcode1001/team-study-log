import { useCallback, useState } from 'react';
import { mockData } from '../../api/attendance';
import type { Attendance } from '../../api/attendance';

/**
 * @description
 * hook that handles attendance data for users
 * covers basic CRUD for data.
 */
function useCalenderData() {
  const [attendence, setAttendence] = useState(mockData);

  // Load attendance data

  // Update attendance data
  const addAttendence = useCallback((newData: Attendance) => {
    setAttendence((prev) => [...prev, newData]);
  }, []);

  return { attendence, addAttendence };
}

export default useCalenderData;
