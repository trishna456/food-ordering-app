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

  /*
   * Wrapping sendRequest with useCallback
   * to prevent creation of a new function object everytime the state changes and the component is re-rendered
   * since we are updating some state in this function, it will cause the component that uses this hook to execute again
   * this will cause the effect function to run again
   * because sendRequest will change everytime the surrounding component executes again
   * because a new function object will be created
   * so wrapping it with a useCallback
   */

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
  }, [sendRequest, config]); // since sendRequest is defined outside useEffect, adding it as a dependency here

  return {
    // exposing the states and function to all components that will use this hook
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
}
