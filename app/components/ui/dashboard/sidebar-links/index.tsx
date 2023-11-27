'use client'

// vendor
import React from 'react'
import cn from 'clsx'
import { usePathname } from 'next/navigation'

// ui
import Link from 'next/link'
import {
  BanknotesIcon,
  ChartBarIcon,
  FolderOpenIcon,
} from '@heroicons/react/24/outline'

// styles
import css from './styles.module.scss'

const links = [
  { name: 'Home', href: '/dashboard', icon: ChartBarIcon },
  {
    name: 'Expenses',
    href: '/dashboard/expenses',
    icon: BanknotesIcon,
  },
  { name: 'Categories', href: '/dashboard/categories', icon: FolderOpenIcon },
]

function SidebarLinks() {
  const pathname = usePathname()

  return (
    <ul className={css.navigation}>
      {links.map((link) => {
        const LinkIcon = link.icon

        return (
          <Link key={link.href} href={link.href}>
            <div
              className={cn(css.navItem, {
                [css.active]: link.href === pathname,
              })}
            >
              <LinkIcon className={css.icon} />
              <p className={css.title}>{link.name}</p>
            </div>
          </Link>
        )
      })}
    </ul>
  )
}

export default SidebarLinks
