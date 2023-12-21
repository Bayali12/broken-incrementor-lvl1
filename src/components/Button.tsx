import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled,
  className,
}) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
