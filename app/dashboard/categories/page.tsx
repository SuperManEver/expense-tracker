import React from 'react'

// ui
import Button from '@/app/components/ui/button'
import Link from 'next/link'

// styles
import css from './styles.module.scss'

function CategoriesPage() {
  return (
    <div className={css.root}>
      <header className={css.header}>
        <h3 className={css.pageTitle}>Categories</h3>

        <Link href="/dashboard/categories/create">
          <Button className={css.createButton}>Create</Button>
        </Link>
      </header>
    </div>
  )
}

export default CategoriesPage
