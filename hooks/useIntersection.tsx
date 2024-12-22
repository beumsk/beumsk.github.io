import { useState, useEffect, useRef } from 'react';

// observed element needs an id and ref to be defined like this
// <section id="data" ref={(el) => (refs.current.data = el)}></section>
// isVisible is an object with the id of the element as key and a boolean as value like this
// { data: true }

const useIntersection = (threshold = 0.1, delay = 500) => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const refs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    Object.values(refs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(refs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [threshold, delay]);

  return { isVisible, refs };
};

export default useIntersection;
