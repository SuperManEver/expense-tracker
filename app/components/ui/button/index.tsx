import React from 'react';
import cn from 'clsx';

// styles
import css from './styles.module.css';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

function Button({ children, className }: IProps) {
  return (
    <button role="button" className={cn(css.root, className)}>
      {children}
    </button>
  );
}

export default Button;
