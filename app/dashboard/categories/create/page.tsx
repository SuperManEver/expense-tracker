import React from 'react'

// ui
import Button from '@/app/components/ui/button'

// styles
import css from './styles.module.scss'

function CreateCategoryPage() {
  return (
    <div className={css.root}>
      <h3>Create Category</h3>

      <input type="text" placeholder="Category name" />

      <footer>
        <Button color="secondary">Cancel</Button>
        <Button>Create</Button>
      </footer>
    </div>
  )
}

export default CreateCategoryPage
