import React from 'react'
import cn from 'clsx'

// styles
import css from './styles.module.scss'

interface IProps {
  children: React.ReactNode
  className?: string
  variant?:
    | 'solid'
    | 'bordered'
    | 'light'
    | 'flat'
    | 'faded'
    | 'shadow'
    | 'ghost'
  radius?: 'none' | 'sm' | 'md' | 'lg'
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'light'
}

function Button({
  children,
  className,
  variant = 'solid',
  color = 'primary',
}: IProps) {
  const variantCn = cn({ [css[variant]]: true })
  const colorCn = cn({ [css[color]]: true })

  return (
    <button
      role="button"
      className={cn(css.root, variantCn, colorCn, className)}
    >
      {children}
    </button>
  )
}

export default Button
