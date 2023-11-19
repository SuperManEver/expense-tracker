import React from 'react';
import cn from 'clsx';

// styles
import css from './styles.module.css';

interface IProps {
  children: React.ReactNode;
  className?: string;
  variant?:
    | 'solid'
    | 'bordered'
    | 'light'
    | 'flat'
    | 'faded'
    | 'shadow'
    | 'ghost';
  radius?: 'none' | 'sm' | 'md' | 'lg';
  size?: 'sm' | 'md' | 'lg';
}

function Button({ children, className, variant = 'solid' }: IProps) {
  const variantCn = cn({ [css[variant]]: true });

  return (
    <button role="button" className={cn(css.root, variantCn, className)}>
      {children}
    </button>
  );
}

export default Button;
