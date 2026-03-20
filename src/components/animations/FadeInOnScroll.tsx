'use client';

import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-in' | 'fade-in-up' | 'slide-in-right';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const animationClasses: Record<AnimationType, string> = {
  'fade-in': 'animate-fade-in',
  'fade-in-up': 'animate-fade-in-up',
  'slide-in-right': 'animate-slide-in-right',
};

export default function FadeInOnScroll({
  children,
  className,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}: FadeInOnScrollProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const delayClass = delay > 0 ? `animation-delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        inView && animationClasses[animation],
        inView && delayClass,
        className
      )}
      style={delay > 0 && delay % 100 !== 0 ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
