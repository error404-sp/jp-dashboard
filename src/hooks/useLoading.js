import { useState, useRef, useEffect } from "react";

function useLoading(initial = true, minDuration = 500) {
  const [isLoading, setIsLoading] = useState(initial);

  const startTimeRef = useRef(null);
  const timeoutRef = useRef(null);

  function startLoading() {
    startTimeRef.current = Date.now();
    setIsLoading(true);
  }

  function stopLoading() {
    const elapsed = Date.now() - (startTimeRef.current || 0);
    const remaining = minDuration - elapsed;
    if (remaining > 0) {
      setTimeout.current = setTimeout(() => setIsLoading(false), remaining);
    }
  }

  function resetLoading() {
    if (timeoutRef) clearTimeout(timeoutRef.current);
    setIsLoading(initial);
  }

  async function withLoading(callbackFn) {
    resetLoading();
    startLoading();
    try {
      return await callbackFn();
    } finally {
      stopLoading();
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { isLoading, startLoading, stopLoading, resetLoading, withLoading };
}

export default useLoading;
