import React, { RefObject, useEffect, useState } from 'react';

interface UseIntersectionObserverProps {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
  ref: RefObject<Element>;
}

const useIntersectionObserver = ({ root, rootMargin = '0px', threshold = 0, ref }: UseIntersectionObserverProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleOnIntersect = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(handleOnIntersect, { root, rootMargin, threshold });
    console.log(root, rootMargin);
    const currentTarget = ref?.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [root, rootMargin, threshold]);
  return isVisible;
};
export default useIntersectionObserver;
