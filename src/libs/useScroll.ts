import { useEffect, useRef, useState } from 'react';

export const useScroll = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const animationFrame = useRef<number>();

  const onScroll = (e: Event) => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    animationFrame.current = requestAnimationFrame(() => {
      setScrollTop((e.target as HTMLDivElement).scrollTop);
    });
  };

  useEffect(() => {
    const scrollContainer = ref.current;

    if (scrollContainer) {
      setScrollTop(scrollContainer.scrollTop);
      scrollContainer.addEventListener('scroll', onScroll);
    }
    return () => scrollContainer!.removeEventListener('scroll', onScroll);
  }, []);

  return {
    scrollTop,
    ref,
  };
};
