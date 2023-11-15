import { useState, useEffect } from 'react';
import axios from 'axios';

export interface useFetchProps {
  apiHost: string;
  endpoint: string;
  param?: string | number;
}

function useFetch(props: useFetchProps) {
  const { apiHost, endpoint, param } = props;
  const [data, setData] = useState<any[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${apiHost}/${endpoint}/${param && param}`);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  }

  const refetch = () => {
    fetchData();
  }

  return { data, isLoading, isError, refetch };
}

export default useFetch;
