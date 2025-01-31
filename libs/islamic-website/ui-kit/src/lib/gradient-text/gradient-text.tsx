import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export function GradientText({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={clsx(
        'bg-gradient-to-r from-[#36FFF3] to-[#18FFAC] bg-clip-text text-transparent',
        className,
      )}
    >
      {children}
    </span>
  );
}
