import { useEffect, useId, useState } from 'react';

const createElement = (id: string) => {
  const el = document.createElement('div');
  el.setAttribute('id', id);
  return el;
};

export const usePortal = (getContainer?: () => HTMLElement | null) => {
  const id = useId().replace(/\:/gi, '');
  const [elSnapshot, setElSnapshot] = useState<HTMLElement | null>(
    createElement(id)
  );

  useEffect(() => {
    const customContainer = getContainer ? getContainer() : null;
    const parentElement = customContainer || document.body;
    const beforeElement: HTMLElement | null = parentElement.querySelector(
      `#${id}`
    );
    const el = beforeElement || createElement(id);

    if (!beforeElement) {
      parentElement.appendChild(el);
    }
    setElSnapshot(el);
  }, []);

  return elSnapshot;
};
