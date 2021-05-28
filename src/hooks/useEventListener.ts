import { useEffect, useRef } from 'react';

export const useEventListener = (
  eventName: string,
  handler: (event: Event) => void,
  element = window,
) => {
  const savedHandler = useRef<(event: Event) => void>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event) => savedHandler.current(event);
    window.addEventListener(eventName, eventListener);

    return () => {
      window.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};
