import React from 'react'

// ui
import Button from '@/app/components/ui/button'
import Input from '@/app/components/ui/input'

// styles
import css from './styles.module.scss'

function CreateCategoryPage() {
  return (
    <div className={css.root}>
      <h3 className={css.title}>Create Category</h3>

      <Input type="text" placeholder="Category name" label="Category name" />

      <footer className={css.controls}>
        <Button color="secondary">Cancel</Button>
        <Button>Create</Button>
      </footer>
    </div>
  )
}

export default CreateCategoryPage
