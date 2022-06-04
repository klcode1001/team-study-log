import { useState } from 'react';
import { mockData } from '../../api/attendence';

/**
 * @description
 * hook that handles attendance data for users
 * covers basic CRUD for data.
 */
function useCalenderData() {
  const [data, setData] = useState(mockData);

  // Load attendance data

  // Update attendance data

  return data;
}

export default useCalenderData;
