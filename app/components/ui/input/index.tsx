// vendor
import React from 'react'
import cn from 'clsx'

// styles
import css from './styles.module.scss'

type IProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string
}

function Input({ className, value, label, name }: IProps) {
  return (
    <>
      <label className={css.label} htmlFor={name}>
        {label}
      </label>
      <input name={name} value={value} className={cn(css.root, className)} />
    </>
  )
}

export default Input
