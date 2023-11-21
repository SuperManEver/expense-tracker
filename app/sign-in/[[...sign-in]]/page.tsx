import { SignIn } from '@clerk/nextjs'

import css from './styles.module.css'

function Page() {
  return (
    <div className={css.wrapper}>
      <SignIn />
    </div>
  )
}

export default Page
