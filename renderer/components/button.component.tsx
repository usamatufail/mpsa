import { MouseEventHandler, ReactNode } from 'react';

export const Button = ({
  children,
  type = 'button',
  onClick,
  className = '',
  disabled = false,
}: {
  children: ReactNode;
  type?: 'submit' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <button
      type={type}
      className={`w-full bg-[#2EC4B6] rounded-[8px] text-[#000000]  h-[56px] ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
