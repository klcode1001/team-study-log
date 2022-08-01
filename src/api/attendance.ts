import instance from './instance';
import type { AttendanceResponse, AttendanceResponseQuery } from './types';

/**
 * @description
 * Load attendance data according to query.
 * Loading data by user is available.
 * @param query `{ month?: number; organization?: number;}`
 * @returns `AttendanceResponse[]`
 */
export async function getAttendanceList(query?: AttendanceResponseQuery) {
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
export async function postAttendanceData(organizationId: number) {
  try {
    const response = await instance.post<AttendanceResponse>(
      '/api/attendance',
      { organization: organizationId }
    );

    return response.data;
  } catch {
    throw new Error('error occurred at postAttendanceData.');
  }
}
