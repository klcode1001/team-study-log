import { useState } from 'react';
import useInterval from '../shared/useInterval';

/**
 * @description
 * timer base on useInterval
 * A new second is updated once every second.
 * TODO - Implement the simplest timer and then refine it.
 */
function useTimer() {
  const [time, setTime] = useState(() => Date.now());

  useInterval(() => {
    const now = Date.now();
    setTime(now);
  }, 1000);

  return time;
}

export default useTimer;
