import { useState, useRef, useEffect } from "react";

const useObserver = (options) => {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  const observer = useRef(null);

  const observerOptions = options || {};

  useEffect(() => {
    if (elements.length) {
      observer.current = new IntersectionObserver((observedEntries) => {
        setEntries(observedEntries);
      }, observerOptions);
      elements.forEach((element) => observer.current.observe(element));
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [observer.current, setElements, entries]);
};

export default useObserver;
