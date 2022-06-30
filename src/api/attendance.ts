import instance from './instance';
import type { Attendance, AttendanceResponse } from './types';

export async function getMonthlyAttendanceData(month: number) {
  if (month < 0 || month > 12) {
    throw new Error(
      'month must be higher than 0 and lower than or equal to 12.',
    );
  }

  try {
    const response = await instance.get<AttendanceResponse[]>(
      `/api/attendance/${month}`,
    );

    return response.data;
  } catch {
    throw new Error('error occurred at getMonthlyAttendanceData.');
  }
}

/**
 * @description
 * Add attendance data when user request
 */
export async function postAttendanceData() {
  // TODO - Add logic
  try {
    const response = await instance.post<AttendanceResponse>('/api/attendance');

    return response.data;
  } catch {
    throw new Error('error occurred at postAttendanceData.');
  }
}

export const mockData: Attendance[] = [
  {
    id: 1,
    user: '1',
    timestamp: '2022-06-01',
  },
  {
    id: 2,
    user: '1',
    timestamp: '2022-06-02',
  },
  {
    id: 3,
    user: '1',
    timestamp: '2022-06-03',
  },
  {
    id: 4,
    user: '1',
    timestamp: '2022-06-04',
  },
  {
    id: 5,
    user: '1',
    timestamp: '2022-06-05',
  },
  {
    id: 6,
    user: '1',
    timestamp: '2022-06-06',
  },
  {
    id: 7,
    user: '1',
    timestamp: '2022-06-07',
  },
  {
    id: 8,
    user: '1',
    timestamp: '2022-06-08',
  },
  {
    id: 9,
    user: '1',
    timestamp: '2022-06-09',
  },
  {
    id: 10,
    user: '1',
    timestamp: '2022-06-10',
  },
];
