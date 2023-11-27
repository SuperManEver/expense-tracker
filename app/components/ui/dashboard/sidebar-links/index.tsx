// vendor
import React from 'react'
import cn from 'clsx'

// ui
import Link from 'next/link'
import {
  BanknotesIcon,
  ChartBarIcon,
  FolderOpenIcon,
} from '@heroicons/react/24/outline'

// styles
import css from './styles.module.scss'

export default function index() {
  return (
    <ul className={css.navigation}>
      <Link href="/overview">
        <div className={cn(css.navItem, css.active)}>
          <ChartBarIcon className={css.icon} />
          <p className={css.title}>Home</p>
        </div>
      </Link>
      <Link href="/expenses">
        <div className={css.navItem}>
          <BanknotesIcon className={css.icon} />
          <p className={css.title}>Expenses</p>
        </div>
      </Link>
      <Link href="/categories">
        <div className={css.navItem}>
          <FolderOpenIcon className={css.icon} />
          <p className={css.title}>Categories</p>
        </div>
      </Link>
    </ul>
  )
}
