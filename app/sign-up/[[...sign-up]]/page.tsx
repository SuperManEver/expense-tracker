import { SignUp } from '@clerk/nextjs'

import css from './styles.module.css'

function Page() {
  return (
    <div className={css.wrapper}>
      <SignUp />
    </div>
  )
}

export default Page
