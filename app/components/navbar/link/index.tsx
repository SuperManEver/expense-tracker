'use client'

// vendor
import Link from 'next/link'
import cn from 'clsx'
import { usePathname } from 'next/navigation'

// styles
import css from './styles.module.css'

interface IProps {
  href: string
  children: React.ReactNode
  className?: string
  wrapperClassName?: string
}

function NavbarLink({ href, children, className, wrapperClassName }: IProps) {
  const pathname = usePathname()

  return (
    <div className={cn(css.wrapper, wrapperClassName)}>
      <Link
        className={cn(css.root, { [css.active]: pathname === href }, className)}
        href={href}
      >
        {children}
      </Link>
    </div>
  )
}

export default NavbarLink
