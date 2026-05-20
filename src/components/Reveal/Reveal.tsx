'use client';

import { useEffect, useRef, ElementType, ReactNode } from 'react';

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
};

export default function Reveal({ as: Tag = 'div', className = '', children, ...props }: Props) {
  const ref = useRef<Element>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          observer.unobserve(el);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
