import { useState, useEffect, useRef } from 'react';

function useFetch<Data = unknown, Error = unknown>(
  queryFn: () => Promise<Data>,
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Data | null>(null);

  // NOTE - Infinite loop is occured without this code
  const ref = useRef(queryFn);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await ref.current();

        setData(response);
      } catch (serverError) {
        setError(serverError as Error);
      } finally {
        setIsLoading(false);
      }
    })();
    return () => setIsLoading(false);
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}

export default useFetch;
