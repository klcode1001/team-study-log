import { useEffect, useRef } from 'react';

type IntervalCallback = () => void;

function useInterval(callback: IntervalCallback, delay?: number) {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const callbackRef = useRef<IntervalCallback>(callback);

  useEffect(() => {
    // No action is happened without setting delay.
    if (typeof delay === 'undefined') {
      return () => {
        return;
      };
    }

    const tick = () => {
      callbackRef.current();
    };

    intervalRef.current = setInterval(tick, delay);
    return () => {
      intervalRef.current && clearInterval(intervalRef.current);
    };
  }, [delay]);
}

export default useInterval;
