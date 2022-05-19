import ky from "ky";
import { useCallback, useEffect, useState } from "react";

export interface useFetchResult<T> {
  loading: boolean;
  data: T | undefined;
}

export const useFetch = <T>(path: string | undefined): useFetchResult<T> => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T>();

  const fetchData = useCallback(async (path) => {
    if (path) {
      setLoading(true);
      const result = await ky(path)
        .json()
        .catch((e) => {
          console.error(e);
        });
      setLoading(false);
      setData(result as T);
    }
  }, []);

  useEffect(() => {
    fetchData(path);
  }, [fetchData, path]);

  return {
    loading,
    data,
  };
};
