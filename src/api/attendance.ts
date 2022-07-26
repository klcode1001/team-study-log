import instance from './instance';
import type {
  Attendance,
  AttendanceResponse,
  AttendanceResponseQuery,
} from './types';

/**
 * @description
 * Load attendance data according to query.
 * Loading data by user is available.
 * @param query `{ month?: number; organization?: number;}`
 * @returns `AttendanceResponse[]`
 */
export async function getMonthlyAttendanceData(
  query?: AttendanceResponseQuery
) {
  try {
    const response = await instance.get<AttendanceResponse[]>(
      `/api/attendance`,
      {
        params: query || {},
      }
    );

    return response.data;
  } catch {
    throw new Error('error occurred at getMonthlyAttendanceData.');
  }
}

/**
 * @description
 * add attendance when requested
 */
export async function postAttendanceData() {
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
    timestamp: '2022-10-01',
    organization: {
      id: 1,
      name: 'organization 1',
    },
  },
  {
    id: 2,
    user: '1',
    timestamp: '2022-10-02',
    organization: {
      id: 1,
      name: 'organization 1',
    },
  },
  {
    id: 3,
    user: '1',
    timestamp: '2022-10-03',
    organization: {
      id: 1,
      name: 'organization 1',
    },
  },
  {
    id: 4,
    user: '1',
    timestamp: '2022-10-04',
    organization: {
      id: 1,
      name: 'organization 1',
    },
  },
  {
    id: 5,
    user: '1',
    timestamp: '2022-10-05',
    organization: {
      id: 1,
      name: 'organization 1',
    },
  },
  {
    id: 6,
    user: '1',
    timestamp: '2022-10-06',
    organization: {
      id: 1,
      name: 'organization 1',
    },
  },
  {
    id: 7,
    user: '1',
    timestamp: '2022-10-07',
    organization: {
      id: 1,
      name: 'organization 1',
    },
  },
  {
    id: 8,
    user: '1',
    timestamp: '2022-10-08',
    organization: {
      id: 1,
      name: 'organization 1',
    },
  },
  {
    id: 9,
    user: '1',
    timestamp: '2022-10-09',
    organization: {
      id: 1,
      name: 'organization 1',
    },
  },
  {
    id: 10,
    user: '1',
    timestamp: '2022-10-10',
    organization: {
      id: 1,
      name: 'organization 1',
    },
  },
];
