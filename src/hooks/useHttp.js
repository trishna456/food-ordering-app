import { useCallback, useEffect, useState } from 'react';

// helper utility function for general dealing with sending request
async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || 'Something went wrong, failed to send request.'
    );
  }

  return resData;
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function clearData() {
    setData(initialData);
  }

  // to prevent creation of a new function object everytime the state changes and the component is re-rendered
  const sendRequest = useCallback(
    // send request and updating state based on request status
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (error) {
        setError(error.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    // in this app, get request must be sent when the component to which it belongs gets rendered
    if ((config && (config.method === 'GET' || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    // exposing the states and function to all components that will use this hook
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
}
